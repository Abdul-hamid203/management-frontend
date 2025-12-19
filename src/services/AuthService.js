import axios from "axios";

const API_BASE = "http://localhost:8069/api/v1"; // Replace with your backend URL

export const authService = {
    // LOGIN
    login: async (email, password) => {
        try {
            const response = await axios.post(`${API_BASE}/auth/signin`, {
                email,
                password,
            });
            // Assuming API returns { id, name, email, token }
            return response.data;
        } catch (error) {
            console.error("Login error:", error);
            throw error.response?.data?.message || "Login failed";
        }
    },

    // REGISTER
    register: async ({ name, email, password }) => {
        try {
            const response = await axios.post(`${API_BASE}/auth/register`, {
                name,
                email,
                password,
            });
            // Assuming API returns { id, name, email, token }
            return response.data;
        } catch (error) {
            console.error("Register error:", error);
            throw error.response?.data?.message || "Registration failed";
        }
    },

    // Optional: LOGOUT
    logout: async () => {
        try {
            // If your API supports server-side logout, call it
            // await axios.post(`${API_BASE}/auth/logout`);
            return true;
        } catch (error) {
            console.error("Logout error:", error);
            return false;
        }
    },

    // Optional: Get current user info (token-based)
    getProfile: async (token) => {
        try {
            const response = await axios.get(`${API_BASE}/auth/me`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error("Fetch profile error:", error);
            throw error.response?.data?.message || "Failed to fetch profile";
        }
    },
};
