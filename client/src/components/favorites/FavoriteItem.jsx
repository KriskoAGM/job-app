import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/authContext.jsx";

const FavoriteItem = ({ job }) => {
    const { applyButtonHandler } = useContext(AuthContext);

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
                    <button className="apply-btn" onClick={applyButtonHandler}>
                        Apply
                    </button>
                </div>
            </div>
        </div>
    )
};

export default FavoriteItem;