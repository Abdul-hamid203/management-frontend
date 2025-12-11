// import React from "react";
// import { FaEnvelope, FaLock, FaUserCircle } from "react-icons/fa";
//
// const LoginPage = () => {
//     return (
//         <div className="login-container">
//             <div className="login-card">
//
//                 <div className="header">
//                     <FaUserCircle className="header-icon" />
//                     <h2>Welcome Back</h2>
//                     <p>Please login to continue</p>
//                 </div>
//
//                 <div className="input-group">
//                     <FaEnvelope className="input-icon" />
//                     <input type="email" placeholder="Email Address" />
//                 </div>
//
//                 <div className="input-group">
//                     <FaLock className="input-icon" />
//                     <input type="password" placeholder="Password" />
//                 </div>
//
//                 <button className="login-btn">Login</button>
//
//                 <p className="footer-text">
//                     Don’t have an account?
//                     <span className="register-link"> Register</span>
//                 </p>
//
//             </div>
//         </div>
//     );
// };
//
// export default LoginPage;
import React, {useState} from "react";
import { FaEnvelope, FaLock, FaUserCircle } from "react-icons/fa";
import {useAuth} from "../Contexts/AuthContext.jsx";

const LoginPage = () => {

        const { login } = useAuth();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!email || !password) return; // simple validation
            await login(email, password); // calls AuthContext login
        };
    return (
        <div className="page-wrapper">

            {/* LEFT COLUMN */}
            <div className="left-column">
                <div className="overlay-fade"></div>

                <div className="restaurant-text">
                    <h1>Experience the Taste of Perfection</h1>
                    <p>Fresh ingredients, delightful flavors, crafted with passion.</p>
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="right-column">
                <div className="login-card">
                    <div className="header">
                        <FaUserCircle className="header-icon" />
                        <h2>Welcome Back</h2>
                        <p>Please login to continue</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <FaEnvelope className="input-icon" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <FaLock className="input-icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="login-btn">Login</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;
