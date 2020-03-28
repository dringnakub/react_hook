import React, { useState, useCallback } from 'react'

export default function UseCallBack() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <Content id={count} />
        </div>
    )
}

const Content = (props) => {
    const { id } = props
    const handleClick = useCallback(() => {
        console.log("Click");
    }, [id])

    return (
        <div>
            <h1>UseCallBack Demo : {id}</h1>
            <button onClick={handleClick}>Test</button>
        </div>
    )

}

