import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../../services/authService"

import AuthContext from "../../contexts/authContext";


const Logout = () => {
    const { logoutHandler } = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
        authService.logout()
            .then(() => {
                logoutHandler();
                navigate('/');
            })
            .catch(() => {
                logoutHandler();
                navigate('/');
            })
    }, [])

};

export default Logout;