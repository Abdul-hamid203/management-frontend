import * as OrderAPI from "../Api/OrdersApi.js";

// Get all orders
export const getOrders = async () => {
    return await OrderAPI.fetchOrders();
};

// Get order details
export const getOrderDetails = async (orderId) => {
    return await OrderAPI.fetchOrderById(orderId);
};