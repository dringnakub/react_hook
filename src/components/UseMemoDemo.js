import React, { useState, useMemo } from 'react'

export default function UseMemoDemo() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <Content a={1} b={count} />
        </div>
    )
}

const Content = (props) => {
    const { a, b } = props
    const memorizedRandom = useMemo(() => {
        return Math.random();
    }, [a]);
    const random = Math.random();

    return (
        <div>
            <h1>A/B : {a}/{b}</h1>
            <h1>Random : {random}</h1>
            <h1>MemorizedRandom : {memorizedRandom}</h1>
        </div>
    )

}

