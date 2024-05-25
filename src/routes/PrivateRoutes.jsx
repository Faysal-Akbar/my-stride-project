/* eslint-disable react/prop-types */
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../pages/LoadingSpinner';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user){
       return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;