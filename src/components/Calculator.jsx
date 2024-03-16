import React, { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const addition = () => {
        setResult(Number(num1) + Number(num2))
    };

    const subtraction = () => {
        setResult(Number(num1) - Number(num2))
    };

    const multiplication = () => {
        setResult(Number(num1) * Number(num2))
    };

    const division = () => {
        setResult(Number(num1) / Number(num2))
    };

    return (
        <div className='envoltura'>
            <input type="number" 
            value={num1}
            onChange={(event) => setNum1(event.target.value)}
            />
            <input 
            type="number" 
            value={num2} 
            onChange={(event) => setNum2(event.target.value)} 
            />
            <button onClick={addition}>Add</button>
            <button onClick={subtraction}>Subtract</button>
            <button onClick={multiplication}>Multiply</button>
            <button onClick={division}>Divide</button>
            <p>Result: {result}</p>
        </div>
    );
};

export default Calculator;