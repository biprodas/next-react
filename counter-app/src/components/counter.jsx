import React, { Component } from 'react';

class Counter extends Component {
    /*
    state = {
        value : this.props.counter.value
        //names : ['Biprodas', 'Hiranmoy', 'Uzzwal']
    };
    
    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    
    handleIncrement = () => {
        //console.log("Increment Clicked ", this);
        this.setState({value : this.state.value + 1});
    }
    */

    render() {
        //console.log("props ", this.props);
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        return classes += this.props.counter.value===0 ? "warning" : "primary";
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
    /*
    renderTags(){
        if(this.state.names.length === 0) return <p>There are no names!</p>;
        return <ul>{this.state.names.map(name => <li key={name}>{name}</li>)}</ul>;
    }
    */
}

export default Counter;
