import React from 'react';

const MyInfo = () => {
    return (
        <div>
            <h1>Biprodas</h1>
            <p>Software Engineer</p>
        </div>
    ) 
    
}

const MouInfo = () => {
    return (
        <div>
            <h3>Moumita</h3>
            <MouAge />
        </div>
    )
}

const MouAge = () => {
    return <h4>34</h4>
}

const MyAndMouInfo = () => {
    return (
        <div>
            <MyInfo />
            <MouInfo />
        </div>
    )
}

export {
    MyInfo,
    MouAge,
    MouInfo,
    MyAndMouInfo
}