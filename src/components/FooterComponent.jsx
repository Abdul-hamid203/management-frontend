import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="mt-5 py-4" style="background: #fff; box-shadow: 0 -4px 20px rgba(0,0,0,0.05);">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <p className="mb-2 mb-md-0 text-muted">&copy; 2025 StockMaster. All rights reserved.</p>
                <ul className="list-unstyled d-flex mb-0 gap-3">
                    <li><a href="#" className="text-muted text-decoration-none">Privacy Policy</a></li>
                    <li><a href="#" className="text-muted text-decoration-none">Terms of Service</a></li>
                    <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default FooterComponent;