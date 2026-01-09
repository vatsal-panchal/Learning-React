## 1️⃣ What is a Component?

In React, a component is a small piece of the UI.

For example:
- A button
- A navbar
- A card
- A footer
- An input box

Breaking a whole page into small parts is called components.

---

## 2️⃣ Why do we use Components?

- You can reuse the same UI again and again
- Code becomes clean, short, and simple
- Each part is in a separate file, so it is easy to manage
- If you change one component, other parts are not affected

This makes the whole app easy to understand and maintain.

---

## 3️⃣ Types of Components

There are two types of components:

1. Functional Components → Mostly used today  
2. Class Components → Old system (ignore)

You only need to learn functional components.

---

## 4️⃣ Basic Format of a Functional Component

```jsx
function Header() {
  return <h1>Hello</h1>;
}

export default Header;
```

This is just like a normal function. It returns HTML-like UI.

---

## 5️⃣ How to Use a Component

1. Import the component  
2. Use it like an HTML tag  

```jsx
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
    </>
  );
}
```

`<Header />` is not an HTML tag. It is the component name.

---

## 6️⃣ Important Rules

Rule 1: Component name must start with a Capital Letter  
Good → Header, Navbar, Footer  
Bad → header, navbar  

Rule 2: A component must return only one parent element  
If you need more than one, use a Fragment:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

Rule 3: Keep each component in a separate file  
Examples: Header.jsx, Footer.jsx, Card.jsx

---

## Final Summary

Component = a small reusable part of the UI.  
React app = a collection of components.
