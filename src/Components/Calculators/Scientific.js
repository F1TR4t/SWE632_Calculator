import React, { useState, useEffect } from 'react';


const Scientific = () => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    

    const ops = ['/', '*', '+', '-', '.'];

    const log = (x, y) => {
        return Math.log2(x) / Math.log2(y);
    }

    const root = (x, y) => {
        if (x < 0) {
            setResult = NaN;
            return;
        }

        return Math.pow(x, 1 / y);
    }

    const updateCalc = value => {
        if (
            (ops.includes(value) && calc === '') ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
        ) {
            return;
        }
        setCalc(calc + value);


        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
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
    }

    console.log("calc is " + calc);
   

    return (
        <div className="App">
            <div className="sci_calculator">
                <div className="display">
                    {result ? <span>({result})</span> : ''}&nbsp;
                    {calc || "0"}
                </div>
               
                

                <div className="operators">
                    <button onClick={() => updateCalc('/')} >/</button>
                    <button onClick={() => updateCalc('*')} >*</button>
                    <button onClick={() => updateCalc('+')} >+</button>
                    <button onClick={() => updateCalc('-')} >-</button>
                    <button onClick={() => updateCalc(",")} >,</button>
                    <button onClick={() => updateCalc('(')} >(</button>
                    <button onClick={() => updateCalc(')')} >)</button>
                    <button onClick={deleteLast}>del</button>

                    
                </div>

                <div className="functions">
                    <button onClick={() => updateCalc('Math.cos(')} >cos</button>
                    <button onClick={() => updateCalc('Math.sin(')}>sin</button>
                    <button onClick={() => updateCalc('Math.tan(')}>tan</button>
                    <button onClick={() => updateCalc('Math.pow(')}>
                        x
                        <sup>y</sup>
                    </button>
                    <button onClick={() => updateCalc('log(')}>log
                        <sub>x</sub>
                        y
                    </button>
                    <button onClick={() => updateCalc('root(')}>
                        <sup>x</sup>
                        {"\u221A"}y
                    </button>
                </div>


                <div className="digits">
                    {createDigits()}
                    <button onClick={() => updateCalc('.')} >.</button>
                    <button onClick={() => updateCalc('0')} >0</button>

                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Scientific