import React from "react";
import {Link} from 'react-router-dom';

function Navbar(){
    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/features">Features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/disabled" tabindex="-1" aria-disabled="true">Disabled</Link>
          </li>
        </ul>
      </div>
    </nav>
    
    )
}

export default Navbar;