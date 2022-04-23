import {useState, useEffect} from 'react';
import { Tooltip } from '@mui/material';
import { borderRadius } from '@mui/system';

const Calculator = () =>{
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
    
    const updateCalc = value => {

        if ( value === '.' && 
            ( calc === '' || ops.includes(calc.slice(-1)) )
        ) {
            setCalc(calc+"0"+value);
        }

        if ( value === '-' && 
            ( calc === '' || ops.includes(calc.slice(-1)) )
        ) {
            setCalc(calc+value);
        }

        if(
            (ops.includes(value) && calc === '') ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
        ){
            return;
        }
        setCalc(calc+value);
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
    
    const calculate = () => {
        try {
            setLastStep(calc);
            setCalc(eval(calc).toString());
        } catch (error) {
            setCalc('Error')
        }
    }
    
    const deleteLast = () => {
        if (calc === ''){
            return;
        }
        
        const value = calc.slice(0,-1);
        setCalc(value);
    }
    
    return (

    <div align="center">
        <h1>Simple Calculator</h1>
        <div className="App1">
            <div className="calculator">
                <div className="display">
                    {calc || "0"}
                </div>
                <div className='calculator1-buttons'>
                    <div className='clear'>
                        <Tooltip title="Clear calculator" arrow>
                            <button onClick={clrCalc}>clear</button>
                        </Tooltip>
                    </div>
                    <div className='digits'>
                        <Tooltip title="Opening Parenthesis" arrow>
                            <button onClick={() => updateCalc('(')} >(</button>
                        </Tooltip>
                    </div>
                    <div className='digits'>
                        <Tooltip title="Closing Parenthesis" arrow>
                            <button onClick={() => updateCalc(')')} >)</button>
                        </Tooltip>
                    </div>
                    <div className='operators'>
                        <Tooltip title="Division opeartor; WARNING: Do not divide by 0" arrow>
                            <button onClick={() => updateCalc('/')} >/</button>
                        </Tooltip>
                    </div>
                    <div className="digits">
                        <button onClick={() => updateCalc('1')} >1</button>
                    </div>
                    <div className="digits">
                        <button onClick={() => updateCalc('2')} >2</button>
                    </div>
                    <div className="digits">
                        <button onClick={() => updateCalc('3')} >3</button>
                    </div>
                    <div className='operators'>
                        <Tooltip title="Multiplication operator" arrow>
                            <button onClick={() => updateCalc('*')} >*</button>
                        </Tooltip>
                    </div>
                    <div className="digits">
                        <button onClick={() => updateCalc('4')} >4</button>
                    </div>
                    <div className="digits">
                        <button onClick={() => updateCalc('5')} >5</button>
                    </div>
                    <div className="digits">
                        <button onClick={() => updateCalc('6')} >6</button>
                    </div>
                    <div className='operators'>
                        <Tooltip title="Subtraction and negation operator; Add before a number to negate" arrow>
                            <button onClick={() => updateCalc('-')} >-</button>
                        </Tooltip>
                    </div>
                    <div className="digits">
                        <button onClick={() => updateCalc('7')} >7</button>
                    </div>
                    <div className="digits">
                        <button onClick={() => updateCalc('8')} >8</button>
                    </div>
                    <div className="digits">
                        <button onClick={() => updateCalc('9')} >9</button>
                    </div>
                    <div className='operators'>
                        <Tooltip title="Addition operator" arrow>
                            <button onClick={() => updateCalc('+')} >+</button>
                        </Tooltip>
                    </div>
                    <div className="digits">
                        <Tooltip title="Delete last character" arrow>
                            <button onClick={deleteLast}>del</button>
                        </Tooltip>
                    </div>
                    <div className="digits">
                        <button onClick={() => updateCalc('0')} >0</button>
                    </div>
                    <div className="digits">
                        <Tooltip title="Place a decimal" arrow>
                            <button onClick={() => updateCalc('.')} >.</button>
                        </Tooltip>
                    </div>
                    <div className="equal">
                        <Tooltip title="Calculate equation" arrow>
                            <button onClick={calculate}>=</button>
                        </Tooltip>
                    </div>
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

export default Calculator;
