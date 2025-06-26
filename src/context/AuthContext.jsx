import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
    );
    const [users, setUsers] = useState(
        () => JSON.parse(localStorage.getItem('users')) || []
    );
    const [currentScreen, setCurrentScreen] = useState(
        () => localStorage.getItem('currentScreen') || 'login'
    );

    // Sync state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        localStorage.setItem('currentScreen', currentScreen);
    }, [currentScreen]);

    const signup = (userData) => {
        setUsers((prev) => [...prev, userData]);
        setCurrentScreen('login');
    };

    const login = ({ email, password }) => {
        const matched = users.find(
            (u) => u.email === email && u.password === password
        );
        if (matched) {
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        setCurrentScreen('login');
    };

    const switchToSignup = () => setCurrentScreen('signup');
    const switchToLogin = () => setCurrentScreen('login');

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login,
                logout,
                signup,
                switchToSignup,
                switchToLogin,
                currentScreen,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
