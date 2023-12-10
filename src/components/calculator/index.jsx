import { useState } from "react";
import { Button } from "./components/button";
import { CountInput } from "./components/inputs";
export const Counter = () => {
  const [inputValue1, setInputValue1] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);
  const [result, setResult] = useState();
  const incrementValue = () => {
    setResult(inputValue1 + inputValue2);
  };
  const decrementValue = () => {
    setResult(inputValue1 - inputValue2);
  };
  const multiplicationValue = () => {
    setResult(inputValue1 * inputValue2);
  };
  const divisionValue = () => {
    setResult(inputValue1 / inputValue2);
  };
  const powerValue = () => {
    setResult(inputValue1 ** inputValue2);
  };
  const handleInputChange1 = (event) => {
    const newValue = parseFloat(event.target.value);

    if (!isNaN(newValue)) {
      setInputValue1(newValue);
    }
  };

  const handleInputChange2 = (event) => {
    const newValue = parseFloat(event.target.value);

    if (!isNaN(newValue)) {
      setInputValue2(newValue);
    }
  };
  return (
    <>
      <div>
        <CountInput
          onInputChange1={handleInputChange1}
          onInputChange2={handleInputChange2}
        />
        <Button sign="+" handleButtonClick={incrementValue} />
        <Button sign="-" handleButtonClick={decrementValue} />
        <Button sign="*" handleButtonClick={multiplicationValue} />
        <Button sign="/" handleButtonClick={divisionValue} />
        <Button sign="^" handleButtonClick={powerValue} />
        <h1>Результат: {result}</h1>
      </div>
    </>
  );
};
