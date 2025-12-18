import React from "react";
import {
    Plus,
    Image,
    FileText,
    Wrench,
    MusicNote,
    Eye,
} from "react-bootstrap-icons";

const Dashboard = () => {
    return (
        <div className="dashboard-container container-fluid">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold mb-1">Dashboard</h2>
                    <p className="text-muted">
                        Welcome back! Here's what's happening with your website.
                    </p>
                </div>

                <button className="btn btn-primary d-flex align-items-center gap-2">
                    <Plus /> Quick Add
                </button>
            </div>

            {/* Stats Cards */}
            <div className="row g-4 mb-4">
                <StatCard
                    title="Total Sliders"
                    value="12"
                    change="+2 from last month"
                    icon={<Image />}
                />
                <StatCard
                    title="News Articles"
                    value="48"
                    change="+8 from last month"
                    icon={<FileText />}
                />
                <StatCard
                    title="Services"
                    value="6"
                    change="+1 from last month"
                    icon={<Wrench />}
                />
                <StatCard
                    title="Band Members"
                    value="5"
                    change="0 from last month"
                    icon={<MusicNote />}
                />
            </div>

            {/* Bottom Section */}
            <div className="row g-4">
                {/* Recent Activity */}
                <div className="col-lg-6">
                    <div className="card dashboard-card h-100">
                        <div className="card-body">
                            <h5 className="fw-bold">Recent Activity</h5>
                            <p className="text-muted mb-4">
                                Latest changes to your website content
                            </p>

                            <Activity
                                title="Updated About Page"
                                time="2 hours ago"
                            />
                            <Activity
                                title="Added new slider image"
                                time="4 hours ago"
                            />
                            <Activity
                                title="Published news article"
                                time="1 day ago"
                                dot
                            />
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="col-lg-6">
                    <div className="card dashboard-card h-100">
                        <div className="card-body">
                            <h5 className="fw-bold">Quick Actions</h5>
                            <p className="text-muted mb-4">
                                Common tasks and shortcuts
                            </p>

                            <Action label="Add New Slider" icon={<Image />} />
                            <Action label="Create News Article" icon={<FileText />} />
                            <Action label="Edit About Page" icon={<FileText />} />
                            <Action label="Manage Services" icon={<Wrench />} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

const Action = ({ label, icon }) => (
    <div className="action-item d-flex align-items-center gap-3 mb-3">
        <span className="action-icon">{icon}</span>
        <span className="fw-semibold">{label}</span>
    </div>
);

export default Dashboard;
