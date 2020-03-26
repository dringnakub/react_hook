vscode extension
1. vscode-icon
2. es7
3. html to jsx
4. color highlight
5. path intell
6. matching tag
7. prettier

  // let var1 = 0;
  // const var2 = "hello";
  // const var3 = true;
  // const [count, setCount] = useState(0)



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