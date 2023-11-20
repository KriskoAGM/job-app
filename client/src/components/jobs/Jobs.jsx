import { Link } from "react-router-dom";

const Jobs = () => {
    return (
        <section className="job_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        RECENT JOBS
                    </h2>
                </div>
                <div className="job_container">
                    <h4 className="job_heading">
                        Recent Jobs
                    </h4>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="box">
                                <div className="job_content-box">
                                    <div className="img-box">
                                        <img src="images/job_logo3.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Looking Graphic Designer (Logo + UI)
                                        </h5>
                                        <div className="detail-info">
                                            <h6>
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                <span>
                                                    Washington. D.C.
                                                </span>
                                            </h6>
                                            <h6>
                                                <i className="fa fa-money" aria-hidden="true"></i>
                                                <span>
                                                    $1200/mo
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="option-box">
                                    <button className="fav-btn">
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                    </button>
                                    <a href="" className="apply-btn">
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box">
                                <div className="job_content-box">
                                    <div className="img-box">
                                        <img src="images/job_logo6.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Are you Typography Expert?
                                        </h5>
                                        <div className="detail-info">
                                            <h6>
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                <span>
                                                    New York
                                                </span>
                                            </h6>
                                            <h6>
                                                <i className="fa fa-money" aria-hidden="true"></i>
                                                <span>
                                                    $56 - $90
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="option-box">
                                    <button className="fav-btn">
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                    </button>
                                    <a href="" className="apply-btn">
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box">
                                <div className="job_content-box">
                                    <div className="img-box">
                                        <img src="images/job_logo5.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Looking WordPress Developer for ThemeForest
                                        </h5>
                                        <div className="detail-info">
                                            <h6>
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                <span>
                                                    Washington. D.C.
                                                </span>
                                            </h6>
                                            <h6>
                                                <i className="fa fa-money" aria-hidden="true"></i>
                                                <span>
                                                    $400 - $540
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="option-box">
                                    <button className="fav-btn">
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                    </button>
                                    <a href="" className="apply-btn">
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box">
                                <div className="job_content-box">
                                    <div className="img-box">
                                        <img src="images/job_logo4.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Hiring Web Designer for Project
                                        </h5>
                                        <div className="detail-info">
                                            <h6>
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                <span>
                                                    Washington. D.C.
                                                </span>
                                            </h6>
                                            <h6>
                                                <i className="fa fa-money" aria-hidden="true"></i>
                                                <span>
                                                    $350 - $450
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="option-box">
                                    <button className="fav-btn">
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                    </button>
                                    <a href="" className="apply-btn">
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-box">
                    <Link to="/jobs">
                        View All
                    </Link>
                </div>
            </div>
        </section>
    )
};

export default Jobs