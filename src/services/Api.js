import axios from "axios";
import {useAuth} from "../Contexts/AuthContext.jsx";

export const useApi = () => {
    const { accessToken, refreshAccessToken } = useAuth();

    const api = axios.create({
        baseURL: "http://localhost:8069/api/v1",
    });

    api.interceptors.request.use(
        (config) => {
            if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
            return config;
        },
        (error) => Promise.reject(error)
    );

    api.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                const newToken = await refreshAccessToken();
                if (newToken) {
                    originalRequest.headers.Authorization = `Bearer ${newToken}`;
                    return api(originalRequest);
                }
            }
            return Promise.reject(error);
        }
    );

    return api;
};
