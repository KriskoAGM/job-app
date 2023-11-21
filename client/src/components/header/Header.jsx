import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link className="navbar-brand" to="/">
                        <span>Hirevac</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className=""> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about">
                                    {" "}
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/jobs">
                                    Jobs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    <i className="fa fa-user" aria-hidden="true" />
                                    <span>Login</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">
                                    <i className="fa fa-user" aria-hidden="true" />
                                    <span>Sign Up</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

    )
};

export default Header