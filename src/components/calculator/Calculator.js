import React, { useState } from 'react';
import Result from '../result/Result';
import NumbersButton from '../numbers/NumbersButton';
import Operators from '../operators/Operators';

const Calculator = () => {
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(0);
    return (
        <div>
            <h1>Calculator</h1>
            <Result result={result}/>
            <NumbersButton/>
            <Operators/>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click me!</button>
            <button onClick={() => setCount(0)}>Clear</button>
        </div>
    );
}

export default Calculator;