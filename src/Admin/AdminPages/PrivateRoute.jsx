import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const tokenExpiration = parseInt(sessionStorage.getItem('tokenExpiration'), 10);
        console.log('private Token:', token);
        console.log('private Token Expiration:', tokenExpiration);
        console.log('private Current Time:', Date.now());
        if (token && !isNaN(tokenExpiration) && Date.now() < tokenExpiration) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
        setLoading(false);
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    console.log("private isAuthenticated",isAuthenticated,children)
    
    return isAuthenticated ? children : <Navigate to="/admin/login" />;
};
export default PrivateRoute;