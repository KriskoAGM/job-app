import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService'



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const [error, setError] = useState('');

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);
            
            if (result.code) {
                setError(result.message);
                return;
            }

            setAuth(result);
            setError('');

            localStorage.setItem('accessToken', result.accessToken);

            navigate('/');
        } catch(error) {
            console.log(error);
        }
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.username, values.password);

        setAuth(result);
        setError('');

        localStorage.setItem('accessToken', result.accessToken);

        navigate('/');
    };

    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem('accessToken');
    };

    const applyButtonHandler = () => {
        alert('You successfully applied for this job');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        applyButtonHandler,
        error,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
        userId: auth._id,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );

};

AuthContext.displayName = 'AuthContext';

export default AuthContext;