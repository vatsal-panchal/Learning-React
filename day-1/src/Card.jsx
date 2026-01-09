import React from "react";

const Card = ({ name, age, city }) => {
  return (
    <div>
      <h1>name : {name}</h1>
      <h1>age : {age}</h1>
      <h1>city : {city}</h1>
    </div>
  );
};

export default Card;
