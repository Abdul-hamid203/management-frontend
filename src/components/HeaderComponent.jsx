import React from 'react';

const HeaderComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
                        <svg width="32" height="32" fill="#0d6efd" viewBox="0 0 24 24">
                            <path
                                d="M6 2L3 6v2h18V6l-3-4H6zm12 6H6V6.236L7.618 4h8.764L18 6.236V8zM4 10h16l-1.5 12h-13L4 10z"/>
                        </svg>
                        &nbsp; StockMaster
                    </a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navMenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a href="#dashboard" className="nav-link">Dashboard</a></li>
                            <li className="nav-item"><a href="#stockSection" className="nav-link">Stock</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Purchase</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Settings</a></li>
                        </ul>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="user-box d-flex align-items-center gap-3" data-bs-toggle="dropdown">
                        <img src="avatar-1.jpg" className="user-img"/>
                        <div>
                            <h6 className="mb-0 fw-bold">Joseph William</h6>
                            <small className="text-muted">Administrator</small>
                        </div>
                    </div>
                    <ul className="dropdown-menu shadow border-0 mt-3 p-2">
                        <li><a className="dropdown-item py-2" href="#"><i className="bi bi-person me-2"></i> Profile</a>
                        </li>
                        <li><a className="dropdown-item py-2" href="#"><i className="bi bi-lock me-2"></i> Lock
                            Screen</a></li>
                        <li><a className="dropdown-item py-2" href="#"><i
                            className="bi bi-box-arrow-right me-2"></i> Logout</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default HeaderComponent;