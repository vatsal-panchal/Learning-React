import React, { useState } from "react";
const App = () => {


  const [count, setcount] = useState(0)
  return (
    <div>
      <h1>counter App</h1>
      <p>count : {count}</p>

      <div className="btn">
        <button onClick={()=>setcount(count+1)}>increment</button>
        <button onClick={()=>setcount(count-1)}>decrement</button>
        <button onClick={()=>setcount(0)}>reset</button>
      </div>
    </div>
  );
};

export default App;
