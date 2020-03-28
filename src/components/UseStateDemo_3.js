import React, { useState } from 'react'

export default function UseStateDemo_3() {
    const [account, setAccount] = useState({ username: "", password: "" });
    const [accountList, setAccountList] = useState([]);
    return (
        <div>
            <form>
                <label>Username</label>
                <input type="text" value={account.username} onChange={(e) => setAccount({ ...account, username: e.target.value })} />
                <br />
                <label>Password</label>
                <input type="text" value={account.password} onChange={(e) => setAccount({ ...account, password: e.target.value })} />
                <br />
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    setAccountList([...accountList, { ...account, index: accountList.length, dringrider: "d kub" }])
                }}>Submit AccountList</button>
                <ul>
                    {accountList.map((item, index) =>
                        <li key={index}>Username : {item.username} , Password : {item.password} , IndexAtt : {item.index} , New : {item.dringrider} </li>)}
                </ul>
            </form>
        </div>
    )
}
