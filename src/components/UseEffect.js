import React,{useState,useEffect} from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(4);
    useEffect(() => {
    console.log("Start useEffect ====>");
    document.title = "Current count :" + count
return () => {
    console.log("Start useEffect Return ************")
    document.title = "destroyed"
}


    }, [count])
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    )
}
