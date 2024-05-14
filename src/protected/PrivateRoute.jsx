import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    if (loading) {
        return <div className="text-center flex flex-col items-center justify-center h-[100vh]">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    }
    if (user) {
        return <div>
            {children}
        </div>
    }


    return <Navigate to="/login" state={location?.pathname || '/'} />
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;