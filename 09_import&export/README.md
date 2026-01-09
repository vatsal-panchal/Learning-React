#  React Import & Export – Complete Notes (Simple English)

In React, **import** and **export** are used to **share components, functions, variables, and files** between different files.

If you want to use something from another file, you must:
1. **export** it from that file
2. **import** it where you want to use it

---

# 1️⃣ Default Export

Used when a file exports **only one main thing** (mostly a component).

## Example: Export

```jsx
function Header() {
  return <h1>Hello</h1>;
}

export default Header;
```

## Import

```jsx
import Header from "./Header";
```

### Important Points
- You can give **any name** while importing  
- No `{ }` required  
- Only **one default export per file**

---

# 2️⃣ Named Export

Used when you want to export **multiple things** from the same file.

## Example: Export

```jsx
export const name = "Vatsal";
export const age = 21;
```

## Import

```jsx
import { name, age } from "./data";
```

### Important Points
- Must use **same names**
- Must use **curly braces `{ }`**
- You can export **many things** from one file

---

# 3️⃣ Exporting a Component (Named)

## Export

```jsx
export function Footer() {
  return <h1>Footer</h1>;
}
```

## Import

```jsx
import { Footer } from "./Footer";
```

---

# 4️⃣ Default vs Named Export

## Default Export
```jsx
export default App;
```

```jsx
import App from "./App";
```

## Named Export
```jsx
export const App = () => {};
```

```jsx
import { App } from "./App";
```

---

# 5️⃣ Importing React and Hooks

## Importing React

```jsx
import React from "react";
```

## Importing Hooks (useState, useEffect, etc.)

```jsx
import { useState } from "react";
```

```jsx
import { useEffect } from "react";
```

```jsx
import { useState, useEffect } from "react";
```

---

# 6️⃣ Importing CSS Files

```jsx
import "./App.css";
```

This connects the CSS file to your component.

---

# 7️⃣ Importing Images

```jsx
import logo from "./assets/react.svg";
```

```jsx
<img src={logo} alt="React Logo" />
```

---

# 8️⃣ Importing Components from Folders

If your file structure is:

```
src/
 └── components/
     └── Card.jsx
```

## Import

```jsx
import Card from "./components/Card";
```

---

# 9️⃣ Exporting and Importing Multiple Things

## Export (data.js)

```jsx
export const name = "Vatsal";
export const city = "Surat";
export const age = 21;
```

## Import

```jsx
import { name, city, age } from "./data";
```

---

# 🔁 10️⃣ Renaming While Importing

You can change the name while importing:

```jsx
import { name as username } from "./data";
```

Now use:
```jsx
{username}
```

---

# 📦 11️⃣ Export at Bottom of File

```jsx
const Header = () => {
  return <h1>Hello</h1>;
};

export default Header;
```

---

# 🧪 12️⃣ Example Project Structure

```
src/
 ├── App.jsx
 └── components/
     ├── Header.jsx
     └── Footer.jsx
```

## Header.jsx

```jsx
const Header = () => {
  return <h1>Header</h1>;
};

export default Header;
```

## Footer.jsx

```jsx
export const Footer = () => {
  return <h1>Footer</h1>;
};
```

## App.jsx

```jsx
import React from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
```

---

# ⚠️ 13️⃣ Common Mistakes

❌ Forgetting `{ }` for named imports  
```jsx
import name from "./data";   // wrong
```

✅ Correct:
```jsx
import { name } from "./data";
```

---

❌ Wrong file path  
```jsx
import Header from "Header";
```

✅ Correct:
```jsx
import Header from "./Header";
```

---

# 📝 Final Summary

- **export** → makes something available to other files  
- **import** → brings it into another file  
- **default export** → one main thing, no `{ }`  
- **named export** → multiple things, must use `{ }`  
- Hooks are imported using `{ }`  
- CSS, images, and components are also imported the same way  

> **Import = use something**  
> **Export = share something**
