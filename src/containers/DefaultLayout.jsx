import React from 'react';
import Navbar from './Header';
import { LeftSidebar, RightSidebar } from './Sidebar';

function DefaultLayout(){
  return (
    <React.Fragment>
    <Navbar />
      <div className="row">
        <div className="col-md-2">
          <LeftSidebar />
        </div>
        <div className="col-md-8">
            <h1  className="text-danger">Dashboard</h1>
        </div>
        <div className="col-md-2">
            <RightSidebar />
        </div>
      </div>
    </React.Fragment>
  )
}

export default DefaultLayout;