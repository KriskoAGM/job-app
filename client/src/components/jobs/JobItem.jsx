import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import * as favoriteService from "../../services/likesService.js";

import AuthContext from "../../contexts/authContext";

const JobItem = ({ job }) => {
    const { isAuthenticated } = useContext(AuthContext);

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
                        <button className="fav-btn">
                            <span>0</span>
                            <i className='fa fa-heart-o' aria-hidden="true"></i>
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