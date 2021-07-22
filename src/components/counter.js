import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
   
    render() {
        return (
            <div>
                <button onClick={this.IncrementItem}>Click to increment by 1</button>
                <h2>{this.state.clicks}</h2>
            </div>
        );
    }
}

export default Counter;