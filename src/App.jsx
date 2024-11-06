import logoTK from "./img/svg/TKlogo.svg";
import logoApp from "./img/svg/deus-ex-machina.svg";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ButtonClear from "./components/ButtonClear";
import Screen from "./components/Screen";
import Logo from "./components/Logo";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  //SCREEN SIZE CONSTANT
  const SCREEN_SIZE = 10;

  //NUMBER & OPERATOR KEYS HANDLER
  const handleInputValue = (val) => {
    if (input.length < SCREEN_SIZE) {
      const operators = ["-", "+", "/", "*", "%"];
      //IF THE LAST CHAR IS AN OPERATOR AND THE NEW VALUE ALSO IS AN OPERATOR, REPLACE THE LAST
      const lastChar = input[input.length - 1];

      //IF THE LAST CHAR IS AN OPERATOR AND THE NEW VALUE ALSO IS AN OPERATOR, REPLACE THE LAST
      if (operators.includes(lastChar) && operators.includes(val)) {
        //REPLACE THE LAST OPERATOR
        setInput(input.slice(0, -1) + val);
      } else {
        //ADD THE NEW VALUE IF NO REPETITION OF OPERATORS
        setInput(input + val);
      }
    }
  };

  //CALCULATE HANDLER
  //Calculate and display the result, limited to SCREEN_SIZE
  const calculateResult = () => {
    try {
      if (input) {
        const result = evaluate(input).toString();
        setInput(
          result.length > SCREEN_SIZE ? result.slice(0, SCREEN_SIZE) : result
        );
      } else {
        setInput("n/a");
      }
    } catch (error) {
      setInput("Error"); // Show error if expression is invalid
    }
  };

  //CLEAR KEY HANDLER
  const clearHandler = () => {
    setInput("");
  };

  //TODO: IMPLEMENT MEMORY KEYS HANDLER

  return (
    <div className="app">
      <div className="logo-container">
        <Logo src={logoTK} alt="logo Tibor Kopca" />
        <Logo src={logoApp} alt="logo Deus Ex Machina" />
      </div>
      <main className="main__container">
        <h1>Deus - Ex Machina Calculator</h1>

        <div className="grid__container" id="container">
          <Screen handleInput={input} />

          <Button memory={"memory cleared"} isMemory grid="grid-mc" id="btnMc">
            Mc
          </Button>
          <Button
            memory={"memory stored"}
            isMemory
            grid="grid-mplus"
            id="btnMplus"
          >
            M+
          </Button>
          <ButtonClear
            grid="grid-ac"
            id="btnAC"
            handleClear={() => clearHandler()}
          >
            AC
          </ButtonClear>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <Button
              key={num}
              funcOnClick={handleInputValue}
              isGeneral
              grid={`grid-${num}`}
              id={`btn${num}`}
            >
              {num}
            </Button>
          ))}

          <Button
            funcOnClick={handleInputValue}
            isGeneral
            grid="grid-decimal"
            id="btnDecimal"
          >
            .
          </Button>

          <Button
            funcOnClick={handleInputValue}
            isOperator
            grid="grid-percent"
            id="btnPercent"
          >
            %
          </Button>
          <Button
            funcOnClick={handleInputValue}
            isOperator
            grid="grid-subtract"
            id="btnSubtract"
          >
            -
          </Button>
          <Button
            funcOnClick={handleInputValue}
            isOperator
            grid="grid-divide"
            id="btnDivide"
          >
            /
          </Button>
          <Button
            funcOnClick={handleInputValue}
            isOperator
            grid="grid-add"
            id="btnAdd"
          >
            +
          </Button>
          <Button
            funcOnClick={handleInputValue}
            isOperator
            grid="grid-multiply"
            id="btnMultiply"
          >
            *
          </Button>
          <Button
            funcOnClick={calculateResult}
            isOperator
            grid="grid-equals"
            id="btnEquals"
          >
            =
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;
