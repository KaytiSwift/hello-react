import React, {Component} from 'react';

class Decrementer extends Component {
    render() {
        const {decrease} = this.props;
        return (
            <button onClick={decrease}>
                --
            </button>
        );
    }
}

export default Decrementer;