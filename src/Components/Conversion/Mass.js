import React, { useState } from 'react';

//This component for conversion can be reused/expanded for other measurements
//Currently do not know how to route between two components.

  const Mass = () =>{
    //the unit types are represented by these. Intial units set.
    // The value is change on selection below
    const [values1, setValues1] = useState('Feet');
    const [values2, setValues2] = useState('Meters');
    //The representation of the output value
    const[inValue, setInValue] = useState();

    //conversion occurs by conditionals
    //check first/top measurement, then select conversion based on second
    //setInValue sets the result which automatically appears in the bottom textbox
    const lengthConvert = (i) =>{
       if(values1 === "Feet"){
           if(values2 === "Meters"){
               const result = i * 0.3048;
               const result1 = result.toFixed(2);
               setInValue(result1);
           }else if(values2 === "Feet"){
               setInValue(i);
           }
       }else if(values1 === "Meters"){
           if(values2 === "Feet"){
               const result = i * 3.2808399;
               const result1 = result.toFixed(2);
               setInValue(result1);
           }else if(values2 === "Meters"){
               setInValue(i);
           }
       }
    }
    //render/html for Length Conversion
    //Two Dropdown boxes to pick measurement types
    // An input text field to enter a number (top).
    // An input text field that outputs converted result (readonly/noneditable)
    return (
        <><h2>Mass Conversion</h2>
        <p>Change units then enter a number.</p>
            
            <div className="container">
                <form>
                    <input type="text" id = "initial length" type='number' onChange={e => lengthConvert(e.target.value)}/>
                    <select id = "lengthType1" onChange={e => setValues1(e.target.value)}>
                        <option value="Feet">Feet</option>
                        <option value ="Meters">Meters</option>
                    </select>
                </form>   
            </div>

            <p> &nbsp; to &nbsp; </p>

            <div>
                <input type = "text" value={inValue} readonly = "readonly"/>
                <select id = "lengthType2" onChange={e => setValues2(e.target.value)}>
                    <option value ="Meters">Meters</option>
                    <option value="Feet">Feet</option>
                </select>
            </div>
            </>

    );
}

export default Mass;