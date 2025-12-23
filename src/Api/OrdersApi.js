import axios from "axios";

// Base URL for your API
const API_BASE_URL = "https://your-backend.com/api";

export const fetchOrders = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/orders`);
        return response.data; // assuming the API returns an array of orders
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }
};

// crude
// Fetch order by ID
export const fetchOrderById = async (orderId) => {
    const response = await axios.get(`${API_BASE_URL}/${orderId}`);
    return response.data;
};
