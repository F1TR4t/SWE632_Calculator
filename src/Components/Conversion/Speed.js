import React, { useState , useEffect} from 'react';

//This component for conversion can be reused/expanded for other measurements
//Currently do not know how to route between two components from a dropdown menu

  const Speed = () =>{
    //the unit types are represented by these. Intial units set.
    // The value is change on selection below
    //Current Options for conversion are: MilesPerHour, KilometersPerHour,Knots, Mach
    const [values1, setValues1] = useState('MilesPerHour');
    const [values2, setValues2] = useState('KilometersPerHour');
    //The representation of the output value
    const[outValue, setoutValue] = useState();
    //The input value is stored when conversion happens.
    //This allows for conversion when units are changed
    const[reValue, setReValue] = useState(0);

    //conversion occurs by conditionals
    //check first/top measurement, then select conversion based on second
    //setoutValue sets the result which automatically appears in the bottom textbox
    const speedConvert = (i) =>{
        setReValue(i);
       if(values1 === "MilesPerHour"){
           if(values2 === "KilometersPerHour"){
               const result = i * 1.6092;
               const result1 = result.toFixed(10);
               setoutValue(result1);
           }
           else if(values2 === "Knots"){
                const result = i * 0.868974;
                const result1 = result.toFixed(10);
                setoutValue(result1);
           }
            else if(values2 === "Mach"){
                const result = i * 0.001314;
                const result1 = result.toFixed(10);
                setoutValue(result1);
            }
           else if(values2 === "MilesPerHour"){
               setoutValue(i);
           }
       }
       else if(values1 === "KilometersPerHour"){
           if(values2 === "MilesPerHour"){
               const result = i * 0.621427;
               const result1 = result.toFixed(10);
               setoutValue(result1);
           }
           else if(values2 === "Knots"){
                const result = i * 0.540003;
                const result1 = result.toFixed(10);
                setoutValue(result1);
            }
            else if(values2 === "Mach"){
                const result = i * 0.000816;
                const result1 = result.toFixed(10);
                setoutValue(result1);
            }
           else if(values2 === "KilometersPerHour"){
               setoutValue(i);
           }
       }
        else if(values1 === "Knots"){
            if(values2 === "MilesPerHour"){
                const result = i * 1.150783;
                const result1 = result.toFixed(7);
                setoutValue(result1);
            }
            else if(values2 === "KilometersPerHour"){
                const result = i * 1.86184;
                const result1 = result.toFixed(5);
                setoutValue(result1);
            } 
            else if(values2 === "Mach"){
                const result = i * 0.001512;
                const result1 = result.toFixed(7);
                setoutValue(result1);
            }
            else if(values2 === "Knots"){
                setoutValue(i);
            }
        }
        else if(values1 === "Mach"){
            if(values2 === "MilesPerHour"){
                const result = i * 761.2975;
                const result1 = result.toFixed(7);
                setoutValue(result1);
            }
            else if(values2 === "KilometersPerHour"){
                const result = i * 1225.08;
                const result1 = result.toFixed(4);
                setoutValue(result1);
            }
            else if(values2 === "Knots"){
                const result = i * 661.5474;
                const result1 = result.toFixed(7);
                setoutValue(result1);
            }
            else if(values2 === "Mach"){
                setoutValue(i);
            }
        }  
    } 

    //When option of either dropdown menu changes, convert with the stored input value
    useEffect(() => {
        speedConvert(reValue);}, [values1, values2] );
    
    //Add border around conversion inputs. Adjust border from here
    const styles = {
            border: '1px solid rgba(0, 0, 0, 1.00)', 
            width: '400px',
            height: '240px',
            background:'#fde6d1',
       };
    //render/html for Speed Conversion
    //Two Dropdown boxes to pick measurement types
    // An input text field to enter a number (top).
    // An input text field that outputs converted result (readonly/noneditable)
    return (
        
        <><div align="center"><h2>Speed Conversion</h2>
        <p>Select units and enter a number.</p>
            <body style={styles}>
            <br></br>
            <div>
                <form>
                    <input type="text" id = "initial speed" type='number' onChange={e => speedConvert(e.target.value)}/>
                    <select id = "speedType1" onChange={e => setValues1(e.target.value)}>
                        <option value="MilesPerHour">MilesPerHour</option>
                        <option value ="Knots">Knots</option>
                        <option value ="KilometersPerHour">KilometersPerHour</option>
                        <option value ="Mach">Mach</option>
                        
                    </select>
                </form>   
            </div>
            <br></br>
            <p> &nbsp; to &nbsp; </p>
            <br></br>
            <div>
                <input type = "text" value={outValue} readonly = "readonly"/>
                <select id = "speedType2" onChange={e => {setValues2(e.target.value)}}>
                    <option value ="KilometersPerHour">KilometersPerHour</option>
                    <option value="MilesPerHour">MilesPerHour</option>
                    <option value ="Knots">Knots</option>
                    <option value ="Mach">Mach</option>
                </select>
            </div>
            <br></br>
            </body>
            </div>
            </>

    );
}

export default Speed;