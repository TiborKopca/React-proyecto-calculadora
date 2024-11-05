import logoTK from "./img/svg/TKlogo.svg";
import logoApp from "./img/svg/deus-ex-machina.svg";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="logo-container">
        <img src={logoTK} className="logo" alt="logo Tibor Kopca" />
        <img src={logoApp} className="logo" alt="logo Deus Ex Machina" />
      </div>
      <main className="main__container">
        <h1>Deus - Ex Machina Calculator</h1>

        <div class="grid__container" id="container">
          <Button isMemory grid="grid-mc" id="btnMc">
            Mc
          </Button>
          <Button isMemory grid="grid-mplus" id="btnMplus">
            M+
          </Button>
          <Button isMemory grid="grid-ac" id="btnAC">
            AC
          </Button>

          <Button isGeneral grid="grid-1" id="btn1">
            1
          </Button>
          <Button isGeneral grid="grid-2" id="btn2">
            2
          </Button>
          <Button isGeneral grid="grid-3" id="btn3">
            3
          </Button>
          <Button isGeneral grid="grid-4" id="btn4">
            4
          </Button>
          <Button isGeneral grid="grid-5" id="btn5">
            5
          </Button>
          <Button isGeneral grid="grid-6" id="btn6">
            6
          </Button>
          <Button isGeneral grid="grid-7" id="btn7">
            7
          </Button>
          <Button isGeneral grid="grid-8" id="btn8">
            8
          </Button>
          <Button isGeneral grid="grid-9" id="btn9">
            9
          </Button>
          <Button isGeneral grid="grid-0" id="btn0">
            0
          </Button>
          <Button isGeneral grid='grid-decimal' id="btnDecimal">
            .
          </Button>


          <Button isOperator grid="grid-percent" id="btnPercent">
            %
          </Button>
          <Button isOperator grid="grid-subtract" id="btnSubtract">
            -
          </Button>
          <Button isOperator grid="grid-divide" id="btnDivide">
            /
          </Button>
          <Button isOperator grid="grid-add" id="btnAdd">
            +
          </Button>
          <Button isOperator grid="grid-multiply" id="btnMultiply">
            x
          </Button>
          <Button isOperator
            grid='grid-equals'
            id="btnEquals"
          >
            =
          </Button>
          <Screen />




        </div>
      </main>
    </div>
  );
}

export default App;
