import { useEffect, useState } from 'react';
import {Outlet, Navigate} from 'react-router-dom'

const ProtectRoute = () =>{
    const [token, setToken] = useState(false)
    const isAdmin = localStorage.getItem('role') === 'admin' ? true : false
    useEffect(()=>{
        setToken(localStorage.getItem('token') ? true : false)
    },[token])

    const PrivateRouterFalseLogin = () => {
            return token ? <Outlet /> : <Navigate to="/login" />
    }
    const PrivateRouterTrueLogin = () => {
            return token ? <Navigate to="/" /> : <Outlet />
    }

    return {PrivateRouterFalseLogin, PrivateRouterTrueLogin, isAdmin}
}

export {ProtectRoute}