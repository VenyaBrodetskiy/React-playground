import React from "react";
import { Link } from "react-router-dom";

export function NavbarComponent() {
    return (
        <div className="container-fluid bg-warning">
            <nav className="navbar navbar-light">
                <div className="navbar-brand">Navbar</div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/students"} className="nav-link active">Students</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/to-do-list"} className="nav-link active">To do list</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/about"} className="nav-link active">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/contactus"} className="nav-link active">Contact us</Link>
                    </li>
                </ul>
            </nav>

            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="navbar-brand">Navbar</div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/about"} className="nav-link active">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/contactus"} className="nav-link active">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </nav> */}
        </div>)
}