import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters : [
            {id : 1, value : 4},
            {id : 2, value : 3},
            {id : 3, value : 0},
            {id : 4, value : 0}
        ]
    }

    handelDelete = (counterId) => {
        console.log("delete clicked", counterId);
        const counters = this.state.counters.filter(c => c.id != counterId);
        this.setState({counters});
    }

    render() { 
        return ( 
            <div>
                {this.state.counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={this.handelDelete} 
                        counter={counter}
                    />
                ))}
            </div> 
        );
    }
}
 
export default Counters;