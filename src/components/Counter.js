import React, { useState } from 'react'

function Counter({ initialCount }) {

    const [count, setCount] = useState(initialCount)

    function decrementHandler() {
        setCount(count => (count - 1))
    }

    function signChangeHandler() {
        setCount(count => (count * -1))
    }

    function incrementHandler() {
        setCount(count => (count + 1))

    }
    function resetHandler() {
        setCount(count => (initialCount))

    }



    return (
        <div>
            <div>
                <h1>Count: </h1>
                <h2 data-testid='count'>{count}</h2>
            </div>


            <div className='container'>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler} >Decrement</button>
                <button onClick={resetHandler}>Reset </button>
                <button onClick={signChangeHandler}>Change Sign</button>

            </div>
        </div>
    )
}

export default Counter