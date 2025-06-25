import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });

    const [users, setUsers] = useState(() => {
        const storedUsers = localStorage.getItem('users');
        return storedUsers ? JSON.parse(storedUsers) : [];
    });

    const [currentScreen, setCurrentScreen] = useState('login');

    const signup = (userData) => {
        const updatedUsers = [...users, userData];
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setCurrentScreen('login');
    };

    const login = ({ email, password }) => {
        const matched = users.find(
            (u) => u.email === email && u.password === password
        );
        if (matched) {
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', 'false');
        setCurrentScreen('login');
    };

    const switchToSignup = () => setCurrentScreen('signup');
    const switchToLogin = () => setCurrentScreen('login');

    // Sync users from localStorage if they change
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

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
