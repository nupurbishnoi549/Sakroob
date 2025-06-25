import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [users, setUsers] = useState([]);
    const [currentScreen, setCurrentScreen] = useState('login');

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
