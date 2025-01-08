import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://api.team2658.org/api/auth',
    baseURL:'http://localhost:7001/api/auth',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add the Authorization header
api.interceptors.request.use(
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
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const tokenResponse = await api.get('/validate');
                if (tokenResponse.status === 200) {
                    const newToken = tokenResponse.data.data.user.token;
                    localStorage.setItem('token', newToken);
                    originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                    return api(originalRequest);
                }
            } catch (err) {
                // Redirect to login if token refresh fails
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default api;