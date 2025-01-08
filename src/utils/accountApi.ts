// Seperate axios instance for account API calls
import axios from 'axios';
import api from './api';

const accountApi = axios.create({
    baseURL: 'https://api.team2658.org/api/account',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add the Authorization header
accountApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle token expiration
accountApi.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const validateResponse = await api.get('/validate');
                if (validateResponse.status === 200) {
                    const newToken = validateResponse.data.data.user.token;
                    localStorage.setItem('token', newToken);
                    originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                    return accountApi(originalRequest);
                }
            } catch (err) {
                // Redirect to login if token refresh fails
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default accountApi;