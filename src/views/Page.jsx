import React from 'react';
import logo from '../assets/img/logo.png';
import Header from './Header';
import Body from './Body';
import Footer from '../containers/Footer';

const Page = () => {
    return (
        <div className="bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Header/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <Body/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
