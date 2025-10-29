// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

const mockUser = {
    name: 'Максим',
    email: 'ffrickkk@example.com',
    photo: 'https://i.pravatar.cc/150?u=maksim',
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const isLoggedIn = !!user;

    const login = () => {
        setUser(mockUser);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
