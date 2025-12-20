// import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
//
// // Simulated API response
// const apiResponse = [
//     {
//         id: "1",
//         orderNumber: "ORD-1001",
//         prepTime: 180,
//         items: [
//             {
//                 name: "Burger",
//                 quantity: 2,
//                 options: { taste: "Spicy", extras: ["Cheese", "Lettuce"] },
//             },
//             {
//                 name: "Fries",
//                 quantity: 1,
//                 options: { taste: "Salty" },
//             },
//             {
//                 name: "Coke",
//                 quantity: 3,
//                 options: { temperature: "Cold", ice: "Less" },
//             },
//         ],
//     },
//     {
//         id: "2",
//         orderNumber: "ORD-1002",
//         prepTime: 120,
//         items: [
//             {
//                 name: "Pizza",
//                 quantity: 1,
//                 options: { taste: "Mild", crust: "Thin" },
//             },
//             {
//                 name: "Water",
//                 quantity: 2,
//                 options: { temperature: "Cold" },
//             },
//         ],
//     },
//     {
//         id: "3",
//         orderNumber: "ORD-1003",
//         prepTime: 90,
//         items: [
//             {
//                 name: "Salad",
//                 quantity: 1,
//                 options: { dressing: "Vinaigrette" },
//             },
//         ],
//     },
// ];
//
// export default function KitchenDashboard() {
//     const [orders, setOrders] = useState([]);
//
//     // Initialize orders from simulated API
//     useEffect(() => {
//         const mappedOrders = apiResponse.map((o) => ({
//             ...o,
//             timeLeft: o.prepTime,
//             status: "pending",
//         }));
//         setOrders(mappedOrders);
//     }, []);
//
//     // Countdown timer effect
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setOrders((prev) =>
//                 prev.map((o) => {
//                     if (o.status !== "pending") return o;
//                     if (o.timeLeft > 0) return { ...o, timeLeft: o.timeLeft - 1 };
//                     return { ...o, status: "late" };
//                 })
//             );
//         }, 1000);
//
//         return () => clearInterval(interval);
//     }, []);
//
//     // Helper to format item options
//     const formatOptions = (options) =>
//         Object.entries(options)
//             .map(([key, value]) =>
//                 Array.isArray(value) ? `${key}: ${value.join(", ")}` : `${key}: ${value}`
//             )
//             .join(" • ");
//
//     // Format time MM:SS
//     const formatTime = (sec) => {
//         const m = Math.floor(sec / 60);
//         const s = sec % 60;
//         return `${m}:${s.toString().padStart(2, "0")}`;
//     };
//
//     // Serve order
//     const serveOrder = (id) => {
//         setOrders((prev) =>
//             prev.map((o) =>
//                 o.id === id ? { ...o, status: "served" } : o
//             )
//         );
//     };
//
//     // Summary counts
//     const stats = {
//         pending: orders.filter((o) => o.status === "pending").length,
//         late: orders.filter((o) => o.status === "late").length,
//         served: orders.filter((o) => o.status === "served").length,
//     };
//
//     return (
//         <div className="container py-4">
//             {/* Header */}
//             <div className="mb-4">
//                 <h4 className="fw-semibold mb-1">Kitchen Order Dashboard</h4>
//                 <p className="text-muted mb-0">Live orders from kitchen API</p>
//             </div>
//
//             {/* Summary */}
//             <div className="row mb-4">
//                 {[
//                     { label: "Pending Orders", value: stats.pending, color: "#fde68a" },
//                     { label: "Late Orders", value: stats.late, color: "#fecaca" },
//                     { label: "Served Orders", value: stats.served, color: "#bbf7d0" },
//                 ].map((s) => (
//                     <div className="col-md-4 mb-2" key={s.label}>
//                         <div
//                             className="summary-card p-3 rounded"
//                             style={{ background: s.color }}
//                         >
//                             <small className="text-muted">{s.label}</small>
//                             <h5 className="fw-semibold mb-0">{s.value}</h5>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//
//             {/* Orders */}
//             <div className="row">
//                 {orders.map((o) => (
//                     <div className="col-md-4 mb-4" key={o.id}>
//                         <div className="order-card p-3 rounded shadow-sm">
//                             <div className="d-flex justify-content-between align-items-center mb-2">
//                                 <div className="fw-semibold">{o.orderNumber}</div>
//                                 <span
//                                     className={`status-badge px-2 py-1 rounded`}
//                                     style={{
//                                         background:
//                                             o.status === "pending"
//                                                 ? "#bae6fd"
//                                                 : o.status === "late"
//                                                     ? "#fecaca"
//                                                     : "#bbf7d0",
//                                         color: o.status === "late" ? "#991b1b" : "#0f172a",
//                                         fontWeight: 600,
//                                         cursor: "pointer",
//                                     }}
//                                     onClick={() => serveOrder(o.id)}
//                                 >
//                   {o.status.toUpperCase()}
//                 </span>
//                             </div>
//
//                             <ul className="list-unstyled mb-2">
//                                 {o.items.map((item, idx) => (
//                                     <li key={idx} className="mb-2">
//                                         <strong>{item.name} × {item.quantity}</strong>
//                                         <br />
//                                         <small className="text-muted">{formatOptions(item.options)}</small>
//                                     </li>
//                                 ))}
//                             </ul>
//
//                             <div
//                                 className="fw-semibold mt-2"
//                                 style={{ color: o.status === "late" ? "#991b1b" : "#0f172a" }}
//                             >
//                                 {formatTime(o.timeLeft)}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
// import { useEffect, useState } from "react";a
//
// // Simulated API response
// const apiResponse = [
//     {
//         id: "1",
//         orderNumber: "ORD-1001",
//         prepTime: 180, // total prep in seconds
//         items: [
//             { name: "Burger", quantity: 2, options: { taste: "Spicy", extras: ["Cheese", "Lettuce"] } },
//             { name: "Fries", quantity: 1, options: { taste: "Salty" } },
//             { name: "Coke", quantity: 3, options: { temperature: "Cold", ice: "Less" } },
//         ],
//     },
//     {
//         id: "2",
//         orderNumber: "ORD-1002",
//         prepTime: 120,
//         items: [
//             { name: "Pizza", quantity: 1, options: { taste: "Mild", crust: "Thin" } },
//             { name: "Water", quantity: 2, options: { temperature: "Cold" } },
//         ],
//     },
//     {
//         id: "3",
//         orderNumber: "ORD-1003",
//         prepTime: 90,
//         items: [
//             { name: "Salad", quantity: 1, options: { dressing: "Vinaigrette" } },
//         ],
//     },
// ];
//
// export default function KitchenDashboard() {
//     const [orders, setOrders] = useState([]);
//
//     // Initialize orders
//     useEffect(() => {
//         const mapped = apiResponse.map((o) => ({
//             ...o,
//             timeLeft: o.prepTime,
//             status: "pending",
//         }));
//         setOrders(mapped);
//     }, []);
//
//     // Countdown & auto status update
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setOrders((prevOrders) =>
//                 prevOrders.map((o) => {
//                     if (o.status === "served") return o;
//
//                     if (o.timeLeft > 0) {
//                         const timeLeft = o.timeLeft - 1;
//
//                         // Determine status based on remaining time
//                         const fiveMin = 300; // 5 minutes in seconds
//                         let status = "pending";
//                         if (timeLeft > fiveMin) status = "pending";
//                         else if (timeLeft <= fiveMin && timeLeft > 0) status = "packing";
//                         else status = "preparing"; // optional, or adjust logic
//
//                         // More precise: split prepTime into thirds
//                         const t = o.prepTime;
//                         if (timeLeft > t - 300) status = "pending";        // first 5min
//                         else if (timeLeft > 300) status = "preparing";     // middle
//                         else status = "packing";                            // last 5 min
//
//                         return { ...o, timeLeft, status };
//                     } else {
//                         return { ...o, timeLeft: 0, status: "packing" };
//                     }
//                 })
//             );
//         }, 1000);
//
//         return () => clearInterval(interval);
//     }, []);
//
//     // Serve order manually
//     const serveOrder = (id) => {
//         setOrders((prev) =>
//             prev.map((o) =>
//                 o.id === id ? { ...o, status: "served", timeLeft: 0 } : o
//             )
//         );
//     };
//
//     // Format time MM:SS
//     const formatTime = (sec) => {
//         const m = Math.floor(sec / 60);
//         const s = sec % 60;
//         return `${m}:${s.toString().padStart(2, "0")}`;
//     };
//
//     const formatOptions = (options) =>
//         Object.entries(options)
//             .map(([k, v]) => (Array.isArray(v) ? `${k}: ${v.join(", ")}` : `${k}: ${v}`))
//             .join(" • ");
//
//     return (
//         <div className="container py-4">
//             <div className="mb-4">
//                 <h4 className="fw-semibold mb-1">Kitchen Dashboard</h4>
//                 <p className="text-muted mb-0">Auto status updates for orders</p>
//             </div>
//
//             <div className="row">
//                 {orders.map((o) => (
//                     <div className="col-md-4 mb-4" key={o.id}>
//                         <div className="order-card p-3 rounded shadow-sm position-relative">
//                             {/* Status badge */}
//                             <span
//                                 className="position-absolute top-0 end-0 m-2 px-2 py-1 rounded"
//                                 style={{
//                                     background:
//                                         o.status === "pending"
//                                             ? "#fcd34d"
//                                             : o.status === "preparing"
//                                                 ? "#60a5fa"
//                                                 : o.status === "packing"
//                                                     ? "#f87171"
//                                                     : "#34d399",
//                                     color: "#0f172a",
//                                     fontWeight: 600,
//                                     cursor: o.status !== "served" ? "pointer" : "default",
//                                     fontSize: "0.75rem",
//                                 }}
//                                 onClick={() => serveOrder(o.id)}
//                             >
//                 {o.status.toUpperCase()}
//               </span>
//
//                             <div className="fw-semibold mb-2">{o.orderNumber}</div>
//
//                             <ul className="list-unstyled mb-2">
//                                 {o.items.map((item, idx) => (
//                                     <li key={idx} className="mb-2">
//                                         <strong>
//                                             {item.name} × {item.quantity}
//                                         </strong>
//                                         <br />
//                                         <small className="text-muted">{formatOptions(item.options)}</small>
//                                     </li>
//                                 ))}
//                             </ul>
//
//                             <div className="fw-semibold mt-2" style={{ color: "#0f172a" }}>
//                                 {formatTime(o.timeLeft)}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
import { useEffect, useState } from "react";

// ---------------- SIMULATED API ----------------
const fetchOrdersFromAPI = () =>
    Promise.resolve([
        {
            id: "1",
            orderNumber: "ORD-2011",
            prepTime: 300,
            items: [
                { name: "Burger", quantity: 2, options: { taste: "Spicy" } },
                { name: "Fries", quantity: 1, options: { taste: "Salty" } },
            ],
        },
        {
            id: "2",
            orderNumber: "ORD-2012",
            prepTime: 240,
            items: [
                { name: "Pizza", quantity: 1, options: { crust: "Thin" } },
            ],
        },
    ]);

// Simulated DB update
const sendServeTimeToDB = (orderId, seconds) => {
    console.log("✅ Sent to DB:", { orderId, servedInSeconds: seconds });
};

// ---------------- COMPONENT ----------------
export default function KitchenDashboard() {
    const [orders, setOrders] = useState([]);

    const [isLargeScreen, setIsLargeScreen] = useState(
        window.innerWidth >= 992
    );

// Track resize (optional but professional)
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 992);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    // ---------------- UI ----------------
    if (!isLargeScreen) {
        return (
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h5>Unsupported Device</h5>
                    <p className="text-muted">
                        Please use a tablet or desktop screen.
                    </p>
                </div>
            </div>
        );
    }
    // Fetch orders
    useEffect(() => {
        fetchOrdersFromAPI().then((data) => {
            const mapped = data.map((o) => ({
                ...o,
                status: "waiting",
                timeLeft: o.prepTime,
                arrivedAt: Date.now(),
            }));
            setOrders(mapped);
        });
    }, []);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setOrders((prev) =>
                prev.map((o) =>
                    o.status === "served" || o.status === "waiting"
                        ? o
                        : { ...o, timeLeft: Math.max(o.timeLeft - 1, 0) }
                )
            );
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Chef accepts order
    const acceptOrder = (id) => {
        setOrders((prev) =>
            prev.map((o) =>
                o.id === id ? { ...o, status: "preparing" } : o
            )
        );
    };

    // Chef serves order
    const serveOrder = (id) => {
        setOrders((prev) =>
            prev.map((o) => {
                if (o.id !== id) return o;

                const servedTime = Math.floor(
                    (Date.now() - o.arrivedAt) / 1000
                );

                // Simulate DB update
                sendServeTimeToDB(o.id, servedTime);

                return { ...o, status: "served" };
            })
        );

        // Remove from UI after short delay
        setTimeout(() => {
            setOrders((prev) => prev.filter((o) => o.id !== id));
        }, 1200); // 1.2s delay for visual feedback
    };


    // Helpers
    const formatTime = (sec) => {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${s.toString().padStart(2, "0")}`;
    };

    const stats = {
        waiting: orders.filter((o) => o.status === "waiting").length,
        preparing: orders.filter((o) => o.status === "preparing").length,
        served: orders.filter((o) => o.status === "served").length,
    };

    return (
        <div className="container py-4">
            {/* HEADER */}
            <div className="mb-4">
                <h4 className="fw-semibold">Kitchen Operations</h4>
                <p className="text-muted mb-0">
                    Real-time order handling & chef workflow
                </p>
            </div>

            {/* STATS */}
            <div className="row mb-4">
                {[
                    { label: "Waiting", value: stats.waiting, color: "#fde68a" },
                    { label: "Preparing", value: stats.preparing, color: "#bfdbfe" },
                    { label: "Served", value: stats.served, color: "#bbf7d0" },
                ].map((s) => (
                    <div className="col-md-4" key={s.label}>
                        <div
                            className="p-3 rounded"
                            style={{ background: s.color }}
                        >
                            <small className="text-muted">{s.label}</small>
                            <h5 className="fw-semibold mb-0">{s.value}</h5>
                        </div>
                    </div>
                ))}
            </div>

            {/* ORDERS */}
            <div className="row">
                {orders.map((o) => (
                    <div className="col-md-4 mb-4" key={o.id}>
                        <div className="border rounded p-3 position-relative bg-white shadow-sm">

                            {/* STATUS BADGE */}
                            <span
                                className="position-absolute top-0 end-0 m-2 px-2 py-1 rounded"
                                style={{
                                    fontSize: "0.75rem",
                                    fontWeight: 600,
                                    background:
                                        o.status === "waiting"
                                            ? "#fde68a"
                                            : o.status === "preparing"
                                                ? "#bfdbfe"
                                                : "#bbf7d0",
                                }}
                            >
                {o.status.toUpperCase()}
              </span>

                            <div className="fw-semibold mb-2">
                                {o.orderNumber}
                            </div>

                            <ul className="list-unstyled mb-3">
                                {o.items.map((i, idx) => (
                                    <li key={idx}>
                                        <strong>
                                            {i.name} × {i.quantity}
                                        </strong>
                                        <br />
                                        <small className="text-muted">
                                            {Object.entries(i.options)
                                                .map(([k, v]) => `${k}: ${v}`)
                                                .join(", ")}
                                        </small>
                                    </li>
                                ))}
                            </ul>

                            {/* ACTIONS */}
                            {o.status === "waiting" && (
                                <button
                                    className="btn btn-outline-primary btn-sm w-100"
                                    onClick={() => acceptOrder(o.id)}
                                >
                                    Accept for Preparation
                                </button>
                            )}

                            {o.status === "preparing" && (
                                <>
                                    <div className="fw-semibold mb-2">
                                        {formatTime(o.timeLeft)}
                                    </div>
                                    <button
                                        className="btn btn-outline-success btn-sm w-100"
                                        onClick={() => serveOrder(o.id)}
                                    >
                                        Mark as Served
                                    </button>
                                </>
                            )}

                            {o.status === "served" && (
                                <div className="text-success fw-semibold">
                                    Completed
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
