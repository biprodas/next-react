import React from 'react';

function LeftSidebar(){
    return (
        
          <ul class="list-group">
            <li class="list-group-item active">Home</li>
            <li class="list-group-item">Room</li>
            <li class="list-group-item">Table</li>
            <li class="list-group-item">Yard</li>
            <li class="list-group-item">Fan</li>
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