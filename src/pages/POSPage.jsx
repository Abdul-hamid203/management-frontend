// import React, { useState } from "react";
//
// const POS = () => {
//     // Sample product data
//     const products = Array.from({ length: 20 }, (_, i) => ({
//         name: "Product " + (i + 1),
//         price: (10 + (i + 1)).toFixed(2),
//         img: `https://picsum.photos/200?random=${i + 1}`,
//         desc: "Description for product " + (i + 1),
//     }));
//
//     const [orderList, setOrderList] = useState([]);
//     const [selectedProduct, setSelectedProduct] = useState(null);
//
//     const openProduct = (product) => setSelectedProduct(product);
//
//     const addToOrder = () => {
//         setOrderList((prev) => [...prev, selectedProduct]);
//         setSelectedProduct(null);
//     };
//
//     const total = orderList.reduce(
//         (sum, p) => sum + parseFloat(p.price),
//         0
//     );
//
//     return (
//         <>
//             <style>{`
//                 body {
//                     background: #f6f7f9;
//                 }
//
//                 /* Offset body below the fixed navbar */
//                 .pos-wrapper {
//                     height: calc(100vh - 70px);
//                     margin-top: 70px;
//                     display: flex;
//                 }
//
//                 .left-panel {
//                     width: 30%;
//                     padding: 15px;
//                     display: flex;
//                     flex-direction: column;
//                     gap: 15px;
//                     overflow-y: auto;
//                 }
//
//                 .right-panel {
//                     width: 70%;
//                     padding: 15px;
//                     overflow-y: auto;
//                 }
//
//                 .top-bar {
//                     background: white;
//                     padding: 10px;
//                     border-radius: 12px;
//                     box-shadow: 0 3px 10px rgba(0,0,0,0.05);
//                 }
//
//                 .category-container {
//                     display: flex;
//                     overflow-x: auto;
//                     gap: 10px;
//                     padding-top: 10px;
//                     scrollbar-width: none;
//                 }
//                 .category-container::-webkit-scrollbar { display: none; }
//
//                 .category-btn {
//                     padding: 6px 12px;
//                     background: #f1f3f5;
//                     border-radius: 30px;
//                     border: none;
//                     font-size: 13px;
//                     display: flex;
//                     gap: 6px;
//                     white-space: nowrap;
//                 }
//                 .category-btn:hover, .category-btn.active {
//                     background: #007bff;
//                     color: white;
//                 }
//
//                 .order-panel {
//                     flex-grow: 1;
//                     background: white;
//                     border-radius: 12px;
//                     padding: 15px;
//                     box-shadow: 0 3px 10px rgba(0,0,0,0.08);
//                     display: flex;
//                     flex-direction: column;
//                 }
//
//                 .order-list {
//                     flex-grow: 1;
//                     overflow-y: auto;
//                     margin-bottom: 10px;
//                 }
//
//                 .order-item {
//                     border-bottom: 1px solid #eee;
//                     padding: 6px 0;
//                 }
//
//                 .pay-btn {
//                     background: #007bff;
//                     color: white;
//                     padding: 10px;
//                     font-size: 16px;
//                     border-radius: 8px;
//                     border: none;
//                 }
//
//                 .product-card {
//                     background: white;
//                     border-radius: 12px;
//                     cursor: pointer;
//                     overflow: hidden;
//                     transition: 0.25s;
//                 }
//                 .product-card:hover {
//                     transform: scale(1.03);
//                     box-shadow: 0 6px 15px rgba(0,0,0,0.15);
//                 }
//
//                 .product-img {
//                     height: 120px;
//                     width: 100%;
//                     object-fit: cover;
//                 }
//
//                 .product-details {
//                     padding: 8px;
//                     font-size: 12px;
//                 }
//
//                 /* Navbar styles */
//                 .navbar {
//                     background: rgba(255,255,255,0.9) !important;
//                     backdrop-filter: blur(12px);
//                     box-shadow: 0 4px 20px rgba(0,0,0,0.08);
//                     z-index: 10;
//                 }
//                 .navbar-nav .nav-link {
//                     font-weight: 600;
//                     padding: 10px 18px;
//                     transition: .3s;
//                 }
//                 .navbar-nav .nav-link:hover {
//                     color: #0d6efd;
//                     transform: translateY(-2px);
//                 }
//
//                 .user-img {
//                     width: 40px;
//                     height: 40px;
//                     border-radius: 50%;
//                     object-fit: cover;
//                 }
//             `}</style>
//
//             {/* NAVBAR */}
//             <nav className="navbar navbar-expand-lg fixed-top">
//                 <div className="container">
//                     <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
//                         <svg width="32" height="32" fill="#0d6efd" viewBox="0 0 24 24">
//                             <path d="M6 2L3 6v2h18V6l-3-4H6zm12 6H6V6.236L7.618 4h8.764L18 6.236V8zM4 10h16l-1.5 12h-13L4 10z"/>
//                         </svg>
//                         &nbsp; StockMaster
//                     </a>
//
//                     <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//
//                     <div className="collapse navbar-collapse" id="navMenu">
//                         <ul className="navbar-nav ms-auto">
//                             <li className="nav-item"><a href="#dashboard" className="nav-link">Dashboard</a></li>
//                             <li className="nav-item"><a href="#stockSection" className="nav-link">Stock</a></li>
//                             <li className="nav-item"><a href="#" className="nav-link">Purchase</a></li>
//                             <li className="nav-item"><a href="#" className="nav-link">Settings</a></li>
//                         </ul>
//                     </div>
//
//                     <div className="dropdown">
//                         <div className="d-flex align-items-center gap-3" data-bs-toggle="dropdown" role="button">
//                             <img src="avatar-1.jpg" className="user-img" />
//                             <div>
//                                 <h6 className="mb-0 fw-bold">Joseph William</h6>
//                                 <small className="text-muted">Administrator</small>
//                             </div>
//                         </div>
//
//                         <ul className="dropdown-menu shadow border-0 mt-3 p-2">
//                             <li><a className="dropdown-item py-2" href="#"><i className="bi bi-person me-2"></i> Profile</a></li>
//                             <li><a className="dropdown-item py-2" href="#"><i className="bi bi-lock me-2"></i> Lock Screen</a></li>
//                             <li><a className="dropdown-item py-2" href="#"><i className="bi bi-box-arrow-right me-2"></i> Logout</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//
//             {/* POS LAYOUT */}
//             <div className="pos-wrapper">
//
//                 {/* LEFT: Order Panel */}
//                 <div className="left-panel">
//                     <div className="card top-bar">
//                         <h6 className="card-header">Customizations</h6>
//                         <div className="card-body">
//                             <div className="row g-2 mb-2">
//                                 <div className="col-6">
//                                     <select className="form-select form-select-sm">
//                                         <option>Select Customer</option>
//                                         <option>Customer A</option>
//                                         <option>Customer B</option>
//                                         <option>Customer C</option>
//                                     </select>
//                                 </div>
//                                 <div className="col-6">
//                                     <select className="form-select form-select-sm">
//                                         <option>Select Flavor</option>
//                                         <option>Vanilla</option>
//                                         <option>Chocolate</option>
//                                         <option>Caramel</option>
//                                         <option>Hazelnut</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//
//                     <div className="order-panel mt-2">
//                         <h5 className="fw-bold mb-2">Order Details</h5>
//
//                         <div className="order-list">
//                             {orderList.map((item, i) => (
//                                 <div key={i} className="order-item d-flex justify-content-between">
//                                     <span>{item.name}</span>
//                                     <span>${item.price}</span>
//                                 </div>
//                             ))}
//                         </div>
//
//                         <span style={{ fontSize: 13, color: "green", padding: 2 }}>Discount: 200</span>
//                         <h6>Total: ${total.toFixed(2)}</h6>
//                         <button className="pay-btn mt-2">Pay Now</button>
//                     </div>
//                 </div>
//
//                 {/* RIGHT: Product Grid */}
//                 <div className="right-panel">
//                     <div className="top-bar">
//                         <div className="input-group">
//                             <input type="text" placeholder="Search product..." className="form-control form-control-sm" />
//                             <button className="btn btn-primary btn-sm">Search</button>
//                         </div>
//
//                         <div className="category-container mt-2">
//                             <button className="category-btn active"><i className="bi bi-cup-fill"></i> Brew</button>
//                             <button className="category-btn"><i className="bi bi-cup"></i> Coffee</button>
//                             <button className="category-btn"><i className="bi bi-basket-fill"></i> Brewers</button>
//                             <button className="category-btn"><i className="bi bi-thermometer"></i> Kettles</button>
//                             <button className="category-btn"><i className="bi bi-cup-straw"></i> Cups</button>
//                         </div>
//                     </div>
//
//                     <div className="row g-2 mt-2">
//                         {products.map((p, index) => (
//                             <div className="col-2" style={{ width: "20%" }} key={index}>
//                                 <div className="product-card text-center" onClick={() => openProduct(p)}>
//                                     <img src={p.img} className="product-img" />
//                                     <div className="product-details">
//                                         <h6 className="fw-bold mt-1">{p.name}</h6>
//                                         <p className="text-primary fw-bold">${p.price}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//
//             </div>
//
//             {/* PRODUCT MODAL */}
//             {selectedProduct && (
//                 <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,0.5)" }}>
//                     <div className="modal-dialog modal-dialog-centered">
//                         <div className="modal-content">
//
//                             <div className="modal-header">
//                                 <h5 className="modal-title">{selectedProduct.name}</h5>
//                                 <button className="btn-close" onClick={() => setSelectedProduct(null)}></button>
//                             </div>
//
//                             <div className="modal-body">
//                                 <img src={selectedProduct.img} className="img-fluid mb-3 rounded" />
//                                 <p>{selectedProduct.desc}</p>
//                                 <p className="fw-bold text-primary">${selectedProduct.price}</p>
//                             </div>
//
//                             <div className="modal-footer">
//                                 <button className="btn btn-primary" onClick={addToOrder}>Add to Order</button>
//                             </div>
//
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };
//
// export default POS;
import React, { useState, useMemo } from "react";

const POSPage = () => {
    // Categories
    const categories = ["Brew", "Coffee", "Brewers", "Kettles", "Cups"];

    // Sample product data
    const products = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: "Product " + (i + 1),
        price: (10 + (i + 1)).toFixed(2),
        img: `https://picsum.photos/200?random=${i + 1}`,
        desc: "Description for product " + (i + 1),
        category: categories[i % categories.length] // assign categories
    }));

    // POS React States
    const [orderList, setOrderList] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const [discount, setDiscount] = useState(0);
    const [taxRate, setTaxRate] = useState(10); // default 10%

    // Filter products by category + search
    const filteredProducts = useMemo(() => {
        return products.filter(p => {
            const matchesCategory = activeCategory === "All" || p.category === activeCategory;
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, products, searchQuery]);

    // Add product to cart (qty handled)
    const addToOrder = () => {
        setOrderList(prev => {
            const exists = prev.find(item => item.id === selectedProduct.id);
            if (exists) {
                return prev.map(item =>
                    item.id === selectedProduct.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }
            return [...prev, { ...selectedProduct, qty: 1 }];
        });

        setSelectedProduct(null);
    };

    // Increase or decrease qty
    const updateQty = (id, amount) => {
        setOrderList(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? { ...item, qty: Math.max(1, item.qty + amount) }
                        : item
                )
        );
    };

    // Remove item completely
    const removeItem = (id) => {
        setOrderList(prev => prev.filter(item => item.id !== id));
    };

    // Totals
    const subtotal = orderList.reduce(
        (sum, p) => sum + parseFloat(p.price) * p.qty,
        0
    );

    const tax = (subtotal - discount) * (taxRate / 100);
    const grandTotal = subtotal - discount + tax;

    // Print receipt
    const printReceipt = () => {
        const receipt = `
----- RECEIPT -----
Items:
${orderList.map(i => `${i.name} x${i.qty} = $${(i.qty * i.price).toFixed(2)}`).join("\n")}
-------------------
Subtotal: $${subtotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Tax (${taxRate}%): $${tax.toFixed(2)}
TOTAL: $${grandTotal.toFixed(2)}
-------------------
Thank you!
`;

        const printWindow = window.open("", "PRINT", "height=600,width=400");
        printWindow.document.write(`<pre>${receipt}</pre>`);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();

        setOrderList([]); // clear cart after payment
    };

    return (
        <>
            <style>{`
                .pos-wrapper { height: calc(100vh - 70px); margin-top: 70px; display: flex; }
                .right-panel { width: 30%; padding: 15px; overflow-y: auto; height: 100%;}
                .left-panel { width: 70%; padding: 15px;height:flex; overflow-y: auto; }
                .product-card { cursor: pointer; transition: 0.25s; border-radius: 12px; }
                .product-card:hover { transform: scale(1.03); box-shadow: 0 6px 15px rgba(0,0,0,0.15); }
                .product-img { height: 140px; width: 100%; object-fit: cover;border-radius: 12px; }
                @media(max-width:1200px){ .col-2{ width:25% !important; } }
                @media(max-width:992px){ .col-2{ width:33.3% !important; } }
                @media(max-width:768px){ .col-2{ width:50% !important; } }
            `}</style>

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">StockMaster POS</a>
                </div>
            </nav>

            {/* POS LAYOUT */}
            <div className="pos-wrapper">

                {/* RIGHT: PRODUCTS */}
                <div className="left-panel">

                    {/* Search */}
                    <div className="input-group mb-2">
                        <input type="text"
                               placeholder="Search products..."
                               className="form-control"
                               onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Categories */}
                    <div className="d-flex gap-2 mb-2 overflow-auto">
                        <button
                            className={`btn btn-sm ${activeCategory === "All" ? "btn-primary" : "btn-light"}`}
                            onClick={() => setActiveCategory("All")}
                        >All</button>

                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`btn btn-sm ${activeCategory === cat ? "btn-primary" : "btn-light"}`}
                                onClick={() => setActiveCategory(cat)}
                            >{cat}</button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <div className="row g-2">
                        {filteredProducts.map((p) => (
                            <div className="col-2" style={{ width: "20%" }} key={p.id}>
                                <div className="product-card p-0" onClick={() => setSelectedProduct(p)}>
                                    <img src={p.img} className="product-img" />
                                    <div className="p-2">
                                        <strong className="small">{p.name}</strong>
                                        <div className="text-primary fw-bold">${p.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="right-panel">
                    <div className="card p-2 mb-2">
                        <h6 className="fw-bold">Order Details</h6>
                        <div className="order-list">
                            {orderList.map((item) => (
                                <div key={item.id} className="border-bottom py-2 d-flex justify-content-between">
                                    <div>
                                        <strong>{item.name}</strong>
                                        <div className="d-flex mt-1 gap-2">
                                            <button className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => updateQty(item.id, -1)}>-</button>
                                            <span className="px-2">{item.qty}</span>
                                            <button className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => updateQty(item.id, +1)}>+</button>
                                            <button className="btn btn-sm btn-danger ms-2"
                                                    onClick={() => removeItem(item.id)}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <span>${(item.qty * item.price).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-3">

                            <div>Subtotal: ${subtotal.toFixed(2)}</div>
                            <div>Tax: ${tax.toFixed(2)}</div>
                            <h5 className="fw-bold mt-2">Total: ${grandTotal.toFixed(2)}</h5>

                            <div className="row g-2 mt-3">

                                <div className="col-4">
                                    <button className="btn btn-success w-100 d-flex align-items-center justify-content-center"
                                            onClick={printReceipt}>
                                        <i className="bi bi-cash-coin me-1"></i> Checkout
                                    </button>
                                </div>

                                <div className="col-4">
                                    <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
                                            onClick={printReceipt}>
                                        <i className="bi bi-printer me-1"></i> Print
                                    </button>
                                </div>

                                <div className="col-4">
                                    <button className="btn btn-warning w-100 d-flex align-items-center justify-content-center text-dark"
                                            onClick={printReceipt}>
                                        <i className="bi bi-eye me-1"></i> Preview
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* PRODUCT MODAL */}
            {selectedProduct && (
                <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">{selectedProduct.name}</h5>
                                <button className="btn-close" onClick={() => setSelectedProduct(null)}></button>
                            </div>

                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={selectedProduct.img} className="img-fluid display-6 rounded mb-2" />
                                    </div>
                                </div>
                                <p>{selectedProduct.desc}</p>
                                <h5 className="text-primary text-end">${selectedProduct.price}</h5>
                            </div>

                            <div className="modal-footer">
                                <button className="btn btn-primary" onClick={addToOrder}>Add to Order</button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default POSPage;
