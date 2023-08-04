import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display-box">
        <input type="text" value={result} disabled />
      </div>
      <div className="buttons-container">
        {[
          [7, 8, 9, '/'],
          [4, 5, 6, '*'],
          [1, 2, 3, '-'],
          [0, '.', '+', '='],
        ].map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((buttonValue, buttonIndex) => (
              <button
                key={buttonIndex}
                onClick={() => handleButtonClick(buttonValue)}
              >
                {buttonValue}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
