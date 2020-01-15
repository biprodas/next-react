import React from 'react';
import '../App.css';

export default function Cart() {
    return (
        <React.Fragment>
            <h4> <span className="text-secondary"> Your cart </span> <span className="badge badge-primary exRound float-right"> 3 </span> </h4>

            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between bg-white">
                    <h6 className="mb-1 bg-white">Product name</h6>
                    <strong className="bg-white">$12</strong>
                    </div>
                    <small className="bg-white">Brief description</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between bg-white">
                    <h6 className="mb-1 bg-white">Second product</h6>
                    <strong className="bg-white">$8</strong>
                    </div>
                    <small className="bg-white">Brief description</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between bg-white">
                    <h6 className="mb-1 bg-white">Third item</h6>
                    <strong className="bg-white">$5</strong>
                    </div>
                    <small className="bg-white">Brief description</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start promo">
                    <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 text-green">Promo code</h6>
                    <strong className="bg-white text-green">-$5</strong>
                    </div>
                    <small className="bg-white text-green">EXAMPLECODE</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between bg-white">
                    <h6 className="mb-1 bg-white">Total USD</h6>
                    <strong className="bg-white">$20</strong>
                    </div>
                </a>
            </div>

            <div className="list-group mt-3">
                <li className="list-group-item flex-column align-items-start p-2">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo Code" />
                            <div className="input-group-append">
                                <span role="button" className="btn input-group-text redeem">Redeem</span>
                            </div>
                        </div>
                    </form>
                </li>
            </div>

           
        </React.Fragment>
    )
}
