import React from 'react'

export default function ex3_props(props) {
    return (
        <div>
            {props.isShowLabel && <h1>Show Label</h1>}
            <h1 style={{ color: props.color }}>Props : {props.counter}</h1>
        </div>
    )
}
