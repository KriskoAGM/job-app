import { useContext } from "react";
import { Link } from "react-router-dom";

import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

import styles from "../../styles/Forms.module.css";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

const Login = () => {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        <div className={styles.container}>
            <div className={`${styles.login} ${styles.form}`}>
                <header>Login</header>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name={LoginFormKeys.Email}
                        placeholder="Enter your email"
                        onChange={onChange}
                        value={values[LoginFormKeys.Email]} />
                    <input
                        type="password"
                        name={LoginFormKeys.Password}
                        placeholder="Enter your password"
                        onChange={onChange}
                        value={values[LoginFormKeys.Password]} />
                    <a href="#">Forgot password?</a>
                    <input type="submit" className={styles.button} value="Login" />
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