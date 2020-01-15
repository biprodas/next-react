import React from 'react';
import '../App.css';

export default function BillingForm() {
    return (
        <React.Fragment>
            <form>
            <h4>Billing Address</h4>

                <div className="row mt-3">
                    <div className="col">
                        <label className=" text-secondary">First name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col">
                        <label className=" text-secondary">Last name</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col">
                        <label className=" text-secondary">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">@</div>
                            </div>
                        <input type="text" className="form-control" />
                        </div>
                    </div> 
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <label className=" text-secondary">Email (Optional)</label>
                        <input type="text" className="form-control" placeholder="you@example.com"/>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <label className=" text-secondary">Address</label>
                        <input type="text" className="form-control" placeholder="1234 Main St"/>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <label className=" text-secondary">Address 2 (Optional)</label>
                        <input type="text" className="form-control" placeholder="Apartment or suite"/>
                    </div>
                </div>

                <div className="row mt-2 mb-3">
                    <div className="col">
                        <label className=" text-secondary">Counrty</label>
                        <select className="custom-select" id="inlineFormCustomSelect">
                            <option selected>United States</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col">
                        <label className=" text-secondary">State</label>
                        <select className="custom-select" id="inlineFormCustomSelect">
                            <option selected>California</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col">
                        <label className=" text-secondary">ZIP</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>

            <hr className="my-5" />
                
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customControlAutosizing" />
                    <label class="custom-control-label" for="customControlAutosizing">
                    Shipping address is the same as the billing address.
                    </label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customControlAutosizing1" />
                    <label class="custom-control-label" for="customControlAutosizing1">
                    Save this information for next time.
                    </label>
                </div>

            <hr className="my-5" />

            <h4>Payment</h4>

                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" for="customRadio1">Credit card</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" for="customRadio2">Debit card</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" for="customRadio2">PayPal</label>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <label className="text-secondary">Name on card</label>
                        <input type="text" className="form-control" />
                        <p className="text-dark">Full name as displayed on card</p>
                    </div>
                    <div className="col">
                        <label className="text-secondary">Credit card number</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="row mt-2 mb-3">
                    <div className="col">
                        <label className=" text-secondary">Expiration</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col">
                        <label className=" text-secondary">CVV</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col">
                        
                    </div>
                    <div className="col">
                        
                    </div>
                </div>

            <hr className="my-5" />

            <button type="button" class="btn btn-primary btn-lg btn-block p-2 mb-5">Continue to checkout</button>

            </form>
        </React.Fragment>
    )
}
