import React, { Component } from 'react';
import Decrementer from './Decrementer';
import Incrementer from './Incrementer';
import CounterDisplay from './CounterDisplay'

class Counter extends Component {
    constructor(){
        super();
        this.state = { current: 42 };
    }

    increment = () => {
        this.setState(
            {current: this.state.current + 1}
        );
    }

    decrement = () => {
        this.setState(
            {current: this.state.current - 1}
        );
    }

    render() {

        return (
            <div>
                <Decrementer decrease={this.decrement}/>
                <CounterDisplay current={this.state.current}/>
                <Incrementer increase={this.increment}/>
            </div>
        );
    }
}

export default Counter;