import { Outlet,Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/auth";

function ProtectedRoutes(){
    const Auth = useContext(AuthContext)

    const user = Auth?.authState
    return user ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
   
}

export default ProtectedRoutes