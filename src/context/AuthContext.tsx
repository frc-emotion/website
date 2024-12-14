'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/utils/api';

interface User {
    _id: number;
    api_version: string;
    created_at: number;
    email: string;
    first_name: string;
    grade: string;
    last_name: string;
    notification_token: string;
    phone: string;
    role: string;
    student_id: string;
    subteam: string[];
    token: string;
}

interface AuthContextType {
    user: User | null;
    login: (data: { email: string; password: string }) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => {},
    logout: () => {},
    loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem('userObj');
        if (storedUser) {
            try {
                const parsedUser: User = JSON.parse(storedUser);
                setUser(parsedUser);
            } catch (error) {
                console.error('Failed to parse userObj from localStorage:', error);
                setUser(null);
            }
        }
        setLoading(false);
    }, []);

    const login = async (data: { email: string; password: string }) => {
        try {
            const response = await api.post('/login', data);
            if (response.status === 200) {
                const userData: User = response.data.data.user;
                localStorage.setItem('token', userData.token);
                localStorage.setItem('userObj', JSON.stringify(userData));
                setUser(userData);
                router.push('/account'); // Redirect to Account Page after login
            } else {
                // Handle unexpected status codes
                alert(response.data.message || 'Login failed.');
            }
        } catch (error: any) {
            console.error('Login error:', error);
            alert(error.response?.data?.message || 'Login failed.');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userObj');
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};