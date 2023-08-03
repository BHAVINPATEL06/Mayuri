import React from 'react'
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const Navbar = (props) => {
    return (
        <div className='navbar mb-5 '>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed top-0 p-1 w-100">
                <div className="container-fluid " >
                    <NavLink className="navbar-brand" to="/">Mayuri Foods</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0    ">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink> 
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/tea">Tea&Coffee</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/chats">Chats</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/south">South Foods</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/momos">Momos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/combos">Combos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/mocktail">Mocktails</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/lassi">Lassi</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/mrp">MRP Item</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/sweet">Sweets</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/shake">Shakes</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0    ">
                            <li className="nav-item   ">
                                <NavLink className="nav-link " aria-current="page" to="/about"><button type="button" className="btn btn-dark position-relative">
                                    <p className="fa fa-shopping-cart" style={{ fontSize: "21px" }}>About Us</p>
                                </button></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar