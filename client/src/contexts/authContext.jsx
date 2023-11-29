import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService'


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [ auth, setAuth ] = useState({})

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        navigate('/')
    };

    const values = {
        loginSubmitHandler,
        email: auth.email,
        isAuthenticated: !!auth.email,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );

};

AuthContext.displayName = 'AuthContext';

export default AuthContext;