import React from 'react';

class CountClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return(
            <div>
                <h2>Contador con Clases</h2>
                <p>Haz clikeado {this.state.count} times</p>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1})
                }}>
                    Click me!
                </button>
            </div>
        )
    } 
}

export default CountClass

