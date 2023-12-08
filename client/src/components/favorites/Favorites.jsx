import { useState, useEffect, useContext } from "react";

import * as favoritesService from "../../services/favoritesService.js";

import AuthContext from "../../contexts/authContext.jsx";

import FavoriteItem from "../favorites/FavoriteItem";

const Favorites = () => {
    const { userId } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchUserFavorites = async () => {
            try {
                // Fetch all favorites from the server
                const allFavorites = await favoritesService.getAllFavorites();

                // Filter favorites based on the current user's ID
                const favoritesForUser = allFavorites.filter(favorite => favorite._ownerId === userId);

                // Set the user's favorites in state
                setFavorites(favoritesForUser);
            } catch (error) {
                console.error('Error fetching user favorites:', error);
            }
        };

        fetchUserFavorites();
    }, [userId]);

    return (
        <section className="job_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Favorites
                    </h2>
                </div>
                <div className="job_container">
                    {favorites.length === 0 && <h2 className="heading_container heading_center">No favorites yet</h2>}
                    {favorites.length > 0 && (
                        <div className="row">
                            {favorites.map(job => (
                                <FavoriteItem key={job._id} job={job} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
};

export default Favorites;