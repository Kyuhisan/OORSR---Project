import { useState } from "react";

export function Counter() {
  // Začetni state count je 0
  const [count, setCount] = useState(0);

  // Ob kliku se count poveča za 1
  const handleClick = () => {
    setCount(count + 1);
    console.log("Count inside handleClick:", count);
  };

  console.log("Count outside handleClick:", count);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
