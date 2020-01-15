import React from 'react';
import {Link} from 'react-router-dom';

function LeftSidebar(){
    return (
        
          <ul class="list-group">
            <li class="list-group-item active"><Link to="/">Home</Link></li>
            <li class="list-group-item"><Link to="/room">Room</Link></li>
            <li class="list-group-item"><Link to="/table">Table</Link></li>
            <li class="list-group-item"><Link to="/yard">Yard</Link></li>
            <li class="list-group-item"><Link to="/fan">Fan</Link></li>
          </ul>
        
        
    )
}

function RightSidebar(){
    return <h4>Right  Sidebar</h4>
}

export  {
    LeftSidebar,
    RightSidebar
}