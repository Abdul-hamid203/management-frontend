import React from "react";
import {
    Plus,
    Image,
    FileText,
    Wrench,
    MusicNote,
    Eye,
} from "react-bootstrap-icons";
import HeaderComponent from "../components/HeaderComponent.jsx";
import {useNavigate} from "react-router-dom";

const Setting = () => {
    return (
        <>
            <HeaderComponent />
            <div className="dashboard-container container-fluid">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="fw-bold mb-1">Stock settings</h2>
                        <p className="text-muted">
                            Welcome ! Here's where's you define happening with the main stock.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="row g-4 pb-3">
                    {/* Recent Activity */}
                    <div className="col-lg-6">
                        <div className="card dashboard-card h-100">
                            <div className="card-body">

                                {/* Header with icons */}
                                <div className="d-flex justify-content-between align-items-start card-header mb-3" style={{background:"white"}}>
                                    <div>
                                        <h5 className="fw-bold mb-1">Item Settings</h5>
                                        <p className="text-muted mb-0">
                                            Latest changes to your website content
                                        </p>
                                    </div>

                                    {/* Icon actions */}
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-sm btn-outline-secondary" title="Import">
                                            <i className="bi bi-upload"></i>
                                        </button>
                                        <button className="btn btn-sm btn-outline-secondary" title="Add">
                                            <i className="bi bi-plus-lg"></i>
                                        </button>
                                        <button className="btn btn-sm btn-outline-secondary" title="info">
                                            <i className="bi bi-info-lg"></i>
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="row">

                                    {/* Right: Scrollable Item List */}
                                    <div className="col-7">
                                        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                                            <ul className="list-unstyled mb-0">

                                                <li className="item-row d-flex justify-content-between align-items-start p-2 rounded mb-2">
                                                    <div>
                                                        <div className="fw-medium">Homepage Banner</div>
                                                        <small className="text-muted">
                                                            Main hero section displayed on the homepage
                                                        </small>
                                                    </div>
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        <i className="bi bi-eye"></i>
                                                    </button>
                                                </li>
                                                <li className="item-row d-flex justify-content-between align-items-start p-2 rounded mb-2">
                                                    <div>
                                                        <div className="fw-medium">Homepage Banner</div>
                                                        <small className="text-muted">
                                                            Main hero section displayed on the homepage
                                                        </small>
                                                    </div>
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        <i className="bi bi-eye"></i>
                                                    </button>
                                                </li>
                                                <li className="item-row d-flex justify-content-between align-items-start p-2 rounded mb-2">
                                                    <div>
                                                        <div className="fw-medium">Homepage Banner</div>
                                                        <small className="text-muted">
                                                            Main hero section displayed on the homepage
                                                        </small>
                                                    </div>
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        <i className="bi bi-eye"></i>
                                                    </button>
                                                </li>

                                                <li className="item-row d-flex justify-content-between align-items-start p-2 rounded mb-2">
                                                    <div>
                                                        <div className="fw-medium">Footer Links</div>
                                                        <small className="text-muted">
                                                            Quick navigation links shown at the bottom
                                                        </small>
                                                    </div>
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        View
                                                    </button>
                                                </li>

                                                <li className="item-row d-flex justify-content-between align-items-start p-2 rounded mb-2">
                                                    <div>
                                                        <div className="fw-medium">Product Slider</div>
                                                        <small className="text-muted">
                                                            Carousel for highlighting featured products
                                                        </small>
                                                    </div>
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        View
                                                    </button>
                                                </li>

                                            </ul>
                                        </div>

                                    </div>

                                    {/* Left: Statistics */}
                                    <div className="col-5 border-end">
                                        <div className="mb-3">
                                            <small className="text-muted">Last Import</small>
                                            <div className="fw-semibold">12 Sep 2025</div>
                                        </div>

                                        <div className="mb-3">
                                            <small className="text-muted">Total Items</small>
                                            <div className="fw-semibold">128</div>
                                        </div>

                                        <div className="mb-3">
                                            <small className="text-muted">Active Items</small>
                                            <div className="fw-semibold text-success">96</div>
                                        </div>

                                        <div>
                                            <small className="text-muted">Inactive Items</small>
                                            <div className="fw-semibold text-warning">32</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Quick Actions */}
                    <div className="col-lg-6">
                        <div className="card dashboard-card h-100">
                            <div className="card-body">

                                {/* Header with icons */}
                                <div className="d-flex justify-content-between align-items-start card-header mb-3" style={{background:"white"}}>
                                    <div>
                                        <h5 className="fw-bold mb-1">Category Settings</h5>
                                        <p className="text-muted mb-0">
                                            Latest changes to your website content
                                        </p>
                                    </div>

                                    {/* Icon actions */}
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-sm btn-outline-secondary" title="Import">
                                            <i className="bi bi-upload"></i>
                                        </button>
                                        <button className="btn btn-sm btn-outline-secondary" title="Add">
                                            <i className="bi bi-plus-lg"></i>
                                        </button>
                                        <button className="btn btn-sm btn-outline-secondary" title="info">
                                            <i className="bi bi-info-lg"></i>
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="row">

                                    {/* Right: Scrollable Item List */}
                                    <div className="col-7">
                                        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                                            <ul className="list-unstyled mb-0">

                                                <li className="item-row d-flex justify-content-between align-items-start p-2 rounded mb-2">
                                                    <div>
                                                        <div className="fw-medium">Homepages Banner</div>
                                                        <small className="text-muted">
                                                            Main hero section displayed on the homepage
                                                        </small>
                                                    </div>
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        <i className="bi bi-eye"></i>
                                                    </button>
                                                </li>
                                                <li className="item-row d-flex justify-content-between align-items-start p-2 rounded mb-2">
                                                    <div>
                                                        <div className="fw-medium">Homepage Banner</div>
                                                        <small className="text-muted">
                                                            Main hero section displayed on the homepage
                                                        </small>
                                                    </div>
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        <i className="bi bi-eye"></i>
                                                    </button>
                                                </li>
                                                <li className="item-row d-flex justify-content-between align-items-start p-2 rounded mb-2">
                                                    <div>
                                                        <div className="fw-medium">Homepage Banner</div>
                                                        <small className="text-muted">
                                                            Main hero section displayed on the homepage
                                                        </small>
                                                    </div>
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        <i className="bi bi-eye"></i>
                                                    </button>
                                                </li>

                                                <li className="item-row d-flex justify-content-between align-items-start p-2 rounded mb-2">
                                                    <div>
                                                        <div className="fw-medium">Footer Links</div>
                                                        <small className="text-muted">
                                                            Quick navigation links shown at the bottom
                                                        </small>
                                                    </div>
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        View
                                                    </button>
                                                </li>

                                                <li className="item-row d-flex justify-content-between align-items-start p-2 rounded mb-2">
                                                    <div>
                                                        <div className="fw-medium">Product Slider</div>
                                                        <small className="text-muted">
                                                            Carousel for highlighting featured products
                                                        </small>
                                                    </div>
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        View
                                                    </button>
                                                </li>

                                            </ul>
                                        </div>

                                    </div>

                                    {/* Left: Statistics */}
                                    <div className="col-5 border-end">
                                        <div className="mb-3">
                                            <small className="text-muted">Last Import</small>
                                            <div className="fw-semibold">12 Sep 2025</div>
                                        </div>

                                        <div className="mb-3">
                                            <small className="text-muted">Total Items</small>
                                            <div className="fw-semibold">128</div>
                                        </div>

                                        <div className="mb-3">
                                            <small className="text-muted">Active Items</small>
                                            <div className="fw-semibold text-success">96</div>
                                        </div>

                                        <div>
                                            <small className="text-muted">Inactive Items</small>
                                            <div className="fw-semibold text-warning">32</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const StatCard = ({ title, value, change, icon }) => (
    <div className="col-xl-3 col-md-6">
        <div className="card dashboard-card h-100">
            <div className="card-body d-flex justify-content-between">
                <div>
                    <p className="text-muted mb-1">{title}</p>
                    <h3 className="fw-bold">{value}</h3>
                    <small className="text-muted">{change}</small>
                </div>
                <div className="stat-icon">{icon}</div>
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


export default Setting;
