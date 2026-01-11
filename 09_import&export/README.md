#  React Export Methods (Simple & Clear)

In React (and JavaScript), there are **two ways to export** things from a file:

1. **Default Export**
2. **Named Export**

You always:
- **export** in one file
- **import** in another file

---

# 1️⃣ Default Export

### When to use:
Use **default export** when a file has **only one main thing** (usually one component).

---

## ✅ How to Export (Default)

```jsx
function Header() {
  return <h1>Hello</h1>;
}

export default Header;
```

---

## ✅ How to Import (Default)

```jsx
import Header from "./Header";
```

---

## 📌 Rules of Default Export

- Only **one default export per file**
- **No curly braces `{ }`** while importing
- You can **rename** it while importing

### Example (Renaming)

```jsx
import MyHeader from "./Header";
```

This is still correct.

---

# 2️⃣ Named Export

### When to use:
Use **named export** when you want to export **more than one thing** from the same file.

---

## ✅ How to Export (Named)

```jsx
export const name = "Vatsal";
export const age = 21;
```

---

## ✅ How to Import (Named)

```jsx
import { name, age } from "./data";
```

---

## 📌 Rules of Named Export

- You can export **multiple items**
- You **must use `{ }`** while importing
- The **names must be exactly the same**

---

# 3️⃣ Named Export with Components

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

# 4️⃣ Default vs Named Export (Side-by-Side)

## 🔹 Default Export

```jsx
// App.jsx
const App = () => {
  return <h1>App</h1>;
};

export default App;
```

```jsx
// main.jsx
import App from "./App";
```

### Rules:
- Only **one per file**
- No `{ }`
- Can **rename** while importing

---

## 🔹 Named Export

```jsx
// App.jsx
export const App = () => {
  return <h1>App</h1>;
};
```

```jsx
// main.jsx
import { App } from "./App";
```

### Rules:
- **Multiple allowed**
- Must use `{ }`
- Name must be **same**

---

# 5️⃣ Exporting Multiple Items (Named)

## Export

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

# 6️⃣ Renaming in Named Import

You can rename while importing using `as`:

```jsx
import { name as username } from "./data";
```

Now use:
```jsx
{username}
```

---

# 7️⃣ Common Mistakes

❌ Wrong (using default import for named export)

```jsx
import name from "./data";
```

✅ Correct:
```jsx
import { name } from "./data";
```

---

❌ Wrong (missing `{ }`)

```jsx
import age from "./data";
```

✅ Correct:
```jsx
import { age } from "./data";
```

---

# 📝 Final Summary

### Default Export
- Use when there is **one main thing**
- Only **one per file**
- Import **without `{ }`**
- Can rename while importing

### Named Export
- Use when exporting **multiple things**
- Use **`{ }` while importing**
- Names must **match exactly**
- Can rename using `as`

---

## 🧠 Easy Line to Remember

**Default Export = One main thing**  
**Named Export = Many things**
