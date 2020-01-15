import React from 'react';

import Package from './Package';


export default function Pricing() {
    return (
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
                    <Package />
                </div>
                {/*price_card*/}
            </div>
        </div>
    )
}
