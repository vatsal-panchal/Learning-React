# ⚡ Virtual DOM

## ❓ What is Virtual DOM?

The Virtual DOM is a **lightweight and fast copy of the real DOM** that React maintains internally.

---

## ⚙️ How does it work?

1. The **state or props of a component change**  
2. React first **updates the Virtual DOM**  
3. React compares the **old Virtual DOM with the new Virtual DOM** (this is called *diffing*)  
4. Only the part that has changed is **updated in the real DOM**  
5. The rest of the DOM remains untouched → that is why rendering is fast  

---

## 📝 Quick Summary

> **Virtual DOM = React’s smart system that updates only the changed parts in the real DOM so that the app runs fast.**
