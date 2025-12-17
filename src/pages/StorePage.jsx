import React from 'react';
import HeaderComponent from "../components/HeaderComponent.jsx";

const StorePage = (props)=>{
    return (
        <div className="container mt-5 pt-5">
            <HeaderComponent />
                {/*CATEGORY TABS*/}
                <ul className="nav nav-tabs mt-4" id="myTab" role="tablist">
                    <li className="nav-item">
                        <button className="nav-link active" id="electronics-tab" data-bs-toggle="tab"
                                data-bs-target="#electronics" type="button">Electronics
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" id="food-tab" data-bs-toggle="tab" data-bs-target="#food"
                                type="button">Food
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" id="clothing-tab" data-bs-toggle="tab" data-bs-target="#clothing"
                                type="button">Clothing
                        </button>
                    </li>
                </ul>

                {/*TAB CONTENT*/}
                <div className="tab-content mt-4">

                    {/*Electronics*/}
                    <div className="tab-pane fade show active fade-in" id="electronics">
                        <div className="row g-4">

                            <div className="col-md-3">
                                <div className="item-card p-2">
                                    <img src="https://via.placeholder.com/300x200" className="item-img"/>
                                    <div className="p-3">
                                        <h6 className="fw-bold">Laptop</h6>
                                        <span className="stock-badge">12 remaining</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="item-card p-2">
                                    <img src="https://via.placeholder.com/300x200" className="item-img"/>
                                    <div className="p-3">
                                        <h6 className="fw-bold">Smartphone</h6>
                                        <span className="stock-badge">30 remaining</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="tab-pane fade fade-in" id="food">
                        <div className="row g-4">

                            <div className="col-md-3">
                                <div className="item-card p-2">
                                    <img src="https://via.placeholder.com/300x200" className="item-img"/>
                                    <div className="p-3">
                                        <h6 className="fw-bold">Rice Bag</h6>
                                        <span className="stock-badge">50 remaining</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="item-card p-2">
                                    <img src="https://via.placeholder.com/300x200" className="item-img"/>
                                    <div className="p-3">
                                        <h6 className="fw-bold">Sugar</h6>
                                        <span className="stock-badge">20 remaining</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="tab-pane fade fade-in" id="clothing">
                        <div className="row g-4">

                            <div className="col-md-3">
                                <div className="item-card p-2">
                                    <img src="https://via.placeholder.com/300x200" className="item-img"/>
                                    <div className="p-3">
                                        <h6 className="fw-bold">T-Shirt</h6>
                                        <span className="stock-badge">75 remaining</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="item-card p-2">
                                    <img src="https://via.placeholder.com/300x200" className="item-img"/>
                                    <div className="p-3">
                                        <h6 className="fw-bold">Jeans</h6>
                                        <span className="stock-badge">18 remaining</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
    );
}

export default StorePage;