import React, {Component} from 'react';

class Incrementer extends Component {
    render() {
        const {increase} = this.props;
        return (
            <button onClick={increase}>
                ++
            </button>            
        );
    }
}

export default Incrementer;