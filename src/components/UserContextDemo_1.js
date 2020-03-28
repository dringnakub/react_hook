import React from 'react'
import ThemContext from './ThemContext'
import UseContextChild_1 from './UseContextChild_1'

export default function UserContextDemo_1() {
    const product = {
        name : "reactjs",
        price : 1500,
        colorbg : "red"
    }
    return (
        <div>
            <ThemContext.Provider value={product}>
                <UseContextChild_1 />
            </ThemContext.Provider>
        </div>
    )
}
