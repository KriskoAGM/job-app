import { Link } from "react-router-dom";

const Info = () => {
    return (
        <section className="info_section ">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 info_links">
                        <h4>
                            Menu
                        </h4>
                        <ul>
                            <li className="active">
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="" to="/jobs">
                                    Jobs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>
                            Jobs
                        </h4>
                        <p>
                            Established fact that a reader will be distracted by the readable content of a page when looking at its
                            layout. The point of using Lorem Ipsum
                        </p>
                    </div>
                    <div className="col-md-3">
                        <div className="info_social">
                            <h4>
                                Social Link
                            </h4>
                            <div className="social_container">
                                <div>
                                    <a href="">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="info_form">
                            <h4>
                                Newsletter
                            </h4>
                            <form action="">
                                <input type="text" placeholder="Enter Your Email" />
                                <button type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Info