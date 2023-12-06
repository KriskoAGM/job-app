import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService'



const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [ auth, setAuth ] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    })

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate('/');
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.username, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate('/');
    };

    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
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