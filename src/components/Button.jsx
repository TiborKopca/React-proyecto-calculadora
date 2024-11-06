import React from "react";
import "../css/Button.css";

function Button({ grid, isGeneral, isMemory, isOperator, id, children, funcOnClick }) {
  //CRITERIA FOR isMemory
  //   const isMemory = (value) => {
  //     return isNaN(value) && value != "." && value != "=" && value != "Ac";
  //   };
  //CRITERIA FOR isGeneral
  //   const isGeneral = (value) => {
  //     return value;
  //   };
  //CRITERIA FOR isOperator
  //   const isOperator = (value) => {
  //     return value;
  //   };

  const gridPosition = (value) => {
    return value;
  }
  // Define conditional classes based on props
  const buttonClasses = 
  `container__btn `
  +`${isMemory ? "btn__m " : ""}`
  +`${isGeneral ? "btn__grey " : ""}`
  +`${isOperator ? "btn__operator " : ""}`
  +`${gridPosition(grid)}`.trimEnd();

  return    <button 
                className={buttonClasses} 
                id={id}
                onClick={() => funcOnClick(children)}
                >
                {children}
            </button>;
}

export default Button;
