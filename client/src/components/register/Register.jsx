import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

import styles from "../../styles/Forms.module.css";

const RegisterFormKeys = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);

    const validateForm = (values) => {
        const errors = {};

        // Check if password and confirm password match
        if (values[RegisterFormKeys.Password] !== values[RegisterFormKeys.ConfirmPassword]) {
            errors[RegisterFormKeys.ConfirmPassword] = 'Passwords do not match';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(values[RegisterFormKeys.Email])) {
            errors[RegisterFormKeys.Email] = 'Invalid email address';
        }

        return errors;
    };

    const { values, onChange, onSubmit, errors } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: ''
    }, validateForm);

    return (
        <div className={styles.container}>
            <div className={`${styles.register} ${styles.form}`}>
                <header>Signup</header>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name={RegisterFormKeys.Email}
                        placeholder="Enter your email"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Email]} />
                    {errors[RegisterFormKeys.Email] && (
                        <p className={styles.error}>{errors[RegisterFormKeys.Email]}</p>
                    )}
                    <input
                        type="text"
                        name={RegisterFormKeys.Username}
                        placeholder="Username"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Username]} />
                    <input
                        type="password"
                        name={RegisterFormKeys.Password}
                        placeholder="Create a password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]} />
                    <input
                        type="password"
                        name={RegisterFormKeys.ConfirmPassword}
                        placeholder="Confirm your password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.ConfirmPassword]} />
                    {errors[RegisterFormKeys.ConfirmPassword] && (
                        <p className={styles.error}>{errors[RegisterFormKeys.ConfirmPassword]}</p>
                    )}
                    <input
                        type="submit"
                        className={styles.button}
                        value="Signup" />
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