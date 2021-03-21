import React, { useState } from 'react';
import Result from '../result/Result';
import NumbersButton from '../numbers/NumbersButton';
import Operators from '../operators/Operators';
import ButtonDisplay from '../buttonDisplay/ButtonDisplay';

const Calculator = () => {
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(0);

    function onClick(e) {
        console.log(e);
    }

    return (
        <div>
            <h1>Calculator</h1>
            <Result result={result}/>
            <NumbersButton/>
            <Operators/>
            <ButtonDisplay onClick={onClick}/>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click me!</button>
            <button onClick={() => setCount(0)}>Clear</button>
        </div>
    );
}

export default Calculator;