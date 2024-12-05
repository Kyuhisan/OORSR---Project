import { useState, useEffect } from "react";

// NOVI KVIZ - error
// export const Items = (): JSX.Element => {
//   const [data, setData] = useState<BackendDataType>();
//   const config = {
//     url: "/some/api",
//     query: "",
//   };

//   useEffect(() => {
//     const data = updateBackend(config.url);
//     setData(data);
//   }, [config]); // gledamo config za spremembe

//   return <div>{data?.value}</div>;
// };

// NOVI KVIZ - endless loop
type BackendDataType = { id: number; value: string };

export const Items = (): JSX.Element => {
  const [data, setData] = useState<BackendDataType>();

  const updateBackend = (): boolean => {
    setData({ id: 1, value: "backend response" });
    return true;
  };

  useEffect(() => {
    const data = updateBackend();
    console.log(data);
  }, [updateBackend]);

  return <div>{data?.value}</div>;
};

export const Counter2 = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(new Date().toISOString());
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
  }, []);

  return <div>{counter}</div>;
};

export const CounterWrapper = () => {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <div>
      {showCounter && <Counter2 />}
      <button onClick={() => setShowCounter((prev) => !prev)}>Toggle</button>
    </div>
  );
};
