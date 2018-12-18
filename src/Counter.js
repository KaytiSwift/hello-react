import React, { Component } from 'react';
import Decrementer from './Decrementer';
import Incrementer from './Incrementer';
import CounterDisplay from './CounterDisplay'

class Counter extends Component {
    render() {
        return (
            <div>
                <Decrementer/>
                <CounterDisplay/>
                <Incrementer />
            </div>
        );
    }
}

export default Counter;