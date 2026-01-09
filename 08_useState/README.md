# 🔁 React State Variable

In React, when a variable needs to **change dynamically**, we use **state**.

State allows React components to **update the UI automatically** when data changes.

---

## 🧠 What is `useState`?

`useState` is a special React function that makes a variable **dynamic (changeable)**.

It gives you:
- A **state variable**
- A **function to update that variable**

---

## 📌 Example: Counter App

```jsx
import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default App;
```

---

## 🔍 Explanation

- `useState(0)` → creates a state with initial value `0`  
- `count` → the state variable (stores the value)  
- `setCount` → the function used to **update** the value  
- When a button is clicked:
  - `setCount()` changes the value
  - React **re-renders the UI automatically**

---

## 🧪 What happens on Button Click?

- Click `+` → `count` increases by 1  
- Click `-` → `count` decreases by 1  
- The value on the screen updates **without reloading the page**

---

## 📝 Final Summary

- **State** is used for data that **changes over time**
- `useState` makes a variable **dynamic**
- `count` → stores the value  
- `setCount` → updates the value  
- When state changes, **React updates the UI automatically**
