import React, { useState } from 'react'
import CounterClassComponent from './CounterClassComponent';
import CounterFunctionalComponent from './CounterFunctionalComponent';
import Ex1Style from './components/ex1_styles';
import Ex2Image from './components/ex2_image';
import Axios from 'axios';
import UserList from './components/userList';
import Ex3Props from './components/ex3_props';
import Ex4Destructuring from './components/ex4_destructuring';
import UseStateDemo_2 from './components/UseStateDemo_2';
import UseStateDemo_3 from './components/UseStateDemo_3';
import UseEffect from './components/UseEffect';
import UseEffectInterval from './components/UseEffectInterval';
import UserContextDemo_1 from './components/UserContextDemo_1';
import UseMemoDemo from './components/UseMemoDemo';
import UseCallBack from './components/UseCallBack';

function App() {
  // const [query, setQuery] = useState(1);
  // const [{ data, isLoading, isError, setSearch }] = UserList();

  // return (
  //   <div>
  //     <input
  //       type="text"
  //       placeholder="User ID"
  //       value={query}
  //       onChange={event => setQuery(event.target.value)}
  //     />
  //     <button type="button" onClick={() => setSearch(query)}>
  //       Search
  //     </button>

  //     {isError && <div>Something went wrong ...</div>}

  //     {isLoading ? (
  //       <div>Loading ...</div>
  //     ) : (
  //         <ul>
  //           {data.posts.map(post => (
  //             <li key={post.id}>
  //               {post.title}
  //             </li>
  //           ))}
  //         </ul>
  //       )}
  //   </div>
  // );

  let var1 = 0;
  const var2 = "hello";
  const var3 = true;
  const [count, setCount] = useState(0)
  const [isShow, setIsShow] = useState(true)

  const submit = () => {
    alert("Submit Hey Hey")
  }
  return (
    <div>
      <h1>Drink Rider {var1}</h1>
      <h1>Drink Rider {var2}</h1>
      <h1>Drink Rider {var3 && "Yes"}</h1>
      {var3 && <h1>YES</h1>}
      {var3 ? <h1>Yesss</h1> : <h1>No</h1>}

      <h2>Count: {count}</h2>
      <button onClick={() => {
        var1 = var1 + 1;
        setCount(count + 1);
        console.log("var1 ", var1)
      }}>Add</button>

      <CounterClassComponent />
      <CounterFunctionalComponent />

      <Ex1Style />
      <Ex2Image />
      <Ex3Props counter={count} color="#F00" isShowLabel={false} />
      <Ex4Destructuring usernameHint="UserName" passwordHint="PassWord" />
      <Ex4Destructuring handleSubmit={submit} />


      <hr />
      <UseStateDemo_2 />

      <hr />

      <UseStateDemo_3 />
      <hr />

      {isShow && <UseEffect />}
      <button onClick={() => setIsShow(false)}>Hide</button>

      <hr />
      <UseEffectInterval />

      <hr />
      <UserContextDemo_1 />

      <hr />
      <UseMemoDemo />

      <hr />
      <UseCallBack />
    </div>
  )
}
export default App
