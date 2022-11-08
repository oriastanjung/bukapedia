import { Outlet, Navigate } from "react-router-dom";

const UnprivateRoute = () =>{
    
   const data =  localStorage.getItem('token') 
    return data ? <Outlet /> : <Navigate to="/login" />
}
const PrivateRoute = () =>{
   const data =  localStorage.getItem('token') 
    return data ?  <Navigate to="/" /> : <Outlet />
}



export {UnprivateRoute, PrivateRoute}