import React from "react";
import "../css/ButtonClear.css";

function ButtonClear({ grid, id, children, handleClear}) {
  return (
    <button className={`container__btn btn__m ${grid}`} id={id} onClick={handleClear}>
      {children}
    </button>
  );
}
// const BotonClear = (props) => (
//   <div
//   className="boton__clear"
//   onClick={props.manejarClear}>
//       {props.children}
//   </div>
// );

export default ButtonClear;
