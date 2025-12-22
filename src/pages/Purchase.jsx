import React, {useEffect, useState} from "react";
import {
    CurrencyDollar, ExclamationTriangle,
    Eye, FileText, Image, MusicNote, Wrench,
} from "react-bootstrap-icons";
import HeaderComponent from "../components/HeaderComponent.jsx";
import {useNavigate} from "react-router-dom";

const Purchase = () => {
    const [showImportModal, setShowImportModal] = useState(false);
    const [showNewItemModal, setShowNewItemModal] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [showItemModal, setShowItemModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [filter, setFilter] = useState("all");


    const itemsData = [
        {
            id: 1,
            name: "Homepage Banner",
            category: "Electronics",
            description: "Main hero section displayed on the homepage",
            status: "active",
            image: "https://via.placeholder.com/50/0d6efd/ffffff?text=HB",
            unitPrice: 120,        // price per unit
            neededQty: 2,          // quantity needed to purchase
            unit: "kg",
        },
        {
            id: 2,
            name: "Footer Links",
            category: "Accessories",
            description: "Quick navigation links shown at the bottom",
            status: "inactive",
            image: "https://via.placeholder.com/50/f0ad4e/ffffff?text=FL",
            unitPrice: 50,
            neededQty: 5,
            unit: "bucket",
        },
        {
            id: 3,
            name: "Product Slider",
            category: "Furniture",
            description: "Carousel for highlighting featured products",
            status: "active",
            image: "https://via.placeholder.com/50/198754/ffffff?text=PS",
            unitPrice: 300,
            neededQty: 1,
            unit: "ounce",
        },
        {
            id: 4,
            name: "Contact Form",
            category: "Consumables",
            description: "Form to allow users to send messages",
            status: "active",
            image: "https://via.placeholder.com/50/6c757d/ffffff?text=CF",
            unitPrice: 30,
            neededQty: 3,
            unit: "kg",
        },
    ];

    const filteredItems = itemsData.filter(item => {
        if (filter.startsWith("category:")) {
            return item.category === filter.split(":")[1];
        } else if (filter === "price:high") {
            return true; // We'll sort by price later
        } else if (filter === "price:low") {
            return true; // We'll sort by price later
        } else if (filter === "status:active") {
            return item.status === "active";
        } else if (filter === "status:inactive") {
            return item.status === "inactive";
        }
        return true;
    });

// Sort if needed
    if (filter === "price:high") filteredItems.sort((a,b) => b.unitPrice - a.unitPrice);
    if (filter === "price:low") filteredItems.sort((a,b) => a.unitPrice - b.unitPrice);

    const totalPurchaseCost = itemsData.reduce(
        (sum, item) => sum + item.unitPrice * item.neededQty,
        0
    );


    // Calculate stats
    const categoriesCount = [...new Set(itemsData.map(i => i.category))].length; // how many categories
    const totalItems = itemsData.length;
    const emergencyItems = itemsData.filter(i => i.emergency).length;
    const totalCost = itemsData.reduce((acc, i) => acc + i.cost, 0);

    const stats = [
        {
            title: "From categories",
            value: categoriesCount,
            change: "+2 from last month",
            icon: <Image />,
            color: "primary"
        },
        {
            title: "Total items",
            value: totalItems,
            change: "+8 from last month",
            icon: <FileText />,
            color: "success"
        },
        {
            title: "Emergency need",
            value: emergencyItems,
            change: "+1 from last month",
            icon: <ExclamationTriangle />,
            color: "warning"
        },
        {
            title: "Total cost",
            value: `$${totalPurchaseCost}`,
            change: "0 from last month",
            icon: <CurrencyDollar />,
            color: "info"
        }
    ];
    const [formData, setFormData] = useState({
        unitPrice: "",
        neededQty:"",
        unit:"",
        image: null,
    });

    useEffect(() => {
        if (isEditMode && currentItem?.image) {
            setImagePreview(currentItem.image);
        } else {
            setImagePreview(null);
        }
    }, [isEditMode, currentItem]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Save file in formData
        setFormData({ ...formData, image: file });

        // Create preview URL
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const openEditItemModal = (item) => {
        setIsEditMode(true);
        setCurrentItem(item);
        setFormData({
            unitPrice: item.unitPrice,
            neededQty: item.neededQty,
            unit: item.unit,
            image: null, // reset file input, can show preview separately if needed
        });
        setShowItemModal(true);
    };

    const openNewItemModal = () => {
        setIsEditMode(false);
        setFormData({
            name: "",
            category: "",
            description: "",
            image: null,
        });
        setCurrentItem(null);
        setShowItemModal(true);
    };

    return (
        <>
            <HeaderComponent />
            <div className="dashboard-container container-fluid">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="fw-bold mb-1">Purchase Section</h2>
                        <p className="text-muted">
                            Welcome ! Here's where's you define happening with the main stock.
                        </p>
                    </div>
                </div>

                <div className="row g-4 mb-4">
                    {stats.map((s, index) => (
                        <StatCard
                            key={index}
                            title={s.title}
                            value={s.value}
                            change={s.change}
                            icon={s.icon}
                            color={s.color}
                        />
                    ))}
                </div>


                {/* Bottom Section */}
                <div className="row g-4 pb-3">
                    {/* Recent Activity */}
                    <div className="row g-4 pb-3">
                        <div className="col-12">
                            <div className="card dashboard-card h-100 shadow-sm rounded-4">
                                <div className="card-body">

                                    {/* Header with buttons + dynamic filters */}
                                    <div className="d-flex justify-content-between align-items-start card-header mb-3" style={{ background: "white" }}>
                                        <div>
                                            <h5 className="fw-bold mb-1">Item Settings</h5>
                                            <p className="text-muted mb-0">Filter and manage items</p>
                                        </div>

                                        <div className="d-flex align-items-center gap-2">

                                            {/* Import / Add / Info Buttons */}
                                            <button className="btn btn-sm btn-outline-secondary" title="Import" onClick={setShowImportModal}>
                                                <i className="bi bi-upload"></i>
                                            </button>
                                            <button className="btn btn-sm btn-outline-secondary" title="Add" onClick={openNewItemModal}>
                                                <i className="bi bi-plus-lg"></i>
                                            </button>
                                            <button className="btn btn-sm btn-outline-secondary" title="Info" onClick={setShowInfoModal}>
                                                <i className="bi bi-info-lg"></i>
                                            </button>

                                            {/* Dynamic Filters */}
                                            <select
                                                className="form-select form-select-sm ms-2"
                                                style={{ minWidth: "160px" }}
                                                value={filter}
                                                onChange={(e) => setFilter(e.target.value)}
                                            >
                                                <option value="all">All Items</option>
                                                <option value="category:Electronics">Category: Electronics</option>
                                                <option value="category:Furniture">Category: Furniture</option>
                                                <option value="category:Accessories">Category: Accessories</option>
                                                <option value="price:high">Price: Highest</option>
                                                <option value="price:low">Price: Lowest</option>
                                                <option value="status:active">Status: Active</option>
                                                <option value="status:inactive">Status: Inactive</option>
                                            </select>

                                        </div>
                                    </div>


                                    {/* Item List */}
                                    <div
                                        style={{ maxHeight: "350px", overflowY: "auto" }}
                                        className="p-2 bg-white border rounded shadow-sm"
                                    >
                                        <ul className="list-unstyled mb-0">
                                            {filteredItems.map((item) => (
                                                <li
                                                    key={item.id}
                                                    className="item-row d-flex justify-content-between align-items-start p-3 rounded mb-2 border border-light shadow-sm hover-shadow"
                                                    style={{ transition: "all 0.2s", cursor: "pointer" }}
                                                >
                                                    <div className="d-flex align-items-start gap-3">
                                                        <img
                                                            src={item.image || "https://via.placeholder.com/50"}
                                                            alt={item.name}
                                                            className="rounded-3"
                                                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                                        />
                                                        <div>
                                                            <div className="d-flex align-items-center gap-2 mb-1">
                                                                <div className="fw-semibold">{item.name}</div>
                                                                <span
                                                                    className={`badge rounded-pill ${
                                                                        item.category === "Electronics"
                                                                            ? "bg-primary"
                                                                            : item.category === "Furniture"
                                                                                ? "bg-success"
                                                                                : item.category === "Accessories"
                                                                                    ? "bg-warning text-dark"
                                                                                    : "bg-secondary"
                                                                    }`}
                                                                >
              {item.category}
            </span>
                                                            </div>
                                                            <div className="mt-1">
                                                                <small className="text-muted me-3">Unit: ${item.unitPrice}</small>
                                                                <small className="text-muted">Qty: {item.neededQty} ({item.unit})</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        className={`btn btn-sm ${
                                                            item.status === "active" ? "btn-outline-success" : "btn-outline-warning"
                                                        }`}
                                                        onClick={() => openEditItemModal(item)}
                                                    >
                                                        <i className="bi bi-pencil me-1"></i>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>

                                    <div className="d-flex justify-content-end mt-3">
                                        <button
                                            className="btn btn-gradient d-flex align-items-center gap-2 px-4 py-2"
                                            style={{
                                                background: "linear-gradient(90deg, #0d6efd, #6610f2)",
                                                color: "white",
                                                fontWeight: 600,
                                                borderRadius: "50px",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                                transition: "all 0.2s",
                                            }}
                                            onClick={() => alert("Proceeding to purchase!")}
                                            onMouseOver={(e) =>
                                                (e.currentTarget.style.transform = "scale(1.05)")
                                            }
                                            onMouseOut={(e) =>
                                                (e.currentTarget.style.transform = "scale(1)")
                                            }
                                        >
                                            <i className="bi bi-cart-fill"></i>
                                            Purchase Now
                                        </button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                {showImportModal && (
                    <>
                        <div
                            className="modal show d-block"
                            tabIndex="-1"
                            style={{ zIndex: 1055 }}
                        >
                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content rounded-4 border-0 shadow">

                                    <div className="modal-header border-0">
                                        <h5 className="modal-title fw-bold">Import Items</h5>
                                        <button
                                            className="btn-close"
                                            onClick={() => setShowImportModal(false)}
                                        />
                                    </div>

                                    <div className="modal-body">
                                        <label className="fw-semibold mb-2">Upload CSV File</label>

                                        <div className="border rounded-4 p-4 text-center bg-light">
                                            <i className="bi bi-filetype-csv fs-1 text-primary"></i>
                                            <p className="mt-2 text-muted mb-0">
                                                Only .csv files are supported
                                            </p>

                                            <input
                                                type="file"
                                                accept=".csv"
                                                className="form-control mt-3"
                                            />
                                        </div>
                                    </div>

                                    <div className="modal-footer border-0">
                                        <button
                                            className="btn btn-secondary rounded-pill px-4"
                                            onClick={() => setShowImportModal(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button className="btn btn-primary rounded-pill px-4">
                                            Import
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Backdrop */}
                        <div
                            className="modal-backdrop show"
                            onClick={() => setShowImportModal(false)}
                        />
                    </>
                )}

                {showNewItemModal && (
                    <>
                        <div
                            className="modal show d-block"
                            tabIndex="-1"
                            style={{ zIndex: 1055 }}
                        >
                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content rounded-4 border-0 shadow">

                                    {/* Header */}
                                    <div className="modal-header border-0">
                                        <h5 className="modal-title fw-bold">Add New Item</h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            onClick={() => setShowNewItemModal(false)}
                                        />
                                    </div>

                                    {/* Body */}
                                    <div className="modal-body">

                                        {/* Image Upload */}
                                        <div className="mb-4 text-center">
                                            <label className="d-block fw-semibold mb-2">Item Image</label>

                                            <div
                                                className="border rounded-4 p-4 bg-light d-flex flex-column justify-content-center align-items-center"
                                                style={{ height: "180px", cursor: "pointer" }}
                                            >
                                                <i className="bi bi-image fs-1 text-secondary"></i>
                                                <small className="text-muted">Click to upload image</small>

                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="form-control mt-3"
                                                    style={{ maxWidth: "250px" }}
                                                />
                                            </div>
                                        </div>

                                        <div className="row g-3">

                                            {/* Item Name */}
                                            <div className="col-md-6">
                                                <label className="fw-semibold mb-1">Item Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control rounded-3"
                                                />
                                            </div>

                                            {/* Category */}
                                            <div className="col-md-6">
                                                <label className="fw-semibold mb-1">Category</label>
                                                <select className="form-select rounded-3" defaultValue="">
                                                    <option value="" disabled>
                                                        Select Category
                                                    </option>
                                                    <option>Electronics</option>
                                                    <option>Furniture</option>
                                                    <option>Accessories</option>
                                                    <option>Consumables</option>
                                                </select>
                                            </div>

                                        </div>

                                    </div>

                                    {/* Footer */}
                                    <div className="modal-footer border-0">
                                        <button
                                            className="btn btn-secondary rounded-pill px-4"
                                            onClick={() => setShowNewItemModal(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button className="btn btn-primary rounded-pill px-4">
                                            Save Item
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Backdrop */}
                        <div
                            className="modal-backdrop show"
                            onClick={() => setShowNewItemModal(false)}
                        />
                    </>
                )}

                {showInfoModal && (
                    <>
                        <div
                            className="modal show d-block"
                            tabIndex="-1"
                            style={{ zIndex: 1055 }}
                        >
                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content rounded-4 border-0 shadow">

                                    {/* Header */}
                                    <div className="modal-header border-0">
                                        <h5 className="modal-title fw-bold">Information</h5>
                                        <button
                                            className="btn-close"
                                            onClick={() => setShowInfoModal(false)}
                                        />
                                    </div>

                                    {/* Body */}
                                    <div className="modal-body">
                                        <p className="text-muted mb-0">
                                            This section allows you to manage item categories, import CSV files,
                                            and view item statistics inside the settings dashboard.
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="modal-footer border-0">
                                        <button
                                            className="btn btn-primary rounded-pill px-4"
                                            onClick={() => setShowInfoModal(false)}
                                        >
                                            OK
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Backdrop */}
                        <div
                            className="modal-backdrop show"
                            onClick={() => setShowInfoModal(false)}
                        />
                    </>
                )}

                {showItemModal && (
                    <>
                        <div
                            className="modal show d-block"
                            tabIndex="-1"
                            style={{ zIndex: 1055 }}
                        >
                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content rounded-4 border-0 shadow">

                                    {/* Header */}
                                    <div className="modal-header border-0">
                                        <h5 className="modal-title fw-bold">
                                            {isEditMode ? "Edit Item" : "Add New Item"}
                                        </h5>
                                        <button
                                            className="btn-close"
                                            onClick={() => setShowItemModal(false)}
                                        />
                                    </div>

                                    {/* Body */}
                                    <div className="modal-body">

                                        {/* Image Upload */}
                                        <div className="mb-4 text-center">
                                            <label className="d-block fw-semibold mb-2">Item Image</label>

                                            <div
                                                className="border rounded-4 p-4 bg-light d-flex flex-column justify-content-center align-items-center"
                                                style={{ height: "180px", cursor: "pointer" }}
                                                onClick={() => document.getElementById("itemImageInput").click()}
                                            >
                                                {imagePreview ? (
                                                    <img
                                                        src={imagePreview}
                                                        alt="Preview"
                                                        className="img-fluid rounded-3"
                                                        style={{ maxHeight: "140px" }}
                                                    />
                                                ) : (
                                                    <>
                                                        <i className="bi bi-image fs-1 text-secondary"></i>
                                                        <small className="text-muted">Click to upload image</small>
                                                    </>
                                                )}

                                                <input
                                                    id="itemImageInput"
                                                    type="file"
                                                    accept="image/*"
                                                    className="d-none"
                                                    onChange={handleImageChange}
                                                />
                                            </div>
                                        </div>


                                        <div className="row g-3">

                                            {/* Item Name */}
                                            <div className="col-md-4">
                                                <label className="fw-semibold mb-1">Item Name</label>
                                                <input
                                                    type="number"
                                                    className="form-control rounded-3"
                                                    value={formData.unitPrice}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, name: e.target.value })
                                                    }
                                                />
                                            </div>

                                            {/* Item Name */}
                                            <div className="col-md-4">
                                                <label className="fw-semibold mb-1">Item Name</label>
                                                <input
                                                    type="number"
                                                    className="form-control rounded-3"
                                                    value={formData.neededQty}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, name: e.target.value })
                                                    }
                                                />
                                            </div>

                                            <div className="col-md-4">
                                                <label className="fw-semibold mb-1">Category</label>
                                                <select className="form-select rounded-3" defaultValue="">
                                                    <option value="" disabled>
                                                        Select Unit
                                                    </option>
                                                    <option>Kilogram</option>
                                                    <option>Furniture</option>
                                                    <option>Accessories</option>
                                                    <option>Consumables</option>
                                                </select>
                                            </div>

                                        </div>

                                    </div>

                                    {/* Footer */}
                                    <div className="modal-footer border-0">
                                        <button
                                            className="btn btn-secondary rounded-pill px-4"
                                            onClick={() => setShowItemModal(false)}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            className="btn btn-primary rounded-pill px-4"
                                            onClick={() => {
                                                if (isEditMode) {
                                                    console.log("Update item", formData);
                                                } else {
                                                    console.log("Create item", formData);
                                                }
                                                setShowItemModal(false);
                                            }}
                                        >
                                            {isEditMode ? "Update Item" : "Save Item"}
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div
                            className="modal-backdrop show"
                            onClick={() => setShowItemModal(false)}
                        />
                    </>
                )}


            </div>
        </>
    );
};

const StatCard = ({ title, value, change, icon, color }) => (
    <div className="col-xl-3 col-md-6">
        <div className="card band-card h-100 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                    <p className="text-muted mb-1">{title}</p>
                    <h3 className={`fw-bold text-${color}`}>{value}</h3>
                    <small className="text-muted">{change}</small>
                </div>
                <div className="stat-icon fs-2 text-${color}">{icon}</div>
            </div>
        </div>
    </div>
);


const Activity = ({ title, time, dot }) => (
    <div className="activity-item d-flex justify-content-between align-items-center mb-4">
        <div>
            <div className="fw-semibold">
                {dot && <span className="activity-dot"></span>}
                {title}
            </div>
            <small className="text-muted">{time}</small>
        </div>
        <Eye />
    </div>
);


export default Purchase;
