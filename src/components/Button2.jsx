import React from "react";
import "./Button2.css";

const Button2 = ({ styles }) => (
  <a href="https://tinyurl.com/employeesAI" target="_blank" rel="noopener noreferrer">
    <button
      type="button"
      className={`button-glow py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles} `}
    >
      Get Started
    </button>
  </a>
);

export default Button2;
