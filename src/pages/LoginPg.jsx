import React from "react";
import { EyeSlash } from "react-bootstrap-icons";

const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="login-card shadow">
                {/* Logo */}
                <div className="text-center mb-3">
                    <img src="../assets/leader-portrait.jpg" alt="Logo" className="logo" />
                </div>

                <h4 className="text-center fw-bold">Welcome Back</h4>
                <p className="text-center text-muted mb-4">
                    Sign in to access CMS dashboard
                </p>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password */}
                <div className="mb-4 position-relative">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control password-input"
                        placeholder="Enter your password"
                    />
                    <span className="password-icon">
            <EyeSlash />
          </span>
                </div>

                {/* Button */}
                <button className="btn btn-primary w-100 py-2">
                    Sign In
                </button>
            </div>

            {/* Footer */}
            <div className="footer-text">
                Copyright © 2025, Developed & Maintained by eGAZ
            </div>
        </div>
    );
};

export default Login;
