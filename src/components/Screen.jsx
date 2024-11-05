import React from "react";
import "../css/Button.css";

const Screen = ({ input }) => (
 <div className="grid__result" id='input_result'>
    { input }
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