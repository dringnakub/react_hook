import React, { useContext } from 'react'
import ThemContext from './ThemContext'
export default function UseContextChild_1() {
    const ct = useContext(ThemContext)
    return (
        <div>
            <ThemContext.Consumer>
                {data => (
                    <h1 style={{ color: data.colorbg }}>{data.colorbg}</h1>
                )}
            </ThemContext.Consumer>

            <h1>Load For Context : {ct.name}</h1>
        </div>
    )
}
