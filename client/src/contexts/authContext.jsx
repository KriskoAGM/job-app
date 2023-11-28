import { createContext, useState } from "react";

import * as authService from '../services/authService'


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [ auth, setAuth ] = useState({})

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        console.log(result);
    };

    const values = {
        loginSubmitHandler,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );

};

AuthContext.displayName = 'AuthContext';

export default AuthContext;