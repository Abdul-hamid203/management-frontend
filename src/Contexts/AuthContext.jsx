// // import React, { createContext, useContext, useState } from "react";
// // import AuthModal from "./component/AuthModal.jsx"; // single modal
// // import { authService } from "./component/AuthService.js";
// //
// // const AuthContext = createContext();
// // export const useAuth = () => useContext(AuthContext);
// //
// // export const AuthProvider = ({ children }) => {
// //     const [isAuthenticated, setIsAuthenticated] = useState(false);
// //     const [modalMode, setModalMode] = useState(null); // 'login' | 'register' | null
// //
// //     const openLogin = () => setModalMode("login");
// //     const openRegister = () => setModalMode("register");
// //     const closeModal = () => setModalMode(null);
// //
// //     const login = () => {
// //         setIsAuthenticated(true);
// //         closeModal();
// //     };
// //
// //     const logout = () => setIsAuthenticated(false);
// //
// //     return (
// //         <AuthContext.Provider value={{ isAuthenticated, login, logout, openLogin, openRegister }}>
// //             {children}
// //
// //             {/* Single global modal */}
// //             {modalMode && <AuthModal mode={modalMode} onClose={closeModal} switchMode={setModalMode} />}
// //         </AuthContext.Provider>
// //     );
// // };
// //
// // import React, { createContext, useContext, useState } from "react";
// // import Swal from "sweetalert2";
// // import { authService } from "./component/AuthService.js";
// //
// // const AuthContext = createContext();
// // export const useAuth = () => useContext(AuthContext);
// //
// // export const AuthProvider = ({ children }) => {
// //     const [user, setUser] = useState(null);
// //
// //     const isAuthenticated = !!user;
// //
// //     // LOGIN
// //     const login = async (email, password) => {
// //         try {
// //             Swal.fire({
// //                 title: "Checking credentials...",
// //                 didOpen: () => Swal.showLoading(),
// //                 allowOutsideClick: false
// //             });
// //
// //             const loggedUser = await authService.login(email, password);
// //
// //             Swal.close();
// //             Swal.fire({
// //                 icon: "success",
// //                 title: `Welcome back, ${loggedUser.name}!`,
// //                 timer: 1500,
// //                 showConfirmButton: false
// //             });
// //
// //             setUser(loggedUser);
// //             return true;
// //
// //         } catch (err) {
// //             Swal.close();
// //             Swal.fire({
// //                 icon: "error",
// //                 title: "Login failed",
// //                 text: err
// //             });
// //             return false;
// //         }
// //     };
// //
// //     // REGISTER
// //     const register = async (data) => {
// //         try {
// //             Swal.fire({
// //                 title: "Creating your account...",
// //                 didOpen: () => Swal.showLoading(),
// //                 allowOutsideClick: false
// //             });
// //
// //             const newUser = await authService.register(data);
// //
// //             Swal.close();
// //             Swal.fire({
// //                 icon: "success",
// //                 title: "Account created!",
// //                 text: `Welcome, ${newUser.name}!`,
// //                 timer: 1500,
// //                 showConfirmButton: false
// //             });
// //
// //             setUser(newUser);
// //             return true;
// //
// //         } catch (err) {
// //             Swal.close();
// //             Swal.fire({
// //                 icon: "error",
// //                 title: "Registration failed",
// //                 text: err
// //             });
// //             return false;
// //         }
// //     };
// //
// //     // LOGOUT
// //     const logout = () => {
// //         setUser(null);
// //         Swal.fire({
// //             icon: "info",
// //             title: "Logged out",
// //             timer: 1000,
// //             showConfirmButton: false
// //         });
// //     };
// //
// //     return (
// //         <AuthContext.Provider value={{
// //             user,
// //             isAuthenticated,
// //             login,
// //             logout,
// //             register
// //         }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // // };
//
// import React, { createContext, useContext, useState } from "react";
// import { authService } from "../services/AuthService.js"
// import Swal from "sweetalert2";
// import { useLocation, useNavigate } from "react-router-dom";
// import withReactContent from "sweetalert2-react-content";
// import MySwal from "sweetalert2";
//
// const AuthContext = createContext();
// // eslint-disable-next-line react-refresh/only-export-components
// export const useAuth = () => useContext(AuthContext);
//
// export const AuthProvider = ({ children }) => {
//     const location = useLocation();
//     const navigate = useNavigate();
//
//     const [user, setUser] = useState(null);
//     const [returnPath, setReturnPath] = useState("/");
//
//     const isAuthenticated = !!user;
//
//     const openLogin = () => {
//         setReturnPath(location.pathname);
//     };
//
//     const openRegister = () => {
//         setReturnPath(location.pathname);
//     };
//
//
//     // LOGIN
//     const login = async (email, password) => {
//         try {
//              Swal.fire({title: "Checking...", didOpen: () => Swal.showLoading()});
//
//
//             const MySwal = withReactContent(Swal);
//             const loggedUser = await authService.login(email, password);
//
//             Swal.close();
//             await MySwal.fire({
//                 toast: true,
//                 position: "top-end", // top-right corner
//                 showConfirmButton: false,
//                 timer: 3000,
//                 timerProgressBar: true,
//                 icon,
//                 title: message,
//                 background: "#fff",
//                 iconColor: icon === "success" ? "green" : icon === "error" ? "red" : "blue",
//             });
//
//             setUser(loggedUser);
//
//             if (loggedUser.role === "cashier") {
//                 navigate("/cashier");
//             }else {
//                 navigate(returnPath);
//             }
//
//         } catch (err) {
//              MySwal.fire({
//                 toast: true,
//                 position: "top-end", // top-right corner
//                 showConfirmButton: false,
//                 timer: 3000,
//                 timerProgressBar: true,
//                 icon,
//                 title: message,
//                 background: "#fff",
//                 iconColor: icon === "success" ? "green" : icon === "error" ? "red" : "blue",
//             });
//         }
//     };
//
//     const logout = () => {
//         setUser(null);
//         MySwal.fire({
//             toast: true,
//             position: "top-end", // top-right corner
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             icon,
//             title: message,
//             background: "#fff",
//             iconColor: icon === "success" ? "green" : icon === "error" ? "red" : "blue",
//         });
//     };
//
//     return (
//         <AuthContext.Provider
//             value={{
//                 isAuthenticated,
//                 user,
//                 login,
//                 logout,
//                 openLogin,
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// };
import React, { createContext, useContext, useState } from "react";
import { authService } from "../services/AuthService.js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const MySwal = withReactContent(Swal);

export const AuthProvider = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [returnPath, setReturnPath] = useState("/");

    const isAuthenticated = !!user;

    const openLogin = () => setReturnPath(location.pathname);
    const openRegister = () => setReturnPath(location.pathname);

    // LOGIN
    const login = async (email, password) => {
        try {
             Swal.fire({
                title: "Checking credentials...",
                didOpen: () => Swal.showLoading(),
                allowOutsideClick: false,
            });

            const loggedUser = await authService.login(email, password);

            Swal.close();

            await MySwal.fire({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                icon: "success",
                title: `Welcome back, ${loggedUser.name}!`,
                background: "#fff",
                iconColor: "green",
            });

            setUser(loggedUser);

            if (loggedUser.role === "cashier") {
                navigate("/cashier");
            } else {
                navigate(returnPath);
            }

            return true;

        } catch (err) {
            Swal.close();
            await MySwal.fire({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true,
                icon: "error",
                title: err?.message || "Login failed",
                background: "#fff",
                iconColor: "red",
            });
            return false;
        }
    };

    // LOGOUT
    const logout = async () => {
        setUser(null);
        await MySwal.fire({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            icon: "info",
            title: "Logged out successfully",
            background: "#fff",
            iconColor: "blue",
        });
        navigate("/login");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                login,
                logout,
                openLogin,
                openRegister,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
