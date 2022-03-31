import React, { useState , useEffect} from 'react';

//This component for conversion can be reused/expanded for other measurements
//Currently do not know how to route between two components from a dropdown menu

  const Mass = () =>{
    //the unit types are represented by these. Intial units set.
    // The value is change on selection below
    //Current Options for conversion are: Pounds, Ounces, Grams, MetricTonnes, Milligrams, Kilograms
    const [values1, setValues1] = useState('Pounds');
    const [values2, setValues2] = useState('Grams');
    //The representation of the output value
    const[outValue, setoutValue] = useState();
    //The input value is stored when conversion happens.
    //This allows for conversion when units are changed
    const[reValue, setReValue] = useState(0);
    const [tutValue, setTutValue] = useState('');

    //conversion occurs by conditionals
    //check first/top measurement, then select conversion based on second
    //setoutValue sets the result which automatically appears in the bottom textbox
    const massConvert = (i) =>{
        setReValue(i);
       if(values1 === "Pounds"){
           if(values2 === "Grams"){
               const result = i * 453.59237;   
               setoutValue(result);
               setTutValue('                 1 pound = 453.59237 grams');
           }
           else if(values2 === "Milligrams"){
                const result = i * 453592.37;  
                setoutValue(result);
                setTutValue('                 1 pound = 453592.37 milligrams');
           }
           else if(values2 === "Ounces"){
                const result = i * 16;
                setoutValue(result);
                setTutValue('                        1 pound = 16 ounces');
            }
           else if(values2 === "MetricTonnes"){
                const result = i * 0.00045359;
                setoutValue(result);
                setTutValue('               1 pound = 0.00045359 metric tonnes');
            }
            else if(values2 === "Kilograms"){
                const result = i * 0.45359237;
                setoutValue(result);
                setTutValue('                1 pound = 0.45359237 kilograms');
            }
           else if(values2 === "Pounds"){
               setoutValue(i);
               setTutValue('                             1 pound');
           }
       }
       else if(values1 === "Grams"){
           if(values2 === "Pounds"){
               const result = i * 0.00220462;
               setoutValue(result);
               setTutValue('                   1 gram = 0.00220462 pounds');
           }
           else if(values2 === "Ounces"){
                const result = i * 0.03527396; 
                setoutValue(result);
                setTutValue('                   1 gram = 0.03527396 ounces');
            }
           else if(values2 === "Milligrams"){
                const result = i * 1000;
                setoutValue(result);
                setTutValue('                     1 gram = 1000 milligrams');
            }
            else if(values2 === "MetricTonnes"){
                const result = i * 0.000001;
                setoutValue(result);
                setTutValue('                             1 gram = 0.000001 metric tonnes');
            }
            else if(values2 === "Kilograms"){
                const result = i * 0.001; 
                setoutValue(result);
                setTutValue('                   1 gram = 0.001 kilograms');
            }
           else if(values2 === "Grams"){
               setoutValue(i);
               setTutValue('                             1 gram');
           }
       }
       else if(values1 === "Ounces"){
            if(values2 === "Pounds"){
                const result = i * 0.0625; 
                setoutValue(result);
                setTutValue('                     1 ounce = 0.0625 pounds');
            }
            else if(values2 === "Grams"){
                const result = i * 28.3495231;
                setoutValue(result);
                setTutValue('                  1 ounce = 28.3495231 grams');
            }
            else if(values2 === "Milligrams"){
                const result = i * 28349.5231;
                setoutValue(result);
                setTutValue('                1 ounce = 28349.5231 milligrams');
            }
            else if(values2 === "MetricTonnes"){
                const result = i * 0.00002835; 
                setoutValue(result);
                setTutValue('               1 ounce = 0.00002835 metric tonnes');
            }  
            else if(values2 === "Kilograms"){
                const result = i * 0.02834952;
                setoutValue(result);
                setTutValue('                  1 ounce = 0.02834952 kilograms');
            }
            else if(values2 === "Ounces"){
                setoutValue(i);
                setTutValue('                             1 ounce');
            }
        }
        else if(values1 === "MetricTonnes"){
            if(values2 === "Pounds"){
                const result = i * 2204.62262;
                setoutValue(result);
                setTutValue('                   1 metric ton = 2204.62262 pounds');
            }
            else if(values2 === "Grams"){
                const result = i * 1000000; 
                setoutValue(result);
                setTutValue('                   1 metric ton = 1000000 grams');
            }
            else if(values2 === "Milligrams"){
                const result = i * 1000000000;
                setoutValue(result);
                setTutValue('              1 metric ton = 1000000000 milligrams');
            }
            else if(values2 === "Ounces"){
                const result = i * 35273.962;
                setoutValue(result);
                setTutValue('                1 metric ton = 35273.962 ounces');
            }  
            else if(values2 === "Kilograms"){
                const result = i * 1000;
                setoutValue(result);
                setTutValue('                   1 metric ton = 1000 kilograms');
            }
            else if(values2 === "MetricTonnes"){
                setoutValue(i);
                setTutValue('                             1 metric ton');
            }
        }
        else if(values1 === "Milligrams"){
            if(values2 === "Pounds"){
                const result = i * 0.0000022;
                setoutValue(result);
                setTutValue('                  1 milligram = 0.0000022 pounds');
            }
            else if(values2 === "Grams"){
                const result = i * 0.001; 
                setoutValue(result);
                setTutValue('                    1 milligram = 0.001 grams');
            }
            else if(values2 === "MetricTonnes"){
                const result = i * 0.0000000001;
                setoutValue(result);
                setTutValue('         1 milligram = 0.0000000001 metric tonnes');
            }
            else if(values2 === "Ounces"){
                const result = i * 0.00003527; 
                setoutValue(result);
                setTutValue('                 1 milligram = 0.00003527 ounces');
            }  
            else if(values2 === "Kilograms"){
                const result = i * 0.000001;               
                setoutValue(result);
                setTutValue('                  1 milligram = 0.000001 kilograms');
            }
            else if(values2 === "Milligrams"){
                setoutValue(i);
                setTutValue('                             1 milligram');
            }
        }
        else if(values1 === "Kilograms"){
            if(values2 === "Pounds"){
                const result = i * 2.20462262;
                setoutValue(result);
                setTutValue('                1 kilogram = 2.20462262 pounds');
            }
            else if(values2 === "Grams"){
                const result = i * 1000;
                setoutValue(result);
                setTutValue('                   1 kilogram = 1000 grams');
            }
            else if(values2 === "MetricTonnes"){
                const result = i * 0.001;
                setoutValue(result);
                setTutValue('                1 kilogram = 0.001 metric tonnes');
            }
            else if(values2 === "Ounces"){
                const result = i * 35.273962;
                setoutValue(result);
                setTutValue('                1 kilogram = 35.273962 ounces');
            }  
            else if(values2 === "Milligrams"){
                const result = i * 1000000;  
                setoutValue(result);
                setTutValue('                 1 kilogram = 1000000 milligrams');
            }
            else if(values2 === "Kilograms"){
                setoutValue(i);
                setTutValue('                             1 kilogram');
            }
        }  
    } 

    //When option of either dropdown menu changes, convert with the stored input value
    useEffect(() => {
        massConvert(reValue);}, [values1, values2] );
    
    //Add border around conversion inputs. Adjust border from here
    const styles = {
            border: '1px solid rgba(0, 0, 0, 1.00)', 
            width: '300px',
            height: '230px',
            background:'white',
        };
 
        const conversionGuide = {
         border: '0px',
         background: 'transparent',
         width: '350px',
     };
     
    //render/html for Mass Conversion
    //Two Dropdown boxes to pick measurement types
    // An input text field to enter a number (top).
    // An input text field that outputs converted result (readonly/noneditable)
    return (
        
        <><div align="center"><h2>Mass and Weight Conversion</h2>
        <p>Select units and enter a number.</p>
            <body style={styles}>
            <br></br>
            <div>
            <div> Conversion Guide
                <input style = {conversionGuide} type = "text" value={tutValue} readonly = "readonly"/>
            </div>
            <br></br>
                <form>
                    <input type="text" id = "initial mass" type='number' onChange={e => massConvert(e.target.value)}/>
                    <select id = "massType1" onChange={e => setValues1(e.target.value)}>
                        <option value="Pounds">Pounds</option>
                        <option value ="Ounces">Ounces</option>
                        <option value ="Milligrams">Milligrams</option>
                        <option value ="MetricTonnes">Metric Tonnes</option>
                        <option value ="Grams">Grams</option>
                        <option value ="Kilograms">Kilograms</option>
                        
                    </select>
                </form>   
            </div>
            <br></br>
            <p> &nbsp; to &nbsp; </p>
            <br></br>
            <div>
                <input type = "text" value={outValue} readonly = "readonly"/>
                <select id = "massType2" onChange={e => {setValues2(e.target.value)}}>
                    <option value ="Grams">Grams</option>
                    <option value="Pounds">Pounds</option>
                    <option value ="Ounces">Ounces</option>
                    <option value ="Milligrams">Milligrams</option>
                    <option value ="MetricTonnes">Metric Tonnes</option>
                    <option value ="Kilograms">Kilograms</option>
                </select>
            </div>
            <br></br>
            </body>
            </div>
            </>

    );
}

export default Mass;
