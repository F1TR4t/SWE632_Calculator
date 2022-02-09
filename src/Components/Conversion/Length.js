import React, { useState } from 'react';

//This component for conversion can be reused/expanded for other measurements
//Currently do not know how to route between two components from a dropdown menu

  const Length = () =>{
    //the unit types are represented by these. Intial units set.
    // The value is change on selection below
    //Current Options for conversion are: Feet, Inches, Meters, Centimeters, Millimeters, Kilometers
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
               const result1 = result.toFixed(4);
               setInValue(result1);
           }
           else if(values2 === "Millimeters"){
                const result = i * 304.8;
                const result1 = result.toFixed(4);
                setInValue(result1);
           }
           else if(values2 === "Inches"){
                const result = i * 12;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
           else if(values2 === "Centimeters"){
                const result = i * 30.48;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
            else if(values2 === "Kilometers"){
                const result = i * 0.0003048;
                const result1 = result.toFixed(6);
                setInValue(result1);
            }
           else if(values2 === "Feet"){
               setInValue(i);
           }
       }
       else if(values1 === "Meters"){
           if(values2 === "Feet"){
               const result = i * 3.2808399;
               const result1 = result.toFixed(4);
               setInValue(result1);
           }
           else if(values2 === "Inches"){
                const result = i * 39.3700787;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
           else if(values2 === "Millimeters"){
                const result = i * 1000;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
            else if(values2 === "Centimeters"){
                const result = i * 100;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
            else if(values2 === "Kilometers"){
                const result = i * 0.001;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
           else if(values2 === "Meters"){
               setInValue(i);
           }
       }
       else if(values1 === "Inches"){
            if(values2 === "Feet"){
                const result = i * 0.08333333;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
            else if(values2 === "Meters"){
                const result = i * 0.0254;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
            else if(values2 === "Millimeters"){
                const result = i * 25.4;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
            else if(values2 === "Centimeters"){
                const result = i * 2.54;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }  
            else if(values2 === "Kilometers"){
                const result = i * 0.0000254;
                const result1 = result.toFixed(7);
                setInValue(result1);
            }
            else if(values2 === "Inches"){
                setInValue(i);
            }
        }
        else if(values1 === "Centimeters"){
            if(values2 === "Feet"){
                const result = i * 0.0328084;
                const result1 = result.toFixed(7);
                setInValue(result1);
            }
            else if(values2 === "Meters"){
                const result = i * 0.01;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
            else if(values2 === "Millimeters"){
                const result = i * 10;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
            else if(values2 === "Inches"){
                const result = i * 0.39370079;
                const result1 = result.toFixed(8);
                setInValue(result1);
            }  
            else if(values2 === "Kilometers"){
                const result = i * 0.00001;
                const result1 = result.toFixed(7);
                setInValue(result1);
            }
            else if(values2 === "Centimeters"){
                setInValue(i);
            }
        }
        else if(values1 === "Milimeters"){
            if(values2 === "Feet"){
                const result = i * 0.00328084;
                const result1 = result.toFixed(7);
                setInValue(result1);
            }
            else if(values2 === "Meters"){
                const result = i * 0.001;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
            else if(values2 === "Centimeters"){
                const result = i * 0.1;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
            else if(values2 === "Inches"){
                const result = i * 0.03937008;
                const result1 = result.toFixed(8);
                setInValue(result1);
            }  
            else if(values2 === "Kilometers"){
                const result = i * 0.000001;
                const result1 = result.toFixed(7);
                setInValue(result1);
            }
            else if(values2 === "Millimeters"){
                setInValue(i);
            }
        }
        else if(values1 === "Kilometers"){
            if(values2 === "Feet"){
                const result = i * 3280.8399;
                const result1 = result.toFixed(7);
                setInValue(result1);
            }
            else if(values2 === "Meters"){
                const result = i * 1000;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
            else if(values2 === "Centimeters"){
                const result = i * 100000;
                const result1 = result.toFixed(4);
                setInValue(result1);
            }
            else if(values2 === "Inches"){
                const result = i * 39370.0787;
                const result1 = result.toFixed(8);
                setInValue(result1);
            }  
            else if(values2 === "Millimeters"){
                const result = i * 1000000;
                const result1 = result.toFixed(7);
                setInValue(result1);
            }
            else if(values2 === "Kilometers"){
                setInValue(i);
            }
        }
    }
    //render/html for Length Conversion
    //Two Dropdown boxes to pick measurement types
    // An input text field to enter a number (top).
    // An input text field that outputs converted result (readonly/noneditable)
    return (
        <><h2>Length Conversion</h2>
        <p>Change units then enter a number.</p>
            
            <div>
                <form>
                    <input type="text" id = "initial length" type='number' onChange={e => lengthConvert(e.target.value)}/>
                    <select id = "lengthType1" onChange={e => setValues1(e.target.value)}>
                        <option value="Feet">Feet</option>
                        <option value ="Inches">Inches</option>
                        <option value ="Millimeters">Millimeters</option>
                        <option value ="Centimeters">Centimeters</option>
                        <option value ="Meters">Meters</option>
                        <option value ="Kilometers">Kilometer</option>
                        
                    </select>
                </form>   
            </div>

            <p> &nbsp; to &nbsp; </p>

            <div>
                <input type = "text" value={inValue} readonly = "readonly"/>
                <select id = "lengthType2" onChange={e => setValues2(e.target.value)}>
                    <option value ="Meters">Meters</option>
                    <option value="Feet">Feet</option>
                    <option value ="Inches">Inches</option>
                    <option value ="Millimeters">Millimeters</option>
                    <option value ="Centimeters">Centimeters</option>
                    <option value ="Kilometers">Kilometer</option>
                </select>
            </div>
            </>

    );
}

export default Length;