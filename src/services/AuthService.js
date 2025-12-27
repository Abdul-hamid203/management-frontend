// // import axios from "axios";
// //
// // const API_BASE = "http://localhost:8069/api/v1"; // Replace with your backend URL
// //
// // export const authService = {
// //     // LOGIN
// //     login: async (email, password) => {
// //         try {
// //             const response = await axios.post(`${API_BASE}/auth/signin`, {
// //                 email,
// //                 password,
// //             });
// //             // Assuming API returns { id, name, email, token }
// //             return response.data;
// //         } catch (error) {
// //             console.error("Login error:", error);
// //             throw error.response?.data?.message || "Login failed";
// //         }
// //     },
// //
// //     // REGISTER
// //     register: async ({ name, email, password }) => {
// //         try {
// //             const response = await axios.post(`${API_BASE}/auth/register`, {
// //                 name,
// //                 email,
// //                 password,
// //             });
// //             // Assuming API returns { id, name, email, token }
// //             return response.data;
// //         } catch (error) {
// //             console.error("Register error:", error);
// //             throw error.response?.data?.message || "Registration failed";
// //         }
// //     },
// //
// //     // Optional: LOGOUT
// //     logout: async () => {
// //         try {
// //             // If your API supports server-side logout, call it
// //             // await axios.post(`${API_BASE}/auth/logout`);
// //             return true;
// //         } catch (error) {
// //             console.error("Logout error:", error);
// //             return false;
// //         }
// //     },
// //
// //     // Optional: Get current user info (token-based)
// //     getProfile: async (token) => {
// //         try {
// //             const response = await axios.get(`${API_BASE}/auth/me`, {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             });
// //             return response.data;
// //         } catch (error) {
// //             console.error("Fetch profile error:", error);
// //             throw error.response?.data?.message || "Failed to fetch profile";
// //         }
// //     },
// // };
//
// import axios from "axios";
//
// const API_BASE = "http://localhost:8069/api/v1";
//
// export const authService = {
//     // LOGIN
//     login: async (email, password) => {
//         try {
//             const response = await axios.post(`${API_BASE}/auth/signin`, { email, password });
//             return response.data; // expects { id, name, role, accessToken }
//         } catch (error) {
//             throw error.response?.data?.message || "Login failed";
//         }
//     },
//
//     // REGISTER
//     register: async ({ name, email, password }) => {
//         try {
//             const response = await axios.post(`${API_BASE}/auth/register`, { name, email, password });
//             return response.data;
//         } catch (error) {
//             throw error.response?.data?.message || "Registration failed";
//         }
//     },
//
//     // REFRESH ACCESS TOKEN (uses HttpOnly cookie)
//     refreshAccessToken: async () => {
//         try {
//             const response = await axios.post(`${API_BASE}/auth/refresh_token`, {}, {
//                 withCredentials: true, // send HttpOnly cookie
//             });
//             return response.data; // expects { accessToken }
//         } catch (error) {
//             throw error.response?.data?.message || "Refresh token failed";
//         }
//     },
//
//     // Optional: fetch user profile
//     getProfile: async (token) => {
//         try {
//             const response = await axios.get(`${API_BASE}/auth/me`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             return response.data;
//         } catch (error) {
//             throw error.response?.data?.message || "Failed to fetch profile";
//         }
//     },
// };

import { useApi } from "./api.js";

export const useAuthService = () => {
    const api = useApi();

    const login = async (email, password) => {
        const response = await api.post("/auth/signin", { email, password });
        return response.data; // { id, name, email, token }
    };

    const register = async ({ name, email, password }) => {
        const response = await api.post("/auth/register", { name, email, password });
        return response.data;
    };

    const getProfile = async () => {
        const response = await api.get("/auth/me");
        return response.data;
    };

    return { login, register, getProfile };
};
