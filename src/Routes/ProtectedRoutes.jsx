import React, {useEffect} from "react";
import { useLocation, Navigate } from "react-router-dom";
import {useAuth} from "../Contexts/AuthContext.jsx";

export default function ProtectedRoute({ children,allowedRole }) {
    const { isAuthenticated, openLogin, user } = useAuth();
    const location = useLocation();

    // if (!isAuthenticated) {
    //     // Optionally open login modal
    //     openLogin();
    //
    //     // Redirect to login page or home, preserving attempted path
    //     return <Navigate to="/" state={{ from: location }} replace />;
    // }
    // // Logged in but role does not match
    // if (allowedRole && user.role !== allowedRole) {
    //     return <Navigate to="/not-authorized" replace />;
    // }

    useEffect(() => {
        if (!isAuthenticated) openLogin();
    }, [isAuthenticated, openLogin]);

    // Not logged in → redirect
    if (!isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    // Role mismatch → redirect
    if (allowedRole && user.role !== allowedRole) {
        return <Navigate to="/" replace />;
    }

    return children;
}
