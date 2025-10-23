import CalculatorCard from "./components/calculatorCard";
import { useState } from "react";

function App() {
  const [curValue, setCurValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [currentMethod, setCurrentMethod] = useState(null);
  const [justComputed, setJustComputed] = useState(false);
  const [expression, setExpression] = useState("");

  const computeResult = (prevValue, currentValue, method) => {
    const prev = parseFloat(prevValue);
    const current = parseFloat(currentValue);
    if (isNaN(prev) || isNaN(current)) return "0";


    const methods = {
      '+': String(prev + current)
      ,'-': String(prev + current)
      ,'*': String(prev + current)
      ,'/' : String(prev + current)
    }

    method.map((methods, index))
    {
      
    }

    switch (method) {
      case '+':
        return String(prev + current);
      case '-':
        return String(prev - current);
      case '*':
        return String(prev * current);
      case '/':
        return current === 0 ? "Error" : String(prev / current);
      default:
        return "0";
    }
  };

  const handleNumberClick = (number) => {
    if (justComputed) {
      setCurValue(String(number));
      setExpression(String(number));
      setJustComputed(false);
    } else {
      const newValue = curValue === "0" ? String(number) : curValue + String(number);
      setCurValue(newValue);
      setExpression(expression + String(number));
    }
  };

  const handleMethodClick = (method) => {
    if (isNaN(parseFloat(expression.slice(-1)))) {
      if (expression.slice(-1) !== method) {
        setExpression(expression.slice(0, -1) + method);
        setCurrentMethod(method);
      }
      return;
    }
    if (previousValue && currentMethod && !justComputed) {

      const computed = computeResult(previousValue, curValue, currentMethod);
      setPreviousValue(computed);
      setCurValue("0");
      setExpression(expression + method);
    } else {
      setPreviousValue(curValue);
      setCurValue("0");
      setExpression(expression + method);
    }
    setCurrentMethod(method);
    setJustComputed(false);
  };


  const handleEqualClick = () => {
    if (currentMethod && previousValue !== null) {
      const computed = computeResult(previousValue, curValue, currentMethod);
      setCurValue(computed);
      // Keep the expression as the full operation
      setExpression(`${computed}`);
      setPreviousValue(null);
      setCurrentMethod(null);
      setJustComputed(true);
    }
  };


  const handleClearClick = () => {
    setCurValue("0");
    setPreviousValue(null);
    setCurrentMethod(null);
    setExpression("");
    setJustComputed(false);
  };

  return (
    <CalculatorCard
      curValue={curValue}
      expression={expression}
      onNumberClick={handleNumberClick}
      onMethodClick={handleMethodClick}
      onEqualClick={handleEqualClick}
      onClearClick={handleClearClick}
    />
  );
}

export default App;