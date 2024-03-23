import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const [loggedInuser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation()
    return loggedInuser.email ? <Outlet /> : <Navigate to='/login' replace state={{from: location}}/>
};

export default PrivateRoute;