import React, { useState, useEffect } from 'react';
var currIndex = 0;
var maxIndex = 0;

const Scientific = () => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = value => {
        if (
            (ops.includes(value) && calc === '') ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
        ) {
            return;
        }
        setCalc(calc.substring(0, currIndex) + value + calc.substring(currIndex));


        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
        currIndex += 1;
        maxIndex += 1;
    }

    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key={i}>
                    {i}
                </button>
            )
        }
        return digits;
    }

    const calculate = () => {
        setCalc(eval(calc).toString())
    }

    const deleteLast = () => {
        if (calc == '') {
            return;
        }

        const value = calc.slice(0, -1);
        setCalc(value);
        currIndex -= 1;
        maxIndex -= 1;
    }

    console.log("calc is " + calc);
    console.log("current index is " + currIndex);
    console.log("max index is " + maxIndex);

    return (
        <div className="App">
            <div className="calculator">
                <div className="display">
                    {result ? <span>({result})</span> : ''}&nbsp;
                    {calc || "0"}
                </div>
               
                

                <div className="operators">
                    <button onClick={() => updateCalc('/')} >/</button>
                    <button onClick={() => updateCalc('*')} >*</button>
                    <button onClick={() => updateCalc('+')} >+</button>
                    <button onClick={() => updateCalc('-')} >-</button>

                    <button onClick={deleteLast}>del</button>

                    
                </div>

                <div className="functions">
                    <button >cos</button>
                    <button >sin</button>
                    <button >tan</button>
                    <button >
                        <text>x</text>
                        <text><sup>y</sup></text>
                    </button>
                    <button >log
                        <sub>x</sub>
                        y
                    </button>
                    <button >
                        <sup>x</sup>
                        {"\u221A"}y
                    </button>
                </div>


                <div className="digits">
                    {createDigits()}
                    <button onClick={() => updateCalc('0')} >0</button>
                    <button onClick={() => updateCalc('.')} >.</button>

                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Scientific