import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom/dist/umd/react-router-dom.development';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <p className='flex justify-center items-center'>loading...</p>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate state ={location.pathname} to = '/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;