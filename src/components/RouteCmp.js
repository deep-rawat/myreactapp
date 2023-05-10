import React from "react";
import { useNavigate } from "react-router-dom";

export const RouteCmp = () => {
    const navigate = useNavigate();
  return (
    <div>
      {" "}
      <ul className="App-header">
        <li>
          <span
            href=" "
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}>
            Home
          </span>
        </li>
        <li>
          <span
            href=" "
            onClick={(e) => {
              e.preventDefault();
              navigate("/about");
            }}>
            About Us
          </span>
        </li>
        <li>
          <span
            href=" "
            onClick={(e) => {
              e.preventDefault();
              navigate("/contact");
            }}>
            Contact Us
          </span>
        </li>
      </ul>
    </div>
  );
};
