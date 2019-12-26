import React from 'react';
import logo from '../assets/img/logo.png';
import { Link } from "react-router-dom";

function Header (){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                <Link className="navbar-brand" to="/"><img src={logo} width="180" height="auto"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto pull-md-right pl-5 pt-3">
                        <li className="nav-item text-dark h6">
                            <Link className="nav-link" to="/">Features<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item text-dark h6">
                            <Link className="nav-link" to="/">Enterprise</Link>
                        </li>
                        <li className="nav-item text-dark h6">
                            <Link className="nav-link" to="/">Support</Link>
                        </li>
                        <li className="nav-item text-dark h6">
                            <Link className="nav-link" to="/">Pricing</Link>
                        </li>
                        <li className="nav-item h6 px-md-4 ">
                            <Link className="btn btn-outline-primary" to="/" role="button"
                            >Sign-Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header; 