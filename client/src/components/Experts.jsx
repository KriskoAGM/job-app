import { Link } from "react-router-dom";

const Experts = () => {
    return (
        <section className="expert_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        LOOKING FOR EXPERTS?
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris
                        iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <img src="images/e1.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <a href="">
                                    Martin Anderson
                                </a>
                                <h6 className="expert_position">
                                    <span>
                                        Web Anaylzer
                                    </span>
                                    <span>
                                        41 Jobs Done
                                    </span>
                                </h6>
                                <span className="expert_rating">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </span>
                                <p>
                                    Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam
                                    nulla
                                    mauris iaculis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <img src="images/e2.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <a href="">
                                    Semanta Klores
                                </a>
                                <h6 className="expert_position">
                                    <span>
                                        Graphic Designer
                                    </span>
                                    <span>
                                        32 Jobs Done
                                    </span>
                                </h6>
                                <span className="expert_rating">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </span>
                                <p>
                                    Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam
                                    nulla
                                    mauris iaculis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <img src="images/e3.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <a href="">
                                    Ryan Martines
                                </a>
                                <h6 className="expert_position">
                                    <span>
                                        SEO Expert
                                    </span>
                                    <span>
                                        27 Jobs Done
                                    </span>
                                </h6>
                                <span className="expert_rating">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </span>
                                <p>
                                    Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam
                                    nulla
                                    mauris iaculis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-box">
                    <Link to="/experts">
                        View All Freelancers
                    </Link>
                </div>
            </div>
        </section>
    )
};

export default Experts