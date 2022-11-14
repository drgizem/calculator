import "./styles.css";
import { useState } from "react";

export default function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");

  const symbols = ["/", "*", "+", "-", "=", "."];
  let num1 = parseFloat(result.substring(0, result.indexOf(operation)));
  let num2 = parseFloat(
    result.substring(result.indexOf(operation) + 1, result.length)
  );

  const updateCalc = (value) => {
    if (symbols.includes(value) && calc === "") {
      return;
    } else if (symbols.includes(value) && symbols.includes(result.slice(-1))) {
      return;
    }
    if (!symbols.includes(value)) {
      if (symbols.includes(calc[0])) {
        setCalc(value);
        setResult(result + value);
      } else {
        setCalc(calc + value);
        setResult(result + value);
      }
    } else {
      setCalc(value);
      setResult(result + value);
    }
    if (value === symbols[0]) {
      if (operation === "") {
        setCalc(value);
        setResult(result + value);
      } else {
        if (operation === "+") {
          setResult((num1 + num2).toString() + value);
        } else if (operation === "-") {
          setResult((num1 - num2).toString() + value);
        } else if (operation === "*") {
          setResult((num1 * num2).toString() + value);
        } else if (operation === "/") {
          setResult((num1 / num2).toString() + value);
        }
      }
      setOperation("/");
    } else if (value === symbols[1]) {
      if (operation === "") {
        setCalc(value);
        setResult(result + value);
      } else {
        if (operation === "+") {
          setResult((num1 + num2).toString() + value);
        } else if (operation === "-") {
          setResult((num1 - num2).toString() + value);
        } else if (operation === "*") {
          setResult((num1 * num2).toString() + value);
        } else if (operation === "/") {
          setResult((num1 / num2).toString() + value);
        }
      }
      setOperation("*");
    } else if (value === symbols[2]) {
      if (operation === "") {
        setCalc(value);
        setResult(result + value);
      } else {
        if (operation === "+") {
          setResult((num1 + num2).toString() + value);
        } else if (operation === "-") {
          setResult((num1 - num2).toString() + value);
        } else if (operation === "*") {
          setResult((num1 * num2).toString() + value);
        } else if (operation === "/") {
          setResult((num1 / num2).toString() + value);
        }
      }
      setOperation("+");
    } else if (value === symbols[3]) {
      if (operation === "") {
        setCalc(value);
        setResult(result + value);
      } else {
        if (operation === "+") {
          setResult((num1 + num2).toString() + value);
        } else if (operation === "-") {
          setResult((num1 - num2).toString() + value);
        } else if (operation === "*") {
          setResult((num1 * num2).toString() + value);
        } else if (operation === "/") {
          setResult((num1 / num2).toString() + value);
        }
      }
      setOperation("-");
    }
    if (value === "=") {
      if (operation === "+") {
        setResult(result + value + (num1 + num2).toString());
        setCalc((num1 + num2).toString());
      } else if (operation === "-") {
        setResult(result + value + (num1 - num2).toString());
        setCalc((num1 - num2).toString());
      } else if (operation === "*") {
        setResult(result + value + (num1 * num2).toString());
        setCalc((num1 * num2).toString());
      } else if (operation === "/") {
        setResult(result + value + (num1 / num2).toString());
        setCalc((num1 / num2).toString());
      }
    }
    if (value === ".") {
      setCalc(calc + value);
      setResult(result + value);
    }
  };
  const clear = () => {
    setCalc("");
    setResult("");
    setOperation("");
  };

  return (
    <>
      <div className="container">
        <div className="dark">
          <div className="firstline">{result}</div>
          <div className="calc">{calc || "0"}</div>
        </div>
        <div className="row">
          <div className="primary">
            <button id="clear" onClick={clear}>
              AC
            </button>
            <div className="p-first">
              <button
                id="seven"
                onClick={(e) => updateCalc(e.target.value.toString())}
                value="7"
              >
                7
              </button>
              <button
                id="eight"
                onClick={(e) => updateCalc(e.target.value.toString())}
                value="8"
              >
                8
              </button>
            </div>
            <div className="p-second">
              <button
                id="four"
                onClick={(e) => updateCalc(e.target.value.toString())}
                value="4"
              >
                4
              </button>
              <button
                id="five"
                onClick={(e) => updateCalc(e.target.value.toString())}
                value="5"
              >
                5
              </button>
            </div>
            <div className="p-third">
              <button
                id="one"
                onClick={(e) => updateCalc(e.target.value.toString())}
                value="1"
              >
                1
              </button>
              <button
                id="two"
                onClick={(e) => updateCalc(e.target.value.toString())}
                value="2"
              >
                2
              </button>
            </div>
            <button
              id="zero"
              onClick={(e) => updateCalc(e.target.value.toString())}
              value="0"
            >
              0
            </button>
          </div>
          <div className="secondary">
            <button id="divide" onClick={() => updateCalc("/")}>
              /
            </button>
            <button
              onClick={(e) => updateCalc(e.target.value.toString())}
              value="9"
              id="nine"
            >
              9
            </button>
            <button
              id="six"
              onClick={(e) => updateCalc(e.target.value.toString())}
              value="6"
            >
              6
            </button>
            <button
              id="three"
              onClick={(e) => updateCalc(e.target.value.toString())}
              value="3"
            >
              3
            </button>
            <button id="decimal" onClick={() => updateCalc(".")}>
              .
            </button>
          </div>
          <div className="ternary">
            <button id="multiply" onClick={() => updateCalc("*")}>
              *
            </button>
            <button id="subtract" onClick={() => updateCalc("-")}>
              -
            </button>
            <button id="add" onClick={() => updateCalc("+")}>
              +
            </button>
            <button id="equals" onClick={() => updateCalc("=")}>
              =
            </button>
          </div>
        </div>
      </div>
      <div className="coder">
        Designed and Coded by <br></br>
        <span>Gizem Akpınar</span>
      </div>
    </>
  );
}
