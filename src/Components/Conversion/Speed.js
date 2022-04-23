import React, { useState , useEffect, useCallback} from 'react';

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
    const[reValue, setReValue] = useState(1);
    const [tutValue, setTutValue] = useState('');
    
    //conversion occurs by conditionals
    //check first/top measurement, then select conversion based on second
    //setoutValue sets the result which automatically appears in the bottom textbox
    const speedConvert = useCallback((i) =>{
        setReValue(i);
       if(values1 === "MilesPerHour"){
           if(values2 === "KilometersPerHour"){
               const result = i * 1.6092;
               setoutValue(result);
               setTutValue('1 mile per hour = 1.6092 kilometers per hour');

           }
           else if(values2 === "Knots"){
                const result = i * 0.868974;
                setoutValue(result);
                setTutValue('1 mile per hour = 0.868974 knots');
           }
            else if(values2 === "Mach"){
                const result = i * 0.001314;
                setoutValue(result);
                setTutValue('1 mile per hour = 0.001314 machs');
            }
           else if(values2 === "MilesPerHour"){
               setoutValue(i);
               setTutValue('1 mile per hour');
           }
       }
       else if(values1 === "KilometersPerHour"){
           if(values2 === "MilesPerHour"){
               const result = i * 0.621427;
               setoutValue(result);
               setTutValue('1 kilometer per hour = 0.621427 miles per hour');
           }
           else if(values2 === "Knots"){
                const result = i * 0.540003;
                setoutValue(result);
                setTutValue('1 kilometer per hour = 0.540003 knots');
            }
            else if(values2 === "Mach"){
                const result = i * 0.000816;
                setoutValue(result);
                setTutValue('1 kilometer per hour = 0.000816 mach');
            }
           else if(values2 === "KilometersPerHour"){
               setoutValue(i);
               setTutValue('1 kilometer per hour');

           }
       }
        else if(values1 === "Knots"){
            if(values2 === "MilesPerHour"){
                const result = i * 1.150783;
                setoutValue(result);
                setTutValue('1 knot = 1.150783 miles per hour');
            }
            else if(values2 === "KilometersPerHour"){
                const result = i * 1.86184;
                setoutValue(result);
                setTutValue('1 knot = 1.86184 kilometers per hour');
            } 
            else if(values2 === "Mach"){
                const result = i * 0.001512;
                setoutValue(result);
                setTutValue('1 knot = 0.001512 machs');
            }
            else if(values2 === "Knots"){
                setoutValue(i);
                setTutValue('1 knots');
            }
        }
        else if(values1 === "Mach"){
            if(values2 === "MilesPerHour"){
                const result = i * 761.2975;
                setoutValue(result);
                setTutValue('1 mach = 761.2975 miles per hour');
            }
            else if(values2 === "KilometersPerHour"){
                const result = i * 1225.08;
                setoutValue(result);
                setTutValue('1 mach = 1225.08 kilometers per hour');
            }
            else if(values2 === "Knots"){
                const result = i * 661.5474;
                setoutValue(result);
                setTutValue('1 mach = 661.5474 knots');
            }
            else if(values2 === "Mach"){
                setoutValue(i);
                setTutValue('1 mach');
            }
        }  
    }, [values1, values2]);

    //When option of either dropdown menu changes, convert with the stored input value
    useEffect(() => {
        speedConvert(reValue);}, [reValue, speedConvert, values1, values2] );
    
    //Add border around conversion inputs. Adjust border from here
    const styles = {
        border: '0px', 
        width: '360px',
        height: '300px',
        background:'#fde6d1',
        fontSize:'18px',
        boxShadow: "0px 20px 10px gray",
   };

    const conversionGuide = {
        border: '0px',
        background: 'transparent',
        width: '360px',
        fontSize: '18px',
        fontWeight: '100',
        color: '#424242',
        textAlign: "center",
    };  
    //render/html for Speed Conversion
    //Two Dropdown boxes to pick measurement types
    // An input text field to enter a number (top).
    // An input text field that outputs converted result (readonly/noneditable)
    return (
        
        <><div align="center"><h2 style = {{fontWeight: '800', fontSize: '25px'}}>Speed Conversion</h2>
        <h2 style = {{fontWeight: '500',color: '#424242', fontSize: '25px'}}> Enter a number and select units </h2> 
        <br></br>
            <body style={styles}>
            <div>      
            <div>
                 <h4 style = {{fontWeight: '700', color: '#212121', fontSize: '18px'}}>
                     <br></br>
                Conversion Guide 
                <input style = {conversionGuide} type = "text" value={tutValue} readonly = "readonly"/>
                </h4>
            </div>
            <br></br>
                <form>
                    <input  id = "initial speed" type='number' style={{fontSize:'20px'}} ref={(input) => {input && input.focus()}}  value = {reValue} placeholder= '0.0' onChange={e => speedConvert(e.target.value)}/>
                    <select id = "speedType1" style={{fontSize:'20px'}} onChange={e => setValues1(e.target.value)}>
                        <option value="MilesPerHour">MilesPerHour</option>
                        <option value ="Knots">Knots</option>
                        <option value ="KilometersPerHour">KilometersPerHour</option>
                        <option value ="Mach">Mach</option>
                        
                    </select>
                </form>   
            </div>
            <p> &nbsp; to &nbsp; </p>
            <div>
                <input type = "text" style={{fontSize:'20px'}} value={outValue} readonly = "readonly"/>
                <select id = "speedType2" style={{fontSize:'20px'}} onChange={e => {setValues2(e.target.value)}}>
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
