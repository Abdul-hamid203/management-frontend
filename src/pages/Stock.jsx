import React, {useEffect, useState} from "react";
import {
    Plus,
    People,
    MusicNote,
    Person,
    Image,
    Search, Cart, Grid3x3Gap,List
} from "react-bootstrap-icons";

const BandManagement = () => {
    const [viewMode, setViewMode] = useState("list");
    const [filter, setFilter] = useState("all");
    const [showImportModal, setShowImportModal] = useState(false);
    const [items, setItems] = useState([]); // stock items
    const isEmpty = items.length === 0;

    useEffect(() => {
        if (showImportModal) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => document.body.classList.remove("modal-open");
    }, [showImportModal]);


    return (
        <div className="band-container container-fluid">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold mb-1">Stock Management</h2>
                    <p className="text-muted">
                        Manage Stock entries
                    </p>
                </div>

                <button className="btn btn-primary d-flex align-items-center gap-2">
                    <Cart /> Basket
                </button>
            </div>

            {/* Stats */}
            <div className="row g-4 mb-4">
                <StatCard
                    title="Total Members"
                    value="0"
                    subtitle="All band members"
                    icon={<People />}
                />
                <StatCard
                    title="Active Members"
                    value="0"
                    subtitle="Currently performing"
                    icon={<MusicNote />}
                    green
                />
                <StatCard
                    title="Inactive Members"
                    value="0"
                    subtitle="Not currently active"
                    icon={<Person />}
                />
                <StatCard
                    title="With Images"
                    value="0"
                    subtitle="Members with photos"
                    icon={<Image />}
                    blue
                />
            </div>

            {/* Members Table */}
            <div className="card band-card">
                <div className="card-body">
                    <h5 className="fw-bold">Manage Stock</h5>
                    <p className="text-muted mb-4">
                        Manage Stock items
                    </p>

                    {/* Search */}
                    {/* Controls */}
                    <div className="d-flex align-items-center gap-3 mb-4">

                        {/* Grid / List Toggle */}
                        <button
                            className="btn btn-outline-secondary d-flex align-items-center"
                            disabled={isEmpty}
                            onClick={() =>
                                setViewMode(viewMode === "list" ? "grid" : "list")
                            }
                        >
                            {viewMode === "list" ? <Grid3x3Gap /> : <List />}
                        </button>

                        {/* Filter Dropdown */}
                        <select
                            className="form-select"
                            style={{ width: "180px" }}
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="all">All Items</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="withImages">With Images</option>
                        </select>

                        {/* Search */}
                        <div className="search-box d-flex align-items-center flex-grow-1">
                            <Search />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search stock items..."
                            />
                        </div>
                    </div>


                    {/* CONTENT */}
                    {isEmpty ? (
                        /* DEFAULT IMPORT VIEW */
                        <div className="empty-state text-center">
                            <People size={48} />
                            <h6 className="fw-bold mt-3">No stock items found</h6>
                            <p className="text-muted">
                                Import your items to start managing stock.
                            </p>
                            <button className="btn btn-primary mt-2 d-inline-flex align-items-center gap-2" onClick={() => setShowImportModal(true)}>
                                <Plus /> Import Items
                            </button>
                        </div>
                    ) : viewMode === "list" ? (
                        <>
                            {/* Table Header */}
                            <div className="table-header">
                                <span>Name</span>
                                <span>Position</span>
                                <span>Image</span>
                                <span>Status</span>
                                <span className="text-end">Actions</span>
                            </div>

                            {/* Example list rows will go here */}
                        </>
                    ) : (
                        /* GRID VIEW */
                        <div className="stock-grid">
                            {items.map((item, index) => (
                                <div className="stock-card" key={index}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="stock-image"
                                    />

                                    <div className="stock-name">{item.name}</div>

                                    <div
                                        className={`stock-available ${
                                            item.available < item.minThreshold
                                                ? "stock-low"
                                                : "stock-ok"
                                        }`}
                                    >
                                        Available: {item.available}
                                    </div>

                                    <div className="stock-meta">
                                        Min Threshold: {item.minThreshold}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
            {showImportModal && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ zIndex: 1055 }}>
                <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                            {/* Modal Header */}
                            <div className="modal-header">
                                <h5 className="modal-title">Import Stock Items</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowImportModal(false)}
                                />
                            </div>

                            {/* Modal Body */}
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Upload File
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept=".csv,.xlsx"
                                    />
                                    <small className="text-muted">
                                        Supported formats: CSV, XLSX
                                    </small>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Import Type
                                    </label>
                                    <select className="form-select">
                                        <option>Add new items</option>
                                        <option>Update existing items</option>
                                    </select>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="modal-footer">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() => setShowImportModal(false)}
                                >
                                    Cancel
                                </button>
                                <button className="btn btn-primary">
                                    Import
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Backdrop */}
                    <div
                        className="modal-backdrop fade show"
                        onClick={() => setShowImportModal(false)}
                    />
                </div>
            )}

        </div>
    );
};

const StatCard = ({ title, value, subtitle, icon, green, blue }) => (
    <div className="col-xl-3 col-md-6">
        <div className="card band-card h-100">
            <div className="card-body d-flex justify-content-between">
                <div>
                    <p className="text-muted mb-1">{title}</p>
                    <h3
                        className={`fw-bold ${
                            green ? "text-success" : blue ? "text-primary" : ""
                        }`}
                    >
                        {value}
                    </h3>
                    <small className="text-muted">{subtitle}</small>
                </div>
                <div className="stat-icon">{icon}</div>
            </div>
        </div>
    </div>
);

export default BandManagement;
