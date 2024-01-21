import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as favoriteService from "../../services/favoritesService.js";

import AuthContext from "../../contexts/authContext";

const JobItem = ({ job }) => {
    const { isAuthenticated, userId } = useContext(AuthContext);
    const [isFavorite, setIsFavorite] = useState(false);
    const [currentFavorite, setCurrentFavorite] = useState({});

    useEffect(() => {
        const loadFavoriteStatus = async () => {
            try {
                if (isAuthenticated) {
                    // Fetch all favorites from the server
                    const allFavorites = await favoriteService.getAllFavorites();

                    // Filter favorites based on the current user's ID
                    const userFavorites = allFavorites.filter(favorite => favorite._ownerId === userId);

                    // Check if the job is in the user's favorites based on old_id
                    const isJobFavorite = userFavorites.some(favorite => favorite.old_id === job._id);

                    // Update the local state based on the result
                    setIsFavorite(isJobFavorite);

                    // Find the current favorite object
                    const favoriteForJob = userFavorites.find(favorite => favorite.old_id === job._id);
                    setCurrentFavorite(favoriteForJob || {});
                }
            } catch (error) {
                console.error('Error loading favorite status:', error);
            }
        };

        loadFavoriteStatus();
    }, [isAuthenticated, userId, job._id]);

    const handleFavoriteClick = async () => {
        try {
            if (!isFavorite) {
                // Add to favorites
                const result = await favoriteService.addFavorite(job);
                setIsFavorite(true);
                setCurrentFavorite(result);
            } else {
                // Remove from favorites
                await favoriteService.removeFavorite(currentFavorite._id);
                setIsFavorite(false);
            }
        } catch (error) {
            console.error("Error handling favorite:", error);
        }
    };

    return (
        <div className="col-lg-6">
            <div className="box">
                <div className="job_content-box">
                    <div className="img-box">
                        <img src={job.companyLogo} alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>
                            {job.title}
                        </h5>
                        <div className="detail-info">
                            <h6>
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <span>
                                    {job.location}
                                </span>
                            </h6>
                            <h6>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                <span>
                                    ${job.salary}
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="option-box">
                    {isAuthenticated && (
                        <button className="fav-btn" onClick={handleFavoriteClick}>
                            <i className={`fa ${isFavorite ? 'fa-heart' : 'fa-heart-o'}`} aria-hidden="true"></i>
                        </button>
                    )}
                    <Link to={`/details/${job._id}`} className="apply-btn">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default JobItem;