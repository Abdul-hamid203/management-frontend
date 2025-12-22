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
    const [showInfoModal, setShowInfoModal] = useState(false);
    const isEmpty = items.length === 0;


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
                <div
                    className="modal fade"
                    id="importModal"
                    tabIndex="-1"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content rounded-4 border-0 shadow">

                            <div className="modal-header border-0">
                                <h5 className="modal-title fw-bold">Import Items</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
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
                                    type="button"
                                    className="btn btn-secondary rounded-pill px-4"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary rounded-pill px-4"
                                >
                                    Import
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}



        </div>
    );
};

const StatCard = ({title, value, subtitle, icon, green, blue}) => (
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
