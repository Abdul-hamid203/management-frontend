import React, {useState} from 'react';
import * as OrderService from "../services/OrderService.js";

const StoreHooks = (props) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // apis
    const fetchOrders = async ({filter = null}) => {
        setLoading(true);
        try {
            let response = await OrderService.getOrders();

            if(response.status === 200) {
                if(filter){
                    if (filter.startsWith("paid:")) {
                        const value = filter.split(":")[1] === "true";
                        response = response.filter((o) => o.isPaid === value);
                    } else if (filter.startsWith("status:")) {
                        const value = filter.split(":")[1];
                        response = response.filter((o) => o.status === value);
                    }
                }
                setOrders(response);
            }
        }catch(err) {
            setError(err);
        }finally {
            setLoading(false);
        }
    }
    return { orders, loading, error, refetch: fetchOrders };
}

export default StoreHooks;