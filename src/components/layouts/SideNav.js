// SideNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

function SideNav() {
    return(
    <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
        <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
            <a href="#" className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5">Exercises</span>
            </a>
            <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
            <li className="nav-item">
                <Link to="/exercise1" className="nav-link px-sm-0 px-2">
                    <i className="fs-5 bi-house"></i><span className="ms-1">Exercise 1</span>
                </Link>
            </li>
            <li>
                <Link to="/exercise2" className="nav-link px-sm-0 px-2">
                    <i className="fs-5 bi-house"></i><span className="ms-1">Exercise 2</span>
                </Link>
            </li>
        </ul>              
        </div>
    </div>
    )
}
export default SideNav;
