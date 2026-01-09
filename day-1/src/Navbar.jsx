import React from "react";
import navdata from "./data";
const Navbar = () => {
  return (
    <div>
      <h1>
        {navdata.map((navitems, idx) => {
          return <li key={idx}>{navdata.name}</li>;
        })}
      </h1>
    </div>
  );
};

export default Navbar;
