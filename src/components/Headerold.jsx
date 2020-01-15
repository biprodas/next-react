import React from 'react';
import logo from '../assets/img/logo.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
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
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header_description">
                                <img src={logo} width="300" height="auto" className="img-fluid mx-auto d-block"/>
                                <h2 className="text-center py-2">Checkout Form</h2>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h5 className="text-center text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* navbar */}

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Billing Address</h2>
                            <form className="py-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="f_name">First Name:</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="l_name">Last Name:</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Username:</label>
                                            <label className="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                            <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">@</div>
                                            </div>
                                            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="email">Email(Optional)</label>
                                            <input type="email" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="address">Address:</label>
                                            <input type="text" className="form-control" placeholder="1234 Main St"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="address_2">Address 2(Optional):</label>
                                            <input type="text" className="form-control" placeholder="Appartment or Suite"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label for="country">Country:</label>
                                            <select id="country" className="form-control">
                                                <option selected>United State</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label for="country">State:</label>
                                            <select id="state" className="form-control">
                                                <option selected>California</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label for="country">Zip:</label>
                                            <input type="number" className="form-control"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row border-top border-bottom">
                                    <div className="col-md-12 py-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="form-check-label" for="Check1">
                                            Shipping address is the same as my billing address
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
                                            <label className="form-check-label" for="Check2">
                                                Save this information for next time
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row py-2">
                                    <div className="col-md-12">
                                        <label className="h4 py-4">Payment</label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                            <label className="form-check-label" for="exampleRadios1">
                                            Credit Card
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                            <label className="form-check-label" for="exampleRadios2">
                                            Debit card
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
                                            <label className="form-check-label" for="exampleRadios3">
                                            PayPal
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row py-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="cardname">Name Of Card:</label>
                                            <input type="text" className="form-control"/>
                                            <label className="py-2">Full name as displayed on card</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="cardname">Card Number:</label>
                                            <input type="number" className="form-control"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row border-bottom py-2">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label for="Expiration">Expiration:</label>
                                            <input type="date" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label for="cvv">CVV:</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row py-4">
                                    <div className="col-md-12">
                                        <button type="button" className="btn btn-primary btn-lg btn-block">Continue to Checkout</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* user info */}

                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="list-group mb-5">
                                        <li className="d-flex justify-content-between align-items-center h3">
                                        Your Cart
                                        <span className="badge badge-dark badge-pill">3</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center h5 py-2">
                                        Product Name
                                        <span className="badge badge-pill h5" style={{fontSize: "20px"}}>$12</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center h5 py-2">
                                        Second Product
                                        <span className="badge badge-pill h5" style={{fontSize: "20px"}}>$8</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center h5 py-2">
                                        Third Item 
                                        <span className="badge badge-pill h5" style={{fontSize: "20px"}}>$5</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center h5 text-success py-2">
                                        Promo Code
                                        <span className="badge badge-pill h5" style={{fontSize: "20px"}}>-$5</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center h5 py-2">
                                        total(USD) 
                                        <span className="badge badge-pill h5" style={{fontSize: "20px"}}>$20</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row py-3">
                                <div className="col-md-12">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <div className="input-group my-3">
                                                <input type="text" className="form-control" placeholder="Promo Code" aria-label="redeem" aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                    <span className="input-group-text" id="basic-addon2">Redeem</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Billing Info */}
                        </div>
                    </div>
                </div>
                {/*Checkout_form_end*/}
                <div className="container-fluid bg-white py-3">
                    <div className="row py-3">
                        <div className="col-md-12">
                            <h2 className="text-center">Pricing</h2>
                        </div>
                    </div>
                    <div className="container border-bottom">
                        <div className="row py-3">
                            <div className="col-md-12">
                                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="row py-5 mb-3">
                            <div className="col-md-4">
                                <div className="card text-center">
                                    <div className="card-header h5">
                                    Free
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title h4">$0/Mo</h5>
                                        <p className="card-text">10 GB users included</p>
                                        <p className="card-text">2 GB of storage</p>
                                        <p className="card-text">Email Support</p>
                                        <p className="card-text">Help center Access</p>
                                    </div>
                                    <div className="card-footer" style={{background:'white'}}>
                                        <button type="button" className="btn btn-outline-primary btn-lg" style={{paddingLeft:'40px',paddingRight:'40px',paddingtop:'7px',paddingBottom:'7px'}}>Sign Up For Free</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card text-center">
                                    <div className="card-header h5">
                                    Pro
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title h4">$15/Mo</h5>
                                        <p className="card-text">20 GB users included</p>
                                        <p className="card-text">10 GB of storage</p>
                                        <p className="card-text">Priority Email Support</p>
                                        <p className="card-text">Help center Access</p>
                                    </div>
                                    <div className="card-footer" style={{background:'white'}}>
                                        <button type="button" className="btn btn-primary btn-lg" style={{paddingLeft:'70px',paddingRight:'70px'}}>Get Started</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card text-center">
                                    <div className="card-header h5">
                                    Enterprise
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title h4">$29/Mo</h5>
                                        <p className="card-text">30 GB users included</p>
                                        <p className="card-text">15 GB of storage</p>
                                        <p className="card-text">Phone & Email Support</p>
                                        <p className="card-text">Help center Access</p>
                                    </div>
                                    <div className="card-footer" style={{background:'white'}}>
                                        <button type="button" className="btn btn-primary btn-lg" style={{paddingLeft:'70px',paddingRight:'70px'}}>Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*price_card*/}
                    </div>
                </div>
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
        </div>
    );
}

export default Header;
