import React, { Component } from 'react'

export default class CreateaCounterClass extends Component {
    state = {
        counter: 0
    }
    render() {
        const { counter } = this.state
        return (
            <div data-test="create-counter-class-container" >
                <div data-test="displayCounterDiv" >Create Counter : {counter}</div>
                <button data-test="counter-incrementing-button" onClick={() => this.setState({ counter: counter + 1 })} >Click</button>
            </div>
        )
    }
}
