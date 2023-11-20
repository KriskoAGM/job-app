import { Link } from "react-router-dom";
import styles from "../../styles/LoginRegister.module.css";

const Register = () => {
    return (
        <div className={styles.container}> 
            <div className={`${styles.register} ${styles.form}`}>
                <header>Signup</header>
                <form action="#">
                    <input type="text" placeholder="Enter your email" />
                    <input type="password" placeholder="Create a password" />
                    <input type="password" placeholder="Confirm your password" />
                    <input type="button" className={styles.button} value="Signup" />
                </form>
                <div className={styles.signup}>
                    <span className={styles.signup}>Already have an account?
                        <Link to="/login"><label htmlFor="check">Login</label></Link>
                    </span>
                </div>
            </div>
        </div>

    )
};

export default Register;