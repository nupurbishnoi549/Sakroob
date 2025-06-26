import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
    );
    const [users, setUsers] = useState(
        () => JSON.parse(localStorage.getItem('users')) || []
    );
    const [currentUser, setCurrentUser] = useState(
        () => JSON.parse(localStorage.getItem('currentUser')) || null
    );

    useEffect(() => {
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }, [currentUser]);

    const signup = (userData) => {
        const exists = users.some((u) => u.email === userData.email);
        if (exists) return false;
        setUsers((prev) => [...prev, userData]);
        return true;
    };

    const login = ({ email, password }) => {
        const matched = users.find(
            (u) => u.email === email && u.password === password
        );
        if (matched) {
            setIsAuthenticated(true);
            setCurrentUser(matched);
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                currentUser,
                login,
                logout,
                signup,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
