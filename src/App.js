import React, { useState, useEffect } from 'react'
import CounterClassComponent from './CounterClassComponent';
import CounterFunctionalComponent from './CounterFunctionalComponent';
import Ex1Style from './components/ex1_styles';
import Ex2Image from './components/ex2_image';
import Axios from 'axios';

function App() {

  const [data, setData] = useState({ posts: [] });
  const [query, setQuery] = useState(1);
  const [search, setSearch] = useState(2);
  const [isLoading, setIsLoading] = useState(false)

  const changeValue = (value) => {
    console.log("test ", value)
    setQuery(value)
  }



  useEffect(() => {
    console.log("useEffect Start ====>")
    const fetchData = async () => {
      console.log("fetchData Start ====>");
      setIsLoading(true);
      const result = await Axios(`https://jsonplaceholder.typicode.com/posts?userId=${search}`);
      setData({
        posts: result.data
      });
      setIsLoading(false);

    };
    fetchData();
  }, [search]);

  return (
    <div>

      <input
        type="text"
        valu={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {isLoading ? (
        <div>
          <h3>Loading...</h3>
        </div>) :
        (
          <ul>
            {data.posts.map(post => (
              <li key={post.id}>
                {post.title}
              </li>
            ))}
          </ul>
        )}

      <button onClick={() => setSearch(query)}>Change</button>
    </div>
  );
}
export default App
