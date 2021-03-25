import './Calculator.css';
import React, { useState } from 'react';
import Result from '../result/Result';
import ButtonDisplay from '../buttonDisplay/ButtonDisplay';


const Calculator = () => {
    const [result, setResult] = useState("");

    function onClick(button) {
        console.log(button);
        if(button === "=") {
            calculate();
        } 
        else if(button === "C") {
            reset();
        }
        else if(button === "CE") {
            backspace();
        }
        else {
            setResult(result + button);
        }
    }

    function calculate() {
       let checkResult = '';
       if(result.includes('--')) {
            checkResult = result.replace('--','+')
       } 
       else {
            checkResult = result;
       }

       try {
           setResult(eval(checkResult) || "");
       } catch(e) {
           setResult("error");
       }
    }

    function reset() {
        setResult("");
    }

    function backspace() {
        setResult(result.slice(0, -1));
    }

    return (
        <div className="container">
            <Result result={result}/>
            <ButtonDisplay onClick={onClick}/>
        </div>
    );
}

export default Calculator;