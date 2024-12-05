import "./App.css";
// import { Stevec } from "./components/kviz-1";
// import { Predmet, Predmet2 } from "./components/kviz-2";
// import { Demo } from "./components/kviz-3";
// import { Kosarica } from "./components/kviz-4";
// import { Counter } from "./components/kviz-5";
// import { CounterWrapper, Items } from "./components/kviz-7";

function App() {
  return (
    <>
      {/* <Stevec />
      <Predmet />
      <Predmet2 />
      <Demo /> */}
      {/* <Kosarica items={[]} /> */}
      {/* <Counter /> */}
      {/* <Items /> */}
      {/* <CounterWrapper /> */}
      <Counter />
    </>
  );
}

export default App;

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
