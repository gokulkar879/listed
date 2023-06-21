import React from 'react';
import { Navigate } from 'react-router-dom';

//protected route since we don't want an unauthenticated user to sign in
export default function ProtectedRoute({children, user}) {
    if(user) {
        return children;
    }
    return <Navigate to="/signin" replace={true}/>
}