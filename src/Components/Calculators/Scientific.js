import React, { useState, useEffect } from 'react';


const Scientific = () => {
    const handleKey = (e) => {  
        e.preventDefault();
        if ((e.shiftKey) && e.code === 'Digit8') {
            updateCalc('*');
        }
        else if ((e.shiftKey) && e.code === 'Digit9') {
            updateCalc('(');
        }
        else if ((e.shiftKey) && e.code === 'Digit0') {
            updateCalc(')');
        }
        else if ((e.shiftKey) && e.code === 'Equal') {
            updateCalc('+');
        }
        else if (e.code === "Slash" || e.code === "Backslash" || e.code === "NumpadDivide"){
            updateCalc('/');
        }
        else if (e.code === "NumpadAdd"){
            updateCalc('+');
        }
        else if (e.code === "Minus"){
            updateCalc('-');
        }
        else if (e.code === "Backspace"){
            deleteLast();
        }
        else if (e.code === "Period"){
            updateCalc('.');
        }
        else if (e.code === "Escape"){
            clrCalc();
        }
        else if (e.code === "Digit0"){
            updateCalc('0');
        }
        else if (e.code === "Digit1"){
            updateCalc('1');
        }
        else if (e.code === "Digit2"){
            updateCalc('2');
        }
        else if (e.code === "Digit3"){
            updateCalc('3');
        }
        else if (e.code === "Digit4"){
            updateCalc('4');
        }
        else if (e.code === "Digit5"){
            updateCalc('5');
        }
        else if (e.code === "Digit6"){
            updateCalc('6');
        }
        else if (e.code === "Digit7"){
            updateCalc('7');
        }
        else if (e.code === "Digit8"){
            updateCalc('8');
        }
        else if (e.code === "Digit9"){
            updateCalc('9');
        }
        else if (e.code === "Enter" || e.code === "Equal" || e.code === "NumpadEnter" || e.code === "NumpadEqual" ){
            calculate();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKey)

        return () => { document.removeEventListener('keydown', handleKey); };
    })

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

    const clrCalc = () => {
        setResult('0');
        setCalc('');
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
        <div align="center">
            <h1>Scientific Calculator</h1>
            <div className="App1">
                <div className="sci_calculator">
                    <div className="display">
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
                        <button onClick={clrCalc}>clr/esc</button>

                        
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
        </div>
    );
}

export default Scientific
