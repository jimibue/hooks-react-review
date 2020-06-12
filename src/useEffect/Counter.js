import React, { useState, useEffect } from "react";

export default function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  // will act as componentDidMount and
  // componentWillUnmount
  useEffect(() => {
    console.log("effect called");
    count > 10 && setCount(0);
    count < -10 && setCount(0);

    return () => {
      console.log("count cleanup");
    };
  }, []);

  function add(num) {
    setCount(count + num);
  }
  return (
    <div>
      {count}
      <div onClick={() => add(1)}>+</div>
      <div onClick={() => add(-1)}>-</div>
    </div>
  );
}
