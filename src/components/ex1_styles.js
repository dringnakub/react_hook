import React from 'react'
import "./styles.css"
export default function ex1_styles() {

    const styles = {
        container: { backgroundColor: "#F0F", height: 200 }
    }
    return (
        <div >
            <div className="root">
                <h1>Style Component Example</h1>
            </div>

            <div style={styles.container}>
                <h1>Style Component Object</h1>
            </div>
        </div>
    )
}
