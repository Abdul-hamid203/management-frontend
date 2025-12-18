import React from "react";

const ProfileSettings = () => {
    return (
        <div className="container profile-settings-container">
            {/* Header */}
            <div className="mb-4">
                <h4 className="fw-bold">Profile Settings</h4>
                <p className="text-muted">Manage your account settings and preferences</p>
            </div>

            <div className="row g-4">
                {/* Left Section */}
                <div className="col-lg-8">
                    <div className="card settings-card">
                        <div className="card-body">
                            <h5 className="fw-semibold mb-4">Personal Information</h5>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your full name..."
                                    />
                                    <small className="text-muted">
                                        Only letters, spaces, hyphens (-), and apostrophes (') are allowed
                                    </small>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value="user@moic.go.tz"
                                        disabled
                                    />
                                    <small className="text-muted">
                                        Only @moic.go.tz email addresses are allowed
                                    </small>
                                </div>
                            </div>

                            <hr className="my-4" />

                            {/* Change Password */}
                            <div className="form-check form-switch mb-3">
                                <input className="form-check-input" type="checkbox" checked readOnly />
                                <label className="form-check-label fw-semibold">
                                    Change Password
                                </label>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Current Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter current password..."
                                />
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">New Password</label>
                                    <div className="input-group">
                                        <input type="password" className="form-control" />
                                        <button className="btn btn-outline-secondary">Generate</button>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Confirm New Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>

                            {/* Password Strength */}
                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <span className="fw-semibold">Password Strength</span>
                                    <span className="text-success fw-semibold">Strong</span>
                                </div>
                                <div className="progress mt-2">
                                    <div className="progress-bar bg-success w-100"></div>
                                </div>
                            </div>

                            <ul className="password-rules">
                                <li>At least 8 characters</li>
                                <li>At least one lowercase letter (a-z)</li>
                                <li>At least one uppercase letter (A-Z)</li>
                                <li>At least one number (0-9)</li>
                                <li>At least one special character (!@#$%^&*)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-lg-4">
                    <div className="card settings-card mb-4">
                        <div className="card-body text-center">
                            <h6 className="fw-semibold mb-3">Profile Preview</h6>

                            <div className="profile-avatar mb-2">U</div>
                            <h6 className="fw-semibold mb-0">User Name</h6>
                            <p className="text-muted">user@email.com</p>

                            <hr />

                            <div className="d-flex justify-content-between">
                                <span>Account Status</span>
                                <span className="text-success fw-semibold">Active</span>
                            </div>
                        </div>
                    </div>

                    <div className="card settings-card">
                        <div className="card-body">
                            <h6 className="fw-semibold mb-3">Save Changes</h6>
                            <button className="btn btn-primary w-100 mb-2">
                                Save Changes
                            </button>
                            <button className="btn btn-outline-secondary w-100">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
