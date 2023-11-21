import { Link } from "react-router-dom";

import styles from "../../styles/LoginRegister.module.css";

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.login} ${styles.form}`}>
                <header>Login</header>
                <form action="#">
                    <input type="text" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                    <a href="#">Forgot password?</a>
                    <input type="button" className={styles.button} value="Login" />
                </form>
                <div className={styles.signup}>
                    <span className={styles.signup}>Don't have an account?
                        <Link to="/register"><label htmlFor="check">Signup</label></Link>
                    </span>
                </div>
            </div>
        </div>

    )
};

export default Login;