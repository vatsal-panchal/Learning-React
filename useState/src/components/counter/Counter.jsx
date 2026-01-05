import React, { useState } from "react";
import "../counter/Counter.css";

const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <div className="counter">
      <h1>{count}</h1>

      <div className="btn">
        <button onClick={() => setcount(count + 1)}>+</button>
        <button onClick={() => setcount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;
