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
        console.log("calculate");
    }

    function reset() {
        setResult("");
    }

    function backspace() {
        setResult(result.slice(0, -1));
    }

    return (
        <div>
            <h1>Calculator</h1>
            <Result result={result}/>
            <ButtonDisplay onClick={onClick}/>
        </div>
    );
}

export default Calculator;