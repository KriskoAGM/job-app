import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/authContext";

const Header = () => {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link className="navbar-brand" to="/">
                        <span>JobHub</span>
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
                            {isAuthenticated && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/create">
                                            Post Job
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/favorites">
                                            Favorites
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">
                                            {username}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout">
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            )}

                            {!isAuthenticated && (
                                <>
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
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

    )
};

export default Header