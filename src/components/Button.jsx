import React from "react";
import "../css/Button.css";

function Button({
  grid,
  isGeneral,
  isMemory,
  isOperator,
  id,
  children,
  funcOnClick,
  memory,
}) {
  //CRITERIA FOR isMemory
  //   const isMemory = (value) => {
  //     return isNaN(value) && value != "." && value != "=" && value != "Ac";
  //   };
  //CRITERIA FOR isGeneral
  //   const isGeneral = (value) => {
  //     return value;
  //   };

  //CRITERIA FOR isOperator
  isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  const gridPosition = (value) => {
    return value;
  };
  const memoryHandler = (memory) => {
    // console.log(memory);
    return console.log(memory);
  };

  // Define conditional classes based on props
  const buttonClasses =
    `container__btn ` +
    `${isMemory ? "btn__m " : ""}` +
    `${isGeneral ? "btn__grey " : ""}` +
    `${isOperator ? "btn__operator " : ""}` +
    `${gridPosition(grid)}`.trimEnd();

  return (
    <button
      className={buttonClasses}
      id={id}
      onClick={() => (memory ? memoryHandler(memory) : funcOnClick(children))}
    >
      {children}
    </button>
  );
}

export default Button;

//CONDITIONAL RENDER (example)
// if (esOperador(props.children)) {
//     return(
//         <div
//         className={'boton__contenedor operador'}
//         onClick={ () => props.manejarClick(props.children)}>
//             {props.children}
//         </div>
//     );
// } else{
//     return (
//     <div
//         className={'boton__contenedor'}
//         onClick={ () => props.manejarClick(props.children)}>
//             {props.children}
//         </div>
//     )
// }
