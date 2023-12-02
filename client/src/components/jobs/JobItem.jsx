import { Link } from "react-router-dom";

const JobItem = ({
    _id,
    title,
    location,
    salary,
    companyLogo,
    likes,
}) => {

    return (
        <div className="col-lg-6">
            <div className="box">
                <div className="job_content-box">
                    <div className="img-box">
                        <img src={companyLogo} alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>
                            {title}
                        </h5>
                        <div className="detail-info">
                            <h6>
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <span>
                                    {location}
                                </span>
                            </h6>
                            <h6>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                <span>
                                    ${salary}
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="option-box">
                    <button className="fav-btn">
                        <span className="likes-count">{likes}</span>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </button>
                    <Link to={`/details/${_id}`} className="apply-btn">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default JobItem;