import React, { useState } from 'react'

function CounterFunctionalComponent() {
    const [count, setCount] = useState(0)
    return (
        <div style={{ backgroundColor: "yellow" }} >
            <h1>CounterFunctionalComponent</h1>
            <h3>Counter : {count}</h3>
            <button onClick={() => setCount(count + 1)}>Add Class</button>
        </div>
    )
}

export default CounterFunctionalComponent
