import React, { useEffect, useState } from "react";
import {
    CurrencyDollar, ExclamationTriangle,
    Eye, FileText, Image, MusicNote, Wrench,
} from "react-bootstrap-icons";
import HeaderComponent from "../components/HeaderComponent.jsx";
import StoreHooks from "../Hooks/StoreHooks.js";

const Purchasemport = () => {
    const [showInfoModal, setShowInfoModal] = useState(false);
    const { orders, loading, error, refetch } = StoreHooks();
    const [currentItem, setCurrentItem] = useState(null);
    const [filter, setFilter] = useState("all");

    const OrderData = [
        {
            "orderId": "ORD-001",
            "initiator": "John Doe",
            "approver": "Jane Smith",
            "isPaid": true,
            "isReceived": false,
            "status": "pending",
            "amount": 250.75,
            "paidMethod": "Credit Card",
            "initiatedDate": "2025-12-20T10:30:00Z",
            "paidDate": "2025-12-20T11:00:00Z",
            "items": [
                {
                    "itemId": "ITEM-101",
                    "itemName": "Notebook",
                    "quantity": 2,
                    "unitPrice": 50.00
                },
                {
                    "itemId": "ITEM-102",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-103",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-104",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-105",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-106",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-107",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-108",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-109",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                }
            ]
        },
        {
            "orderId": "ORD-001",
            "initiator": "John Doe",
            "approver": "Jane Smith",
            "isPaid": true,
            "isReceived": false,
            "status": "pending",
            "amount": 250.75,
            "paidMethod": "Credit Card",
            "initiatedDate": "2025-12-20T10:30:00Z",
            "paidDate": "2025-12-20T11:00:00Z",
            "items": [
                {
                    "itemId": "ITEM-101",
                    "itemName": "Notebook",
                    "quantity": 2,
                    "unitPrice": 50.00
                },
                {
                    "itemId": "ITEM-102",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-103",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-104",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-105",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-106",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-107",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-108",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-109",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                }
            ]
        },
        {
            "orderId": "ORD-001",
            "initiator": "John Doe",
            "approver": "Jane Smith",
            "isPaid": true,
            "isReceived": false,
            "status": "pending",
            "amount": 250.75,
            "paidMethod": "Credit Card",
            "initiatedDate": "2025-12-20T10:30:00Z",
            "paidDate": "2025-12-20T11:00:00Z",
            "items": [
                {
                    "itemId": "ITEM-101",
                    "itemName": "Notebook",
                    "quantity": 2,
                    "unitPrice": 50.00
                },
                {
                    "itemId": "ITEM-102",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-103",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-104",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-105",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-106",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-107",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-108",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-109",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                }
            ]
        },
        {
            "orderId": "ORD-001",
            "initiator": "John Doe",
            "approver": "Jane Smith",
            "isPaid": true,
            "isReceived": false,
            "status": "pending",
            "amount": 250.75,
            "paidMethod": "Credit Card",
            "initiatedDate": "2025-12-20T10:30:00Z",
            "paidDate": "2025-12-20T11:00:00Z",
            "items": [
                {
                    "itemId": "ITEM-101",
                    "itemName": "Notebook",
                    "quantity": 2,
                    "unitPrice": 50.00
                },
                {
                    "itemId": "ITEM-102",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-103",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-104",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-105",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-106",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-107",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-108",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-109",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                }
            ]
        },
        {
            "orderId": "ORD-001",
            "initiator": "John Doe",
            "approver": "Jane Smith",
            "isPaid": true,
            "isReceived": false,
            "status": "pending",
            "amount": 250.75,
            "paidMethod": "Credit Card",
            "initiatedDate": "2025-12-20T10:30:00Z",
            "paidDate": "2025-12-20T11:00:00Z",
            "items": [
                {
                    "itemId": "ITEM-101",
                    "itemName": "Notebook",
                    "quantity": 2,
                    "unitPrice": 50.00
                },
                {
                    "itemId": "ITEM-102",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-103",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-104",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-105",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-106",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-107",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-108",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-109",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                }
            ]
        },
        {
            "orderId": "ORD-001",
            "initiator": "John Doe",
            "approver": "Jane Smith",
            "isPaid": true,
            "isReceived": false,
            "status": "pending",
            "amount": 250.75,
            "paidMethod": "Credit Card",
            "initiatedDate": "2025-12-20T10:30:00Z",
            "paidDate": "2025-12-20T11:00:00Z",
            "items": [
                {
                    "itemId": "ITEM-101",
                    "itemName": "Notebook",
                    "quantity": 2,
                    "unitPrice": 50.00
                },
                {
                    "itemId": "ITEM-102",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-103",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-104",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-105",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-106",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-107",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-108",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-109",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                }
            ]
        },
        {
            "orderId": "ORD-001",
            "initiator": "John Doe",
            "approver": "Jane Smith",
            "isPaid": true,
            "isReceived": false,
            "status": "pending",
            "amount": 250.75,
            "paidMethod": "Credit Card",
            "initiatedDate": "2025-12-20T10:30:00Z",
            "paidDate": "2025-12-20T11:00:00Z",
            "items": [
                {
                    "itemId": "ITEM-101",
                    "itemName": "Notebook",
                    "quantity": 2,
                    "unitPrice": 50.00
                },
                {
                    "itemId": "ITEM-102",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-103",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-104",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-105",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-106",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-107",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-108",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-109",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                }
            ]
        },
        {
            "orderId": "ORD-001",
            "initiator": "John Doe",
            "approver": "Jane Smith",
            "isPaid": true,
            "isReceived": false,
            "status": "pending",
            "amount": 250.75,
            "paidMethod": "Credit Card",
            "initiatedDate": "2025-12-20T10:30:00Z",
            "paidDate": "2025-12-20T11:00:00Z",
            "items": [
                {
                    "itemId": "ITEM-101",
                    "itemName": "Notebook",
                    "quantity": 2,
                    "unitPrice": 50.00
                },
                {
                    "itemId": "ITEM-102",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-103",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-104",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-105",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-106",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-107",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-108",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                },
                {
                    "itemId": "ITEM-109",
                    "itemName": "Pen",
                    "quantity": 5,
                    "unitPrice": 10.15
                }
            ]
        },
        {
            "orderId": "ORD-002",
            "initiator": "Alice Brown",
            "approver": "Mark Lee",
            "isPaid": false,
            "isReceived": false,
            "status": "unpaid",
            "amount": 120.00,
            "paidMethod": null,
            "initiatedDate": "2025-12-21T09:15:00Z",
            "paidDate": null,
            "items": [
                {
                    "itemId": "ITEM-103",
                    "itemName": "Mouse",
                    "quantity": 1,
                    "unitPrice": 40.00
                },
                {
                    "itemId": "ITEM-104",
                    "itemName": "Keyboard",
                    "quantity": 1,
                    "unitPrice": 80.00
                }
            ]
        },
        {
            "orderId": "ORD-003",
            "initiator": "David Kim",
            "approver": "Sarah Wilson",
            "isPaid": true,
            "isReceived": true,
            "status": "completed",
            "amount": 75.50,
            "paidMethod": "Cash",
            "initiatedDate": "2025-12-22T14:45:00Z",
            "paidDate": "2025-12-22T15:00:00Z",
            "items": [
                {
                    "itemId": "ITEM-105",
                    "itemName": "USB Cable",
                    "quantity": 3,
                    "unitPrice": 25.17
                }
            ]
        }
    ];

    // Filtered items logic
    const filteredItems = React.useMemo(() => {
        let result = [...OrderData];

        if (filter.startsWith("paid:")) {
            const value = filter.split(":")[1] === "true";
            result = result.filter(o => o.isPaid === value);
        }
        else if (filter.startsWith("received:")) {
            const value = filter.split(":")[1] === "true";
            result = result.filter(o => o.isReceived === value);
        }
        else if (filter.startsWith("status:")) {
            const value = filter.split(":")[1];
            result = result.filter(o => o.status === value);
        }
        else if (filter.startsWith("method:")) {
            const value = filter.split(":")[1];
            result = result.filter(o => o.paidMethod === value);
        }

        if (filter === "amount:high") result.sort((a, b) => b.amount - a.amount);
        else if (filter === "amount:low") result.sort((a, b) => a.amount - b.amount);
        else if (filter === "date:latest") result.sort((a, b) => new Date(b.initiatedDate) - new Date(a.initiatedDate));
        else if (filter === "date:oldest") result.sort((a, b) => new Date(a.initiatedDate) - new Date(b.initiatedDate));

        return result;
    }, [OrderData, filter]);

    const totalPurchaseCost = OrderData.reduce(
        (sum, item) => sum + (item.amount || 0),
        0
    );

    const [formData, setFormData] = useState({
        unitPrice: "",
        neededQty:"",
        unit:"",
        image: null,
    });

    const openInfoModal = (order) => {
        setCurrentItem(order);
        setShowInfoModal(true);
    };

    const modalTotalItems = currentItem?.items.reduce((sum, i) => sum + i.quantity, 0) || 0;
    const modalTotalCost = currentItem?.items.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0) || 0;


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
        setFormData({ ...formData, image: file });
        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
    };

    const openEditItemModal = (item) => {
        setIsEditMode(true);
        setCurrentItem(item);
        setFormData({
            unitPrice: item.unitPrice,
            neededQty: item.neededQty,
            unit: item.unit,
            image: null,
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

    if(error){
        return (
            <p>nothing here..</p>
        )
    }
    return (
        <>
            <HeaderComponent />
            <div className="dashboard-container container-fluid">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="fw-bold mb-1">Purchase Section</h2>
                        <p className="text-muted">
                            Welcome ! Here's where's you define happening with the main stock.
                        </p>
                    </div>
                </div>

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
                                        <select
                                            className="form-select form-select-sm ms-2"
                                            style={{ minWidth: "260px" }}
                                            value={filter}
                                            onChange={(e) => setFilter(e.target.value)}
                                        >
                                            <option value="all">All Items</option>
                                            <option value="paid:true">Paid</option>
                                            <option value="paid:false">Unpaid</option>
                                            <option value="received:true">Received</option>
                                            <option value="received:false">Not Received</option>
                                            <option value="status:pending">Pending</option>
                                            <option value="status:completed">Completed</option>
                                            <option value="amount:high">Amount High → Low</option>
                                            <option value="amount:low">Amount Low → High</option>
                                            <option value="date:latest">Newest</option>
                                            <option value="date:oldest">Oldest</option>
                                        </select>

                                        <button className="btn btn-sm btn-outline-secondary" title="Import" onClick={() => setShowImportModal(true)}>
                                            <i className="bi bi-upload"></i>
                                        </button>
                                        <button className="btn btn-sm btn-outline-secondary" title="Add" onClick={openNewItemModal}>
                                            <i className="bi bi-plus-lg"></i>
                                        </button>
                                        <button className="btn btn-sm btn-outline-secondary" title="Info" onClick={() => setShowInfoModal(true)}>
                                            <i className="bi bi-info-lg"></i>
                                        </button>
                                    </div>
                                </div>

                                {/* Scrollable Modern List */}
                                <div style={{ maxHeight: "400px", overflowY: "auto", paddingRight: "8px" }}>
                                    {filteredItems.map(order => (
                                        <div
                                            key={order.orderId}
                                            className="d-flex justify-content-between align-items-center p-3 mb-2 shadow-sm rounded-4 bg-white hover-shadow"
                                            style={{ transition: "all 0.2s", cursor: "pointer" }}
                                        >
                                            {/* Left: Order Info */}
                                            <div className="d-flex flex-column">
                                                {/* Order Number + Status Badge */}
                                                <div className="d-flex align-items-center gap-2 mb-1">
                                                    <div className="fw-semibold">{order.orderId}</div>
                                                    <span
                                                        className="px-2 py-1 rounded-pill text-white fw-semibold"
                                                        style={{
                                                            fontSize: "0.75rem",
                                                            backgroundColor:
                                                                order.status === "completed" ? "#28a745" :
                                                                    order.status === "pending" ? "#ffc107" :
                                                                        order.status === "unpaid" ? "#dc3545" :
                                                                            "#6c757d"
                                                        }}
                                                    >
                                                        {order.status.toUpperCase()}
                                                    </span>
                                                </div>

                                                {/* Additional Info */}
                                                <div className="text-muted d-flex gap-3" style={{ fontSize: "0.85rem" }}>
                                                    <span>Paid: {order.isPaid ? "Yes" : "No"}</span>
                                                    <span>Received: {order.isReceived ? "Yes" : "No"}</span>
                                                    <span>Amount: ${order.amount.toFixed(2)}</span>
                                                    <span>Method: {order.paidMethod || "-"}</span>
                                                </div>
                                            </div>

                                            {/* Right: Action Buttons */}
                                            <div className="d-flex gap-2">
                                                <button
                                                    className="btn btn-sm btn-outline-primary"
                                                    title="View"
                                                    onClick={() => openInfoModal(order)}
                                                >
                                                    <Eye />
                                                </button>

                                                <button
                                                    className="btn btn-sm btn-outline-success"
                                                    title="Accept Payment"
                                                    onClick={() => alert(`Accept payment for ${order.orderId}`)}
                                                >
                                                    <CurrencyDollar />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                {showInfoModal && currentItem && (
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
                                        <h5 className="modal-title fw-bold">Order Items - {currentItem.orderId}</h5>
                                        <button
                                            className="btn-close"
                                            onClick={() => setShowInfoModal(false)}
                                        />
                                    </div>

                                    {/* Body */}
                                    <div className="modal-body">
                                        {currentItem.items.length > 0 ? (
                                            <div className="table-responsive" style={{
                                                maxHeight: currentItem.items.length > 8 ? "400px" : "auto",
                                                overflowY: currentItem.items.length > 8 ? "auto" : "visible",
                                            }}>
                                                <table className="table table-hover table-borderless align-middle">
                                                    <thead>
                                                    <tr>
                                                        <th>Item Name</th>
                                                        <th>Quantity</th>
                                                        <th>Unit Price</th>
                                                        <th>Total</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {currentItem.items.map(item => (
                                                        <tr key={item.itemId}>
                                                            <td>{item.itemName}</td>
                                                            <td>{item.quantity}</td>
                                                            <td>${item.unitPrice.toFixed(2)}</td>
                                                            <td>${(item.quantity * item.unitPrice).toFixed(2)}</td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        ) : (
                                            <p className="text-muted">No items in this order.</p>
                                        )}
                                    </div>

                                    {/* Summary Line */}
                                    <div className="d-flex justify-content-end align-items-center mt-3 p-2 rounded-3 ">
                                        <span className="fw-semibold me-3">
                                            Entries : {currentItem.items.length}
                                        </span>
                                        <span className="fw-semibold me-3">
                                            Items: {modalTotalItems}
                                        </span>
                                        <span className="fw-bold text-primary">
                                            Cost: ${modalTotalCost.toFixed(2)}
                                        </span>
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

            </div>
        </>
    );
};

export default Purchasemport;
