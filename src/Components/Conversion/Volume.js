import React, { useState , useEffect} from 'react';

//This component for conversion can be reused/expanded for other measurements
//Currently do not know how to route between two components from a dropdown menu

  const Volume = () =>{
    //the unit types are represented by these. Intial units set.
    // The value is change on selection below
    //Current Options for conversion are: Cups, Quarts, Liters, Pints, Milliliters, Gallons
    const [values1, setValues1] = useState('Cups');
    const [values2, setValues2] = useState('Liters');
    //The representation of the output value
    const[outValue, setoutValue] = useState();
    //The input value is stored when conversion happens.
    //This allows for conversion when units are changed
    const[reValue, setReValue] = useState(0);

    //conversion occurs by conditionals
    //check first/top measurement, then select conversion based on second
    //setoutValue sets the result which automatically appears in the bottom textbox
    const volumeConvert = (i) =>{
        setReValue(i);
       if(values1 === "Cups"){
           if(values2 === "Liters"){
               const result = i * 0.236588;
               
               setoutValue(result);
           }
           else if(values2 === "Milliliters"){
                const result = i * 236.5882;
                
                setoutValue(result);
           }
           else if(values2 === "Quarts"){
                const result = i * 0.25;
                
                setoutValue(result);
            }
           else if(values2 === "Pints"){
                const result = i * 0.5;
                
                setoutValue(result);
            }
            else if(values2 === "Gallons"){
                const result = i * 0.0625;
                
                setoutValue(result);
            }
            else if(values2 === "Tablespoons"){
                const result = i * 16;
                
                setoutValue(result);
            }
            else if(values2 === "Teaspoons"){
                const result = i * 48;
                
                setoutValue(result);
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.008355;
                
                setoutValue(result);
            }
            else if(values2 === "FluidOunces"){
                const result = i * 8;
                
                setoutValue(result);
            }
           else if(values2 === "Cups"){
               setoutValue(i);
           }
       }
       else if(values1 === "Liters"){
           if(values2 === "Cups"){
               const result = i * 4.226753;
               
               setoutValue(result);
           }
           else if(values2 === "Quarts"){
                const result = i * 1.056688;
                
                setoutValue(result);
            }
           else if(values2 === "Milliliters"){
                const result = i * 1000;
                
                setoutValue(result);
            }
            else if(values2 === "Pints"){
                const result = i * 2.113376;
                
                setoutValue(result);
            }
            else if(values2 === "Gallons"){
                const result = i * 0.264172;
                
                setoutValue(result);
            }
            else if(values2 === "Tablespoons"){
                const result = i * 67.62805;
                
                setoutValue(result);
            }
            else if(values2 === "Teaspoons"){
                const result = i * 202.8841;
                
                setoutValue(result);
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.035315;
                
                setoutValue(result);
            }
            else if(values2 === "FluidOunces"){
                const result = i * 33.81402;
                
                setoutValue(result);
            }
           else if(values2 === "Liters"){
               setoutValue(i);
           }
       }
       else if(values1 === "Quarts"){
            if(values2 === "Cups"){
                const result = i * 4;
                
                setoutValue(result);
            }
            else if(values2 === "Liters"){
                const result = i * 0.946353;
                
                setoutValue(result);
            }
            else if(values2 === "Milliliters"){
                const result = i * 946.3529;
                
                setoutValue(result);
            }
            else if(values2 === "Pints"){
                const result = i * 2;
                
                setoutValue(result);
            }  
            else if(values2 === "Gallons"){
                const result = i * 0.25;
                
                setoutValue(result);
            }
            else if(values2 === "Tablespoons"){
                const result = i * 64;
                
                setoutValue(result);
            }
            else if(values2 === "Teaspoons"){
                const result = i * 192;
                
                setoutValue(result);
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.03342;
                
                setoutValue(result);
            }
            else if(values2 === "FluidOunces"){
                const result = i * 33.30697;
                
                setoutValue(result);
            }
            else if(values2 === "Quarts"){
                setoutValue(i);
            }
        }
        else if(values1 === "Pints"){
            if(values2 === "Cups"){
                const result = i * 2;
                
                setoutValue(result);
            }
            else if(values2 === "Liters"){
                const result = i * 0.473176;
                
                setoutValue(result);
            }
            else if(values2 === "Milliliters"){
                const result = i * 473.1765;
                
                setoutValue(result);
            }
            else if(values2 === "Quarts"){
                const result = i * 0.5;
                
                setoutValue(result);
            }  
            else if(values2 === "Gallons"){
                const result = i * 0.125;
                
                setoutValue(result);
            }
            else if(values2 === "Tablespoons"){
                const result = i * 32;
                
                setoutValue(result);
            }
            else if(values2 === "Teaspoons"){
                const result = i * 96;
                
                setoutValue(result);
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.01671;
                
                setoutValue(result);
            }
            else if(values2 === "FluidOunces"){
                const result = i * 16;
                
                setoutValue(result);
            }
            else if(values2 === "Pints"){
                setoutValue(i);
            }
        }
        else if(values1 === "Milliliters"){
            if(values2 === "Cups"){
                const result = i * 0.004227;
                
                setoutValue(result);
            }
            else if(values2 === "Liters"){
                const result = i * 0.001;
                
                setoutValue(result);
            }
            else if(values2 === "Pints"){
                const result = i * 0.002113;
                
                setoutValue(result);
            }
            else if(values2 === "Quarts"){
                const result = i * 0.001057;
                
                setoutValue(result);
            }  
            else if(values2 === "Gallons"){
                const result = i * 0.000264;
                
                setoutValue(result);
            }
            else if(values2 === "Tablespoons"){
                const result = i * 0.067628;
                
                setoutValue(result);
            }
            else if(values2 === "Teaspoons"){
                const result = i * 0.202884;
                
                setoutValue(result);
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.000035;
                
                setoutValue(result);
            }
            else if(values2 === "FluidOunces"){
                const result = i * 0.033814;
                
                setoutValue(result);
            }
            else if(values2 === "Milliliters"){
                setoutValue(i);
            }
        }
        else if(values1 === "Gallons"){
            if(values2 === "Cups"){
                const result = i * 16;
                
                setoutValue(result);
            }
            else if(values2 === "Liters"){
                const result = i * 3.785412;
                
                setoutValue(result);
            }
            else if(values2 === "Pints"){
                const result = i * 8;
                
                setoutValue(result);
            }
            else if(values2 === "Quarts"){
                const result = i * 4;
                
                setoutValue(result);
            }  
            else if(values2 === "Milliliters"){
                const result = i * 3785.412;
                
                setoutValue(result);
            }
            else if(values2 === "Tablespoons"){
                const result = i * 256;
                
                setoutValue(result);
            }
            else if(values2 === "Teaspoons"){
                const result = i * 768;
                
                setoutValue(result);
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.133681;
                
                setoutValue(result);
            }
            else if(values2 === "FluidOunces"){
                const result = i * 128;
                
                setoutValue(result);
            }
            else if(values2 === "Gallons"){
                setoutValue(i);
            }
        }
        else if(values1 === "Tablespoons"){
            if(values2 === "Cups"){
                const result = i * 0.0625;
                
                setoutValue(result);
            }
            else if(values2 === "Liters"){
                const result = i * 0.014787;
                
                setoutValue(result);
            }
            else if(values2 === "Pints"){
                const result = i * 0.03125;
                
                setoutValue(result);
            }
            else if(values2 === "Quarts"){
                const result = i * 0.015625;
                
                setoutValue(result);
            }  
            else if(values2 === "Milliliters"){
                const result = i * 14.78676;
                
                setoutValue(result);
            }
            else if(values2 === "Gallons"){
                const result = i * 0.003906;
                
                setoutValue(result);
            }
            else if(values2 === "Teaspoons"){
                const result = i * 3;
                
                setoutValue(result);
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.000522;
                
                setoutValue(result);
            }
            else if(values2 === "FluidOunces"){
                const result = i * 0.5;
                
                setoutValue(result);
            }
            else if(values2 === "Tablespoons"){
                setoutValue(i);
            }
        }  
        else if(values1 === "Teaspoons"){
            if(values2 === "Cups"){
                const result = i * 0.020833;
                
                setoutValue(result);
            }
            else if(values2 === "Liters"){
                const result = i * 0.004929;
                
                setoutValue(result);
            }
            else if(values2 === "Pints"){
                const result = i * 0.010417;
                
                setoutValue(result);
            }
            else if(values2 === "Quarts"){
                const result = i * 0.005208;
                
                setoutValue(result);
            }  
            else if(values2 === "Milliliters"){
                const result = i * 4.928922;
                
                setoutValue(result);
            }
            else if(values2 === "Tablespoons"){
                const result = i * 0.333333;
                
                setoutValue(result);
            }
            else if(values2 === "Gallons"){
                const result = i * 0.001302;
                
                setoutValue(result);
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.000174;
                
                setoutValue(result);
            }
            else if(values2 === "FluidOunces"){
                const result = i * 0.166667;
                
                setoutValue(result);
            }
            else if(values2 === "Teaspoons"){
                setoutValue(i);
            }
        }  
        else if(values1 === "CubicFeet"){
            if(values2 === "Cups"){
                const result = i * 119.6883;
                
                setoutValue(result);
            }
            else if(values2 === "Liters"){
                const result = i * 28.31685;
                
                setoutValue(result);
            }
            else if(values2 === "Pints"){
                const result = i * 59.84416;
                
                setoutValue(result);
            }
            else if(values2 === "Quarts"){
                const result = i * 29.92208;
                
                setoutValue(result);
            }  
            else if(values2 === "Milliliters"){
                const result = i * 28316.85;
                
                setoutValue(result);
            }
            else if(values2 === "Tablespoons"){
                const result = i * 1915.013;
                
                setoutValue(result);
            }
            else if(values2 === "Teaspoons"){
                const result = i * 5745.039;
                
                setoutValue(result);
            }
            else if(values2 === "Gallons"){
                const result = i * 7.480519;
                
                setoutValue(result);
            }
            else if(values2 === "FluidOunces"){
                const result = i * 957.5065;
                
                setoutValue(result);
            }
            else if(values2 === "CubicFeet"){
                setoutValue(i);
            }
        }  
        else if(values1 === "FluidOunces"){
            if(values2 === "Cups"){
                const result = i * 0.125;
                
                setoutValue(result);
            }
            else if(values2 === "Liters"){
                const result = i * 0.029574;
                
                setoutValue(result);
            }
            else if(values2 === "Pints"){
                const result = i * 0.0625;
                
                setoutValue(result);
            }
            else if(values2 === "Quarts"){
                const result = i * 0.03125;
                
                setoutValue(result);
            }  
            else if(values2 === "Milliliters"){
                const result = i * 29.57353;
                
                setoutValue(result);
            }
            else if(values2 === "Tablespoons"){
                const result = i * 2;
                
                setoutValue(result);
            }
            else if(values2 === "Teaspoons"){
                const result = i * 6;
                
                setoutValue(result);
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.001044;
                
                setoutValue(result);
            }
            else if(values2 === "Gallons"){
                const result = i * 0.007812;
                
                setoutValue(result);
            }
            else if(values2 === "FluidOunces"){
                setoutValue(i);
            }
        }  
    } 

    //When option of either dropdown menu changes, convert with the stored input value
    useEffect(() => {
        volumeConvert(reValue);}, [values1, values2] );
    
    //Add border around conversion inputs. Adjust border from here
    const styles = {
            border: '1px solid rgba(0, 0, 0, 1.00)', 
            width: '300px',
            height: '200px',
       };
    //render/html for Volume Conversion
    //Two Dropdown boxes to pick measurement types
    // An input text field to enter a number (top).
    // An input text field that outputs converted result (readonly/noneditable)
    return (
        
        <><div align="center"><h2>Volume Conversion</h2>
        <p>Select units and enter a number.</p>
            <body style={styles}>
            <br></br>
            <div>
                <form>
                    <input type="text" id = "initial volume" type='number' onChange={e => volumeConvert(e.target.value)}/>
                    <select id = "volumeType1" onChange={e => setValues1(e.target.value)}>
                        <option value="Cups">Cups</option>
                        <option value ="Quarts">Quarts</option>
                        <option value ="Milliliters">Milliliters</option>
                        <option value ="Pints">Pints</option>
                        <option value ="Liters">Liters</option>
                        <option value ="Gallons">Gallons</option>
                        <option value ="Teaspoons">Teaspoons</option>
                        <option value ="Tablespoons">Tablespoons</option>
                        <option value ="CubicFeet">Cubic Feet</option>
                        <option value ="FluidOunces">Fluid Ounces</option>

                    </select>
                </form>   
            </div>
            <br></br>
            <p> &nbsp; to &nbsp; </p>
            <br></br>
            <div>
                <input type = "text" value={outValue} readonly = "readonly"/>
                <select id = "volumeType2" onChange={e => {setValues2(e.target.value)}}>
                    <option value ="Liters">Liters</option>
                    <option value="Cups">Cups</option>
                    <option value ="Quarts">Quarts</option>
                    <option value ="Milliliters">Milliliters</option>
                    <option value ="Pints">Pints</option>
                    <option value ="Gallons">Gallons</option>
                    <option value ="Teaspoons">Teaspoons</option>
                    <option value ="Tablespoons">Tablespoons</option>
                    <option value ="CubicFeet">Cubic Feet</option>
                    <option value ="FluidOunces">Fluid Ounces</option>
                </select>
            </div>
            <br></br>
            </body>
            </div>
            </>

    );
}

export default Volume;