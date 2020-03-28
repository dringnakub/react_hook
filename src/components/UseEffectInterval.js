import React, { useState, useEffect } from 'react'

export default function UseEffectInterval() {
    const [count, setCount] = useState(0)
    const doSometing = () => {
        setCount(sssss => sssss + 1);
        console.log("doSometing")
    }

    useEffect(() => {
        const intervalId = setInterval(doSometing, 1000);
        // Clean up
        return () => {
            console.log("Destroy");
            clearInterval(intervalId);
        }

    }, [])
    return (
        <div>
            <h1>Count : {count}</h1>
        </div>
    )
}
