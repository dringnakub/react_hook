import React from 'react'

export default function ex4_destructuring(props) {
    const product = {
        name: "ReactJs",
        price: 1500
    }
    const { name, price } = product

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.handleSubmit()
            }
            }>
                <label>Username</label>
                <input type="text" placeholder={props.usernameHint} />
                <br />
                <label>Password</label>
                <input type="text" placeholder={props.passwordHint} />
                <h1>Object</h1>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <hr />
                <h2>Destructuring</h2>
                <p>{name}</p>
                <p>{price}</p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
