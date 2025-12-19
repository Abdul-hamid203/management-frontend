import React, {useEffect, useState} from "react";
import { EyeSlash } from "react-bootstrap-icons";
import {useAuth} from "../Contexts/AuthContext.jsx";
import {FaEnvelope, FaEye} from "react-icons/fa";

const Login = () => {
    const {login} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false); // toggle state

    // Real-time validation
    useEffect(() => {
        const newErrors = { email: "", password: "" };

        // Email validation
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Invalid email address";
        }

        // Password validation
        if (password) {
            const passwordRegex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
            if (!passwordRegex.test(password)) {
                newErrors.password =
                    "Password must be at least 6 characters and include uppercase, lowercase, number, and symbol";
            }
        }

        setErrors(newErrors);
    }, [email, password]);

    const HandleLogin = async (e) => {
        e.preventDefault();

        const success = await login(email, password); // call context login
        setLoading(false);

    }
    return (
        <div className="login-wrapper">
            <div className="login-card shadow">
                {/* Logo */}
                <div className="text-center mb-3">
                    <img src="../assets/leader-portrait.jpg" alt="Logo" className="logo" />
                </div>

                <h4 className="text-center fw-bold">Welcome Back</h4>
                <p className="text-center text-muted mb-4">
                    Sign in to continue to dashboard
                </p>

                {/* Email */}
                <div className="mb-4 position-relative">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p style={{ color: "red",fontSize:12,padding: 2 }}>{errors.email}</p>}
                    <span className="password-icon">
                    <FaEnvelope />
                        </span>
                </div>

                {/* Password */}
                <div className="mb-4 position-relative">
                    <label className="form-label">Password</label>
                    <input
                        type={showPassword?("text"):("password")}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control password-input"
                        placeholder="Enter your password"
                    />
                    {errors.password && <p style={{ color: "red",fontSize:12,padding: 2 }}>{errors.password}</p>}
                    <span className="password-icon">
                <FaEye onClick={() => setShowPassword(!showPassword)} />
                </span>
                </div>

                {/* Button */}
                <button className="btn btn-primary w-100 py-2" onClick={HandleLogin}>
                    {loading ? ("Sign In"):("checking...")}
                </button>
            </div>

            {/* Footer */}
            <div className="footer-text">
                Copyright © 2025, Developed & Maintained by ZanCodex
            </div>
        </div>
    );
};

export default Login;
