import React, { useState, useEffect } from 'react'
import CounterClassComponent from './CounterClassComponent';
import CounterFunctionalComponent from './CounterFunctionalComponent';
import Ex1Style from './components/ex1_styles';
import Ex2Image from './components/ex2_image';
import Axios from 'axios';

function App() {

  const [data, setData] = useState({ users: [] });


  const fetchUsers = async () => {
    console.log("fetchUsers");
    const mArray = await Axios.get('https://jsonplaceholder.typicode.com/users');
    setData({
      users: mArray.data
    });
  }

  const showUsers = () => {
     return data && data.users.map(uu => (
     <li key={uu.id} >name : {uu.name} username : {uu.username}</li>
     ))
  }
  //   useEffect(() => {
  //     (async function() {
  //         try {
  //             const response = await fetch(
  //                 'https://jsonplaceholder.typicode.com/users'
  //             );
  //             const json = await response.json();
  //             setData(json.data);
  //         } catch (e) {
  //             console.error(e);
  //         }
  //     })();
  // }, []);

  useEffect(() => {
    console.log("useEffect");
    fetchUsers();

  }, [])


  return (
    <div>
      <h1>https://jsonplaceholder.typicode.com/users</h1>
      <ul>{showUsers()}</ul>
    </div>

  )
}

export default App
