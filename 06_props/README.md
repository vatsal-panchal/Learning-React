# 1️⃣ What are Props?

Props = **data sent from a Parent component to a Child component.**

---

# 2️⃣ Why do we use Props?

- To make components **reusable**
- To keep the UI **dynamic**
- To use the **same component with different data**

Without props, a component shows the same output everywhere and becomes useless.

---

# 3️⃣ Props Data Flow

In React, data flows **only from top to bottom**:

```
Parent → Child
```

This is called **one-way data flow**.

---

# 4️⃣ Props Rule

**Props are read-only.**

The child component **cannot change props**.  
It can only **use** them.

This rule (immutability) makes React predictable.

---

# 5️⃣ How does Parent send Props?

```jsx
<UserCard name="Vatsal" age={21} />
```

---

# 6️⃣ How does Child receive Props?

### Method 1 — Normal

```jsx
function UserCard(props) {
  return <h1>{props.name}</h1>;
}
```

### Method 2 — Clean (Preferred)

```jsx
function UserCard({ name, age }) {
  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
    </>
  );
}
```

---

# 7️⃣ What can be passed in Props?

Everything:

- string
- number
- boolean
- array
- object
- functions
- components
- JSX

Example:

```jsx
<Card
  title="Laptop"
  price={50000}
  data={{ model: "HP", stock: true }}
  onBuy={handleBuy}
/>
```

---

# 8️⃣ When should you use Props?

- When you want a **dynamic UI**
- When one component should work with **different values**
- When data is in the parent and needed in the child
- When building **reusable UI** (cards, buttons, navbars, product items, etc.)

---

# 📁 PROJECT 1

## App.jsx (Parent Component)

The parent is sending data of 3 users using props.

```jsx
import React from "react";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="p-10 flex gap-6">
      <UserCard name="Vatsal" age={21} city="Surat" />
      <UserCard name="Aryan" age={19} city="Delhi" />
      <UserCard name="Mehul" age={25} city="Mumbai" />
    </div>
  );
};

export default App;
```

---

## UserCard.jsx (Child Component)

The child receives props and shows them in the UI.

```jsx
const UserCard = ({ name, age, city }) => {
  return (
    <div className="w-60 p-5 rounded-md bg-zinc-800 text-white shadow-lg">
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm opacity-80">Age: {age}</p>
      <p className="text-sm opacity-80">City: {city}</p>
    </div>
  );
};

export default UserCard;
```

---

## PROJECT EXPLANATION

### 1️⃣ App is the Parent

- It sends data of three different users  
- The same component is used again and again → **reusable**  
- Only prop values change  

---

### 2️⃣ UserCard is the Child

- It reads `name`, `age`, and `city` from props  
- Displays them in the UI  
- Does not modify anything (read-only rule)  

---

### 3️⃣ Real Power of Props

- One component → many different data  
- No duplication  
- Clean UI  
- Reusable structure  

---

# 📁 PROJECT 2 (Using Array + map)

## App.jsx (Parent)

```jsx
import React from "react";
import Card from "./components/Card";

const App = () => {
  const arr = [
    {
      name: "Vatsal",
      city: "Ahmedabad",
      img: "https://images.unsplash.com/photo-1539667468225-eebb663053e6?w=600",
    },
    {
      name: "Yash",
      city: "Pune",
      img: "https://images.unsplash.com/photo-1475598322381-f1b499717dda?w=600",
    },
    {
      name: "Rahul",
      city: "Delhi",
      img: "https://plus.unsplash.com/premium_photo-1666896192348-dbd2afd19b07?w=600",
    },
    {
      name: "Manish",
      city: "Surat",
      img: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600",
    },
  ];

  return (
    <div className="parent flex gap-[2vw]">
      {arr.map(function (elem, id) {
        return (
          <Card key={id} name={elem.name} city={elem.city} img={elem.img} />
        );
      })}
    </div>
  );
};

export default App;
```

---

## Card.jsx (Child)

```jsx
import React from "react";

const Card = (props) => {
  return (
    <div className="max-w-sm bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-100">
      <img src={props.img} alt="Profile" className="h-48 w-full object-cover" />

      <div className="p-5">
        <h2 className="text-xl font-medium text-gray-900">{props.name}</h2>
        <p className="text-gray-500 text-sm mt-1">City: {props.city}</p>

        <button className="mt-4 w-full bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-lg text-sm font-medium transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Card;
```

---

# 📁 DIRECT PROPS USAGE (WITHOUT ARRAY)

```jsx
<Card
  name="Vatsal"
  age={21}
  text="I am Vatsal"
  photo="https://plus.unsplash.com/premium_photo-1673643405538-de0f82933fcb?w=600"
/>

<Card
  name="Yash"
  age={20}
  text="I am Yash"
  photo="https://images.unsplash.com/photo-1539667468225-eebb663053e6?w=600"
/>

<Card
  name="Rahul"
  age={11}
  text="I am Rahul"
  photo="https://plus.unsplash.com/premium_photo-1700143162587-5c09d6e3eece?w=600"
/>

<Card
  name="Ishuu"
  age={81}
  text="I am Ishuu"
  photo="https://images.unsplash.com/photo-1546587348-d12660c30c50?w=600"
/>
```

---

## Card Component (Destructuring Props)

```jsx
const Card = ({ name, age, text, photo }) => {
  return (
    <div className="card">
      <img src={photo} alt="nature" />

      <h2>{name} {age}</h2>
      <p>{text}</p>
    </div>
  );
};
```

---