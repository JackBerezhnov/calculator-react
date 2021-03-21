import React, { useState } from 'react';
import Result from '../result/Result';
import ButtonDisplay from '../buttonDisplay/ButtonDisplay';

const Calculator = () => {
    const [result, setResult] = useState(0);

    function onClick(e) {
        console.log(e);
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