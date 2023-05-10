import React from "react";
import { useNavigate } from "react-router-dom";

export const RouteCmp = () => {
    const navigate = useNavigate();
  return (
    <div>
      {" "}
      <ul className="App-header">
        <li>
          <a
            href=" "
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}>
            Home
          </a>
        </li>
        <li>
          <a
            href=" "
            onClick={(e) => {
              e.preventDefault();
              navigate("/about");
            }}>
            About Us
          </a>
        </li>
        <li>
          <a
            href=" "
            onClick={(e) => {
              e.preventDefault();
              navigate("/contact");
            }}>
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};
