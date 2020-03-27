import React, { useState } from 'react'
import CounterClassComponent from './CounterClassComponent';
import CounterFunctionalComponent from './CounterFunctionalComponent';
import Ex1Style from './components/ex1_styles';
import Ex2Image from './components/ex2_image';
import Axios from 'axios';
import UserList from './components/userList';

function App() {
  const [query, setQuery] = useState(1);
  const [{ data, isLoading, isError, setSearch }] = UserList();

  return (
    <div>
      <input
        type="text"
        placeholder="User ID"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <ul>
            {data.posts.map(post => (
              <li key={post.id}>
                {post.title}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}
export default App
