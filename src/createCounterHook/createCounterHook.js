import React from 'react'

export default function CreateCounerHook() {

    const [counter, setCounter] = React.useState(0)
    return (
        <div data-test="appContainer">
            <div data-test="displayCounterDiv" >Create Counter : {counter}</div>
            <button data-test="counterIncrementingButton" onClick={() => setCounter(counter + 1)}>Click</button>
        </div>
    )
}
