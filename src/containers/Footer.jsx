import React from 'react';
import logo from '../assets/img/logo.png';
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div>
            <div className="container-fluid bg-white">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img src={logo} width="400" height="auto" className="img-fluid mx-auto d-block py-2"/>
                    <span className="pl-3"> &copy; 2017-2019 </span>
                </div>
                <div className="col-md-3">
                    <h4 className="pt-4 mt-2 pl-3">Features</h4>
                    <nav className="nav flex-column">
                        <Link className="nav-link text-dark" to="/">Cool Stuff</Link>
                        <Link className="nav-link text-dark" to="/">Random Features</Link>
                        <Link className="nav-link text-dark" to="/">Team Features</Link>
                        <Link className="nav-link text-dark" to="/">Staff for Developers</Link>
                        <Link className="nav-link text-dark" to="/">Another One</Link>
                        <Link className="nav-link text-dark" to="/">Last Time</Link>
                    </nav>
                </div>
                <div className="col-md-3">
                    <h4 className="pt-4 mt-2 pl-3">Resources</h4>
                    <nav className="nav flex-column">
                        <Link className="nav-link text-dark" to="/">Resource</Link>
                        <Link className="nav-link text-dark" to="/">Resource Name</Link>
                        <Link className="nav-link text-dark" to="/">Another resources</Link>
                        <Link className="nav-link text-dark" to="/">Final Resources</Link>
                    </nav>
                </div>
                <div className="col-md-3">
                    <h4 className="pt-4 mt-2 pl-3">About</h4>
                    <nav className="nav flex-column">
                        <Link className="nav-link text-dark" to="/">Team</Link>
                        <Link className="nav-link text-dark" to="/">Location</Link>
                        <Link className="nav-link text-dark" to="/">Privacy</Link>
                        <Link className="nav-link text-dark" to="/">Terms</Link>
                    </nav>
                </div>
            </div>
            {/*Footer_One_end*/}
        </div>
    </div>
    <div className="container-fluid bg-light">
        <div className="row py-4">
            <div className="col-md-12">
                <p className="text-center h5">&copy; 2017-2019<img src={logo} width="200" height="auto" className="img-fluid"/></p>
                <nav className="nav justify-content-center">
                    <Link className="nav-link" to="/">Privacy</Link>
                    <Link className="nav-link" to="/">Terms</Link>
                    <Link className="nav-link" to="/">Support</Link>
                </nav>
            </div>
        </div>
    </div>
        </div>
    );
};