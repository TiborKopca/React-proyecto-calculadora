import React from "react";
import "../css/Screen.css";

const Screen = ({ handleInput }) => (
 <div className="grid__result" id='input_result'>
    { handleInput }
 </div>   
);



// function Screen() {
//   return (
//     <input
//             type="text"
//             name=""
//             class="grid__result"
//             id="input_result"
//             value=""
//             readonly
//             maxlength="13"
//           />
//   )
// }

export default Screen