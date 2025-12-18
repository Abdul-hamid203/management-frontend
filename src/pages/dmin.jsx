import React from "react";
import {
    Plus,
    People,
    MusicNote,
    Person,
    Image,
    Search,
} from "react-bootstrap-icons";

const BandManagement = () => {
    return (
        <div className="band-container container-fluid">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold mb-1">Band Management</h2>
                    <p className="text-muted">
                        Manage your band members and their information
                    </p>
                </div>

                <button className="btn btn-primary d-flex align-items-center gap-2">
                    <Plus /> Add New Member
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
                    <h5 className="fw-bold">Band Members</h5>
                    <p className="text-muted mb-4">
                        Manage your band members and their roles
                    </p>

                    {/* Search */}
                    <div className="search-box mb-4">
                        <Search />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search band members..."
                        />
                    </div>

                    {/* Table Header */}
                    <div className="table-header">
                        <span>Member</span>
                        <span>Position</span>
                        <span>Image</span>
                        <span>Status</span>
                        <span className="text-end">Actions</span>
                    </div>

                    {/* Empty State */}
                    <div className="empty-state text-center">
                        <People size={40} />
                        <h6 className="fw-bold mt-3">No band members yet</h6>
                        <p className="text-muted">
                            Get started by adding your first band member.
                        </p>
                        <button className="btn btn-primary mt-2 d-inline-flex align-items-center gap-2">
                            <Plus /> Add First Member
                        </button>
                    </div>
                </div>
            </div>
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
