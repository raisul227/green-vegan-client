import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="w-100 text-center"><span className="loading loading-spinner text-success"></span></div>
    }
    if (user?.uid) {
        return children;
    } else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate >
    }


};

export default PrivateRoute;