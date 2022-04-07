import React, { useState , useEffect} from 'react';

//This component for conversion can be reused/expanded for other measurements
//Currently do not know how to route between two components from a dropdown menu

  const Length = () =>{
    //the unit types are represented by these. Intial units set.
    // The value is change on selection below
    //Current Options for conversion are: Feet, Inches, Meters, Centimeters, Millimeters, Kilometers
    const [values1, setValues1] = useState('Feet');
    const [values2, setValues2] = useState('Meters');
    //The representation of the output value
    const[outValue, setoutValue] = useState();
    //The input value is stored when conversion happens.
    //This allows for conversion when units are changed
    const[reValue, setReValue] = useState(0);
    const [tutValue, setTutValue] = useState('');
    
    //conversion occurs by conditionals
    //check first/top measurement, then select conversion based on second
    //setoutValue sets the result which automatically appears in the bottom textbox
    const lengthConvert = (i) =>{
        setReValue(i);
       if(values1 === "Feet"){
           if(values2 === "Meters"){
               const result = i * 0.3048;
               setoutValue(result);
               setTutValue('             1 foot = 0.3048 meters');
           }
           else if(values2 === "Millimeters"){
                const result = i * 304.8;
                setoutValue(result);
                setTutValue('        1 foot = 304.8 millimeters');
           }
           else if(values2 === "Inches"){
                const result = i * 12;
                setoutValue(result);
                setTutValue('              1 foot = 12 inches');
            }
           else if(values2 === "Centimeters"){
                const result = i * 30.48;
                setoutValue(result);
                setTutValue('1 foot = 30.48 centimeters');
            }
            else if(values2 === "Kilometers"){
                const result = i * 0.0003048;
                setoutValue(result);
                setTutValue('      1 foot = 0.0003048 kilometers');
            }
           else if(values2 === "Feet"){
               setoutValue(i);
               setTutValue('                      1 foot');
           }
       }
       else if(values1 === "Meters"){
           if(values2 === "Feet"){
               const result = i * 3.2808399;
               setoutValue(result);
               setTutValue('         1 meter =  3.2808399 feet');
           }
           else if(values2 === "Inches"){
                const result = i * 39.3700787;
                setoutValue(result);
                setTutValue('       1 meter =  39.3700787 inches');
            }
           else if(values2 === "Millimeters"){
                const result = i * 1000;
                setoutValue(result);
                setTutValue('        1 meter =  1000 millimeters');
            }
            else if(values2 === "Centimeters"){
                const result = i * 100;
                setoutValue(result);
                setTutValue('        1 meter =  100 centimeters');
            }
            else if(values2 === "Kilometers"){
                const result = i * 0.001;
                setoutValue(result);
                setTutValue('        1 meter =  0.001 kilometers');
            }
           else if(values2 === "Meters"){
               setoutValue(i);
               setTutValue('                         1 meter');
           }
       }
       else if(values1 === "Inches"){
            if(values2 === "Feet"){
                const result = i * 0.08333333;
                setoutValue(result);
                setTutValue('          1 inch =  0.08333333 feet');
            }
            else if(values2 === "Meters"){
                const result = i * 0.0254;
                setoutValue(result);
                setTutValue('          1 inch =  0.0254 meters');
            }
            else if(values2 === "Millimeters"){
                const result = i * 25.4;
                setoutValue(result);
                setTutValue('           1 inch =  25.4 millimeters');
            }
            else if(values2 === "Centimeters"){
                const result = i * 2.54;
                setoutValue(result);
                setTutValue('          1 inch =  2.54 centimers');
            }  
            else if(values2 === "Kilometers"){
                const result = i * 0.0000254; 
                setoutValue(result);
                setTutValue('     1 inch =  0.0000254 kilometers');
            }
            else if(values2 === "Inches"){
                setoutValue(i);
                setTutValue('                           1 inch');
            }
        }
        else if(values1 === "Centimeters"){
            if(values2 === "Feet"){
                const result = i * 0.0328084;
                setoutValue(result);
                setTutValue('    1 centimeter =  0.0328084 feet');
            }
            else if(values2 === "Meters"){
                const result = i * 0.01;
                setoutValue(result);
                setTutValue('        1 centimeter =  0.01 meters');
            }
            else if(values2 === "Millimeters"){
                const result = i * 10; 
                setoutValue(result);
                setTutValue('       1 centimeter =  10 millimeters');
            }
            else if(values2 === "Inches"){
                const result = i * 0.39370079;
                setoutValue(result);
                setTutValue('   1 centimeter =  0.39370079 inches');
            }  
            else if(values2 === "Kilometers"){
                const result = i * 0.00001;
                setoutValue(result);
                setTutValue('   1 centimeter =  0.00001 kilometers');
            }
            else if(values2 === "Centimeters"){
                setoutValue(i);
                setTutValue('                  1 centimeter');
            }
        }
        else if(values1 === "Millimeters"){
            if(values2 === "Feet"){
                const result = i * 0.00328084;
                setoutValue(result);
                setTutValue('    1 millimeter =  0.00328084 feet');
            }
            else if(values2 === "Meters"){
                const result = i * 0.001; 
                setoutValue(result);
                setTutValue('      1 millimeter =  0.001 meters');
            }
            else if(values2 === "Centimeters"){
                const result = i * 0.1;
                setoutValue(result);
                setTutValue('       1 millimeter =  0.1 centimeters');
            }
            else if(values2 === "Inches"){
                const result = i * 0.03937008;
                setoutValue(result);
                setTutValue('      1 millimeter =  0.03937008 inches');
            }  
            else if(values2 === "Kilometers"){
                const result = i * 0.000001;
                setoutValue(result);
                setTutValue('   1 millimeter =  0.000001 kilometers');
            }
            else if(values2 === "Millimeters"){
                setoutValue(i);
                setTutValue('                    1 millimeter');
            }
        }
        else if(values1 === "Kilometers"){
            if(values2 === "Feet"){
                const result = i * 3280.8399;
                setoutValue(result);
                setTutValue('      1 kilometer=  3280.8399 feet');
            }
            else if(values2 === "Meters"){
                const result = i * 1000;
                setoutValue(result);
                setTutValue('         1 kilometer=  1000 meters');
            }
            else if(values2 === "Centimeters"){
                const result = i * 100000;
                setoutValue(result);
                setTutValue('      1 kilometer=  100000 centimers');
            }
            else if(values2 === "Inches"){
                const result = i * 39370.0787;
                setoutValue(result);
                setTutValue('      1 kilometer=  39370.0787 inches');
            }  
            else if(values2 === "Millimeters"){
                const result = i * 1000000;
                setoutValue(result);
                setTutValue('      1 kilometer=  1000000 milimeters');
            }
            else if(values2 === "Kilometers"){
                setoutValue(i);
                setTutValue('                    1 kilometer');
            }
        }  
    } 

    //When option of either dropdown menu changes, convert with the stored input value
    useEffect(() => {
        lengthConvert(reValue);}, [values1, values2] );
    
    //Add border around conversion inputs. Adjust border from here
    const styles = {
            border: '1px solid rgba(0, 0, 0, 1.00)', 
            width: '300px',
            height: '230px',
            background:'#fde6d1',
       };

    const conversionGuide = {
        border: '0px',
        background: 'transparent',
        width: '225px',
    };
    
    //Two Dropdown boxes to pick measurement types
    // An input text field to enter a number (top).
    // An input text field that outputs converted result (readonly/noneditable)
    return (
        
        <><div align="center"><h2>Length Conversion</h2>
        <p>Select units and enter a number.</p>
            <body style={styles}>
            <br></br>
            <div>
            <div> Conversion Guide
                <input style = {conversionGuide} type = "text" value={tutValue} readonly = "readonly"/>
            </div>
            <br></br>
                <form>
                    <input id = "initial length" type='number' onChange={e => lengthConvert(e.target.value)}/>
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
            <br></br>
            <p> &nbsp; to &nbsp; </p>
            <br></br>
            <div>
                <input type = "text" value={outValue} readonly = "readonly"/>
                <select id = "lengthType2" onChange={e => {setValues2(e.target.value)}}>
                    <option value ="Meters">Meters</option>
                    <option value="Feet">Feet</option>
                    <option value ="Inches">Inches</option>
                    <option value ="Millimeters">Millimeters</option>
                    <option value ="Centimeters">Centimeters</option>
                    <option value ="Kilometers">Kilometer</option>
                </select>
            </div>
            </body>
            </div>
            </>

    );
}

export default Length;
