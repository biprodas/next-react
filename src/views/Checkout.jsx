import React from 'react';
import '../App.css';
import BillingForm from './BillingForm';
import Cart from './Cart';


export default function Checkout() {
    return (
        <React.Fragment>
            <div className="row mt-3">
                {/* Billing Form */}
                <div className="col-md-8">
                    <BillingForm />
                </div>
                {/* Billing Form ends */}

                {/* Cart */}
                <div className="col-md-4">
                    <Cart />
                </div>
                {/* Cart ends */}
            </div>
        </React.Fragment>
    )
}
