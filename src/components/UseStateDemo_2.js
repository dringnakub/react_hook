import React, { useState } from 'react'

export default function UseStateDemo_2() {
    const [account, setAccount] = useState({ username: "", password: "" })
    return (
        <div>
            <span>#Debug {JSON.stringify(account)}</span>
            <form onSubmit={(e) => {
                e.preventDefault();
                alert(JSON.stringify(account));
            }}>
                <label>Username</label>
                <input type="text" value={account.username} onChange={(e) => setAccount({ ...account, username: e.target.value })} />
                <br />
                <label>Password</label>
                <input type="text" value={account.password} onChange={(e) => setAccount({ ...account, password: e.target.value })} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
