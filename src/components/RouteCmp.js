import React from "react";
import {Link} from "react-router-dom";

export const RouteCmp = () => {
  return (
    <div>
      {" "}
      <ul className="App-header">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/contact">Contact Us</Link>
        </li>
        <li>
        <Link to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
};
