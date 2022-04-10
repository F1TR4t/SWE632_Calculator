import {useState, useEffect} from 'react';
import { Tooltip } from '@mui/material';

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
    const [result, setResult] = useState("");
    
    const ops = ['/', '*', '+', '-', '.'];
    
    const updateCalc = value => {

        if ( value === '.' && 
            ( calc === '' || ops.includes(calc.slice(-1)) )
        ) {
            setCalc(calc+"0"+value);
        }

        if(
            (ops.includes(value) && calc === '') ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
        ){
            return;
        }
        setCalc(calc+value);
        
        if(!ops.includes(value)){
            setResult(eval(calc+value).toString());
        }
    }

    const clrCalc = () => {
        setResult('0');
        setCalc('');
    }
    
    const createDigits = () => {
        const digits = [];
        for(let i=1; i<10; i++){
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
        if (calc== ''){
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

            <div className="digits">
                {createDigits()}
                <button onClick={() => updateCalc('0')} >0</button>
                <Tooltip title="Place a decimal" arrow>
                    <button onClick={() => updateCalc('.')} >.</button>
                </Tooltip>
                <Tooltip title="Calculate equation" arrow>
                    <button onClick={calculate}>=</button>
                </Tooltip>
            </div>
            </div>
        </div>
    </div>
    );
}

export default Calculator;
