import React, { useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';

const box = {
    border: '2px solid rgba(0, 0, 0, 1.00)', 
    width: '700px',
    height: '310px',
    background: '#fde6d1',
};


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
    const [lastStep, setLastStep] = useState("N/A");
    

    const ops = ['/', '*', '+', '-', '.'];

    const log = (x, y) => {
        return Math.log2(x) / Math.log2(y);
    }

    const root = (x, y) => {
        if (x < 0) {
            return;
        }

        return Math.pow(x, 1 / y);
    }

    const updateCalc = value => {

        if ( value === '.' && 
            ( calc === '' || ops.includes(calc.slice(-1)) )
        ) {
            setCalc(calc+"0"+value);
        }

        if (
            (ops.includes(value) && calc === '') ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
        ) {
            return;
        }
        setCalc(calc + value);
    }

    const undo = () => {
        if(lastStep!="N/A"){
            setCalc(lastStep);
            setLastStep("N/A");
        }
    }

    const clrCalc = () => {
        setCalc('');
        setLastStep('N/A');
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
        try {
            setLastStep(calc);
            setCalc(eval(calc).toString());
        } catch (error) {
            setCalc("Error")
        }
    }

    const deleteLast = () => {
        if (calc === '') {
            return;
        }

        const value = calc.slice(0, -1);
        setCalc(value);
    }

    console.log("calc is " + calc);
   

    return (
        <div align="center">
            <h1>Scientific Calculator</h1>
            <body style={box}>
                    <h1>Help and documentation</h1>
                    <table border="1px">
                        <tr>
                            <th>Function</th>
                            <th>Calculator Equivalent</th>
                            <th>Example</th>
                        </tr>
                        <tr>
                            <td><b>cos</b></td>
                            <td><b>Math.cos(x)</b> where x is a value inputted in radians.</td>
                            <td>cos(2) -{'>'} Math.cos(2)</td>
                        </tr>
                        <tr>
                            <td><b>sin</b></td>
                            <td><b>Math.sin(x)</b> where x is a value inputted in radians.</td>
                            <td>sin(4) -{'>'} Math.sin(4)</td>
                        </tr>
                        <tr>
                            <td><b>tan</b></td>
                            <td><b>Math.tan(x)</b> where x is a value inputted in radians.</td>
                            <td>tan(5) -{'>'} Math.tan(2)</td>
                        </tr>
                        <tr>
                            <td><b>x<sup>y</sup></b></td>
                            <td><b>Math.pow(x, y)</b>, where x and y inputted values.</td>
                            <td>6<sup>2</sup> -{'>'} Math.pow(6,2)</td>
                        </tr>
                        <tr>
                            <td><b>log<sub>x</sub>y</b></td>
                            <td><b>log(y, x)</b>, where x and y are inputted values.</td>
                            <td>log<sub>2</sub>4 -{'>'} log(4,2)</td>
                        </tr>
                        <tr>
                            <td><b><sup>x</sup>{"\u221A"}y </b></td>
                            <td><b>root(y, x)</b>, where x and y are inputted values.</td>
                            <td><sup>3</sup>{"\u221A"}9 -{'>'} root(9,3)</td>
                        </tr>
                    </table>
                    
                    {/* commented out here is the other version that Josh worked on and thought the table was better than this
                    <b>cos</b> as Math.cos(x) where x is a value inputted in radians.<br/>
                    <b>sin</b> as Math.sin(x) where x is a value inputted in radians.<br/>
                    <b>tan</b> as Math.tan(x) where x is a value inputted in radians.<br/>
                    <b>x<sup>y</sup></b> as Math.pow(x, y), where x and y inputted values.<br/>
                    <b>log<sub>x</sub>y</b> as log(y, x), where x and y are inputted values.<br/>
                    <b><sup>x</sup>{"\u221A"}y </b> as root(y, x), where x and y are inputted values.<br/>
                    */}

                    
            </body>
            <div className="App1">
                <div className="sci_calculator">
                    <div className="display">
                        {calc || "0"}
                    </div>
                
                    

                    <div className="operators">
                    <Tooltip title="Division opeartor; WARNING: Do not divide by 0" arrow>
                        <button onClick={() => updateCalc('/')} >/</button>
                    </Tooltip>
                    <Tooltip title="Multiplication operator" arrow>
                        <button onClick={() => updateCalc('*')} >*</button>
                    </Tooltip>
                    <Tooltip title="Addition operator" arrow>
                        <button onClick={() => updateCalc('+')} >+</button>
                    </Tooltip>
                    <Tooltip title="Subtraction and negation operator; Add before a number to negate" arrow>
                        <button onClick={() => updateCalc('-')} >-</button>
                    </Tooltip>
                    <Tooltip title="Opening Parenthesis" arrow>
                        <button onClick={() => updateCalc('(')} >(</button>
                    </Tooltip>
                    <Tooltip title="Closing Parenthesis" arrow>
                        <button onClick={() => updateCalc(')')} >)</button>
                    </Tooltip>
                    <Tooltip title="Delete last character" arrow>
                        <button onClick={deleteLast}>del</button>
                    </Tooltip>
                    <Tooltip title="Clear calculator" arrow>
                        <button onClick={clrCalc}>clr/esc</button>
                    </Tooltip>

                        
                    </div>

                    <div className="functions">
                        <Tooltip title="Cosine function; Math.cos(x) where x is in radians" arrow>
                            <button onClick={() => updateCalc('Math.cos(')} >cos</button>
                        </Tooltip>
                        <Tooltip title="Sine function; Math.sin(x) where x is in radians" arrow>
                            <button onClick={() => updateCalc('Math.sin(')}>sin</button>
                        </Tooltip>
                        <Tooltip title="Tangent function; Math.tan(x) where x is in radians" arrow>
                            <button onClick={() => updateCalc('Math.tan(')}>tan</button>
                        </Tooltip>
                        <Tooltip title="Exponent function; Math.pow(x, y), where x is the value and y is the exponent" arrow>
                            <button onClick={() => updateCalc('Math.pow(')}>
                                x
                                <sup>y</sup>
                            </button>
                        </Tooltip>
                        <Tooltip title="Lograthmic function; log(y, x), where y is the value and x is the log base" arrow>
                            <button onClick={() => updateCalc('log(')}>log
                                <sub>x</sub>
                                y
                            </button>
                        </Tooltip>
                        <Tooltip title="Root function; root(y, x), where y is the value and x is the root power" arrow>
                            <button onClick={() => updateCalc('root(')}>
                                <sup>x</sup>
                                {"\u221A"}y
                            </button>
                        </Tooltip>
                    </div>


                    <div className="digits">
                        {createDigits()}
                        <Tooltip title="Place a decimal" arrow>
                            <button onClick={() => updateCalc('.')} >.</button>
                        </Tooltip>
                        <button onClick={() => updateCalc('0')} >0</button>

                        <Tooltip title="Calculate equation" arrow>
                            <button onClick={calculate}>=</button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div>
                <h3>Last Entered Calculation:</h3>
                <p>{lastStep}</p>
                <button style={{backgroundColor: "navy", borderRadius: "20%"}} onClick={undo}>Undo Last</button>
            </div>
        </div>
    );
}

export default Scientific
