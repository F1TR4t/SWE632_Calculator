import React, { useState , useEffect, useCallback} from 'react';

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
    const[reValue, setReValue] = useState(1);
    const [tutValue, setTutValue] = useState('');

    //conversion occurs by conditionals
    //check first/top measurement, then select conversion based on second
    //setoutValue sets the result which automatically appears in the bottom textbox
    const volumeConvert = useCallback((i) =>{
        setReValue(i);
       if(values1 === "Cups"){
           if(values2 === "Liters"){
               const result = i * 0.236588;
               setoutValue(result);
               setTutValue('1 cup = 0.236588 liters');
           }
           else if(values2 === "Milliliters"){
                const result = i * 236.5882;   
                setoutValue(result);
                setTutValue('1 cup = 236.5882 milliliters');
           }
           else if(values2 === "Quarts"){
                const result = i * 0.25;    
                setoutValue(result);
                setTutValue('1 cup = 0.25 quarts');
            }
           else if(values2 === "Pints"){
                const result = i * 0.5; 
                setoutValue(result);
                setTutValue('1 cup = 0.5 pints');
            }
            else if(values2 === "Gallons"){
                const result = i * 0.0625;
                setoutValue(result);
                setTutValue('1 cup = 0.0625 gallons');
            }
            else if(values2 === "Tablespoons"){
                const result = i * 16;
                setoutValue(result);
                setTutValue('1 cup = 16 tablespoons');
            }
            else if(values2 === "Teaspoons"){
                const result = i * 48;
                setoutValue(result);
                setTutValue('1 cup = 48 teapoons');
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.008355;
                setoutValue(result);
                setTutValue('1 cup = 0.008355 cubic feet');
            }
            else if(values2 === "FluidOunces"){
                const result = i * 8;
                setoutValue(result);
                setTutValue('1 cup = 8 fluid ounces');
            }
           else if(values2 === "Cups"){
               setoutValue(i);
               setTutValue('1 cup');
           }
       }
       else if(values1 === "Liters"){
           if(values2 === "Cups"){
               const result = i * 4.226753;
               setoutValue(result);
               setTutValue('1 liter = 4.226753 cups');
           }
           else if(values2 === "Quarts"){
                const result = i * 1.056688;
                setoutValue(result);
                setTutValue('1 liter = 1.056688 quarts');
            }
           else if(values2 === "Milliliters"){
                const result = i * 1000;
                setoutValue(result);
                setTutValue('1 liter = 1000 milliliters');
            }
            else if(values2 === "Pints"){
                const result = i * 2.113376; 
                setoutValue(result);
                setTutValue('1 liter = 2.113376 pints');
            }
            else if(values2 === "Gallons"){
                const result = i * 0.264172; 
                setoutValue(result);
                setTutValue('1 liter = 0.264172 gallons');
            }
            else if(values2 === "Tablespoons"){
                const result = i * 67.62805;
                setoutValue(result);
                setTutValue('1 liter = 67.62805 tablespoons');
            }
            else if(values2 === "Teaspoons"){
                const result = i * 202.8841;  
                setoutValue(result);
                setTutValue('1 liter = 202.8841 teaspoons');
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.035315;
                setoutValue(result);
                setTutValue('1 liter = 0.035315 cubic feet');
            }
            else if(values2 === "FluidOunces"){
                const result = i * 33.81402;
                setoutValue(result);
                setTutValue('1 liter = 33.81402 fluid ounces');
            }
           else if(values2 === "Liters"){
               setoutValue(i);
               setTutValue('1 liter');
           }
       }
       else if(values1 === "Quarts"){
            if(values2 === "Cups"){
                const result = i * 4;
                setoutValue(result);
                setTutValue('1 quart = 4 cups');
            }
            else if(values2 === "Liters"){
                const result = i * 0.946353;
                setoutValue(result);
                setTutValue('1 quart = 0.946353 liters');
            }
            else if(values2 === "Milliliters"){
                const result = i * 946.3529;
                setoutValue(result);
                setTutValue('1 quart = 946.3529 milliliters');
            }
            else if(values2 === "Pints"){
                const result = i * 2;
                setoutValue(result);
                setTutValue('1 quart = 2 pints');
            }  
            else if(values2 === "Gallons"){
                const result = i * 0.25;
                setoutValue(result);
                setTutValue('1 quart = 0.25 gallons');
            }
            else if(values2 === "Tablespoons"){
                const result = i * 64;
                setoutValue(result);
                setTutValue('1 quart = 64 tablespoon');
            }
            else if(values2 === "Teaspoons"){
                const result = i * 192;
                setoutValue(result);
                setTutValue('1 quart = 192 teaspoons');
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.03342;
                setoutValue(result);
                setTutValue('1 quart = 0.03342 cubic feet');
            }
            else if(values2 === "FluidOunces"){
                const result = i * 33.30697;
                setoutValue(result);
                setTutValue('1 quart = 33.30697 fluid ounces');
            }
            else if(values2 === "Quarts"){
                setoutValue(i);
               setTutValue('1 quart');
            }
        }
        else if(values1 === "Pints"){
            if(values2 === "Cups"){
                const result = i * 2;
                setoutValue(result);
                setTutValue('1 pint = 2 cups');
            }
            else if(values2 === "Liters"){
                const result = i * 0.473176;
                setoutValue(result);
                setTutValue('1 pint = 0.473176 liters');
            }
            else if(values2 === "Milliliters"){
                const result = i * 473.1765;
                setoutValue(result);
                setTutValue('1 pint = 473.1765 milliliters');
            }
            else if(values2 === "Quarts"){
                const result = i * 0.5;
                setoutValue(result);
                setTutValue('1 pint = 0.5 quarts');
            }  
            else if(values2 === "Gallons"){
                const result = i * 0.125;
                setoutValue(result);
                setTutValue('1 pint = 0.125 gallons');
            }
            else if(values2 === "Tablespoons"){
                const result = i * 32;
                setoutValue(result);
                setTutValue('1 pint = 32 tablespoons');
            }
            else if(values2 === "Teaspoons"){
                const result = i * 96;
                setoutValue(result);
                setTutValue('1 pint = 96 teaspoons');
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.01671;
                setoutValue(result);
                setTutValue('1 pint = 0.01671 cubic feet');
            }
            else if(values2 === "FluidOunces"){
                const result = i * 16;
                setoutValue(result);
                setTutValue('1 pint = 16 fluid ounces');
            }
            else if(values2 === "Pints"){
                setoutValue(i);
               setTutValue('1 pint');
            }
        }
        else if(values1 === "Milliliters"){
            if(values2 === "Cups"){
                const result = i * 0.004227;
                setoutValue(result);
                setTutValue('1 milliliter = 0.004227 cups');
            }
            else if(values2 === "Liters"){
                const result = i * 0.001;
                setoutValue(result);
                setTutValue('1 milliliter = 0.001 liters');
            }
            else if(values2 === "Pints"){
                const result = i * 0.002113;
                setoutValue(result);
                setTutValue('1 milliliter = 0.002113 pints');
            }
            else if(values2 === "Quarts"){
                const result = i * 0.001057;
                setoutValue(result);
                setTutValue('1 milliliter = 0.001057 quarts');
            }  
            else if(values2 === "Gallons"){
                const result = i * 0.000264;
                setoutValue(result);
                setTutValue('1 milliliter = 0.000264 gallons');
            }
            else if(values2 === "Tablespoons"){
                const result = i * 0.067628;
                setoutValue(result);
                setTutValue('1 milliliter = 0.067628 tablespoons');
            }
            else if(values2 === "Teaspoons"){
                const result = i * 0.202884;
                setoutValue(result);
                setTutValue('1 milliliter = 0.202884 teaspoons');
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.000035;
                setoutValue(result);
                setTutValue('1 milliliter = 0.000035 cubic feet');
            }
            else if(values2 === "FluidOunces"){
                const result = i * 0.033814;
                setoutValue(result);
                setTutValue('1 milliliter = 0.033814 fluid ounces');
            }
            else if(values2 === "Milliliters"){
                setoutValue(i);
                setTutValue('1 milliliter');
            }
        }
        else if(values1 === "Gallons"){
            if(values2 === "Cups"){
                const result = i * 16;
                setoutValue(result);
                setTutValue('1 gallon = 16 cups');
            }
            else if(values2 === "Liters"){
                const result = i * 3.785412;
                setoutValue(result);
                setTutValue('1 gallon = 3.785412 liters');
            }
            else if(values2 === "Pints"){
                const result = i * 8;
                setoutValue(result);
                setTutValue('1 gallon = 8 pints');
            }
            else if(values2 === "Quarts"){
                const result = i * 4;
                setoutValue(result);
                setTutValue('1 gallon = 4 quarts');
            }  
            else if(values2 === "Milliliters"){
                const result = i * 3785.412;
                setoutValue(result);
                setTutValue('1 gallon = 3785.412 milliliters');
            }
            else if(values2 === "Tablespoons"){
                const result = i * 256;
                setoutValue(result);
                setTutValue('1 gallon = 256 tablespoons');
            }
            else if(values2 === "Teaspoons"){
                const result = i * 768;
                setoutValue(result);
                setTutValue('1 gallon = 768 teaspoons');
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.133681;
                setoutValue(result);
                setTutValue('1 gallon = 0.133681 cubic feet');
            }
            else if(values2 === "FluidOunces"){
                const result = i * 128;
                setoutValue(result);
                setTutValue('1 gallon = 128 fluid ounces');
            }
            else if(values2 === "Gallons"){
                setoutValue(i);
                setTutValue('1 gallon');
            }
        }
        else if(values1 === "Tablespoons"){
            if(values2 === "Cups"){
                const result = i * 0.0625;
                setoutValue(result);
                setTutValue('1 tablespoon = 0.0625 cups');
            }
            else if(values2 === "Liters"){
                const result = i * 0.014787;
                setoutValue(result);
                setTutValue('1 tablespoon = 0.014787 liters');
            }
            else if(values2 === "Pints"){
                const result = i * 0.03125;
                setoutValue(result);
                setTutValue('1 tablespoon = 0.03125 pints');
            }
            else if(values2 === "Quarts"){
                const result = i * 0.015625;
                setoutValue(result);
                setTutValue('1 tablespoon = 0.015625 quarts');
            }  
            else if(values2 === "Milliliters"){
                const result = i * 14.78676;
                setoutValue(result);
                setTutValue('1 tablespoon = 14.78676 milliliters');
            }
            else if(values2 === "Gallons"){
                const result = i * 0.003906;
                setoutValue(result);
                setTutValue('1 tablespoon = 0.003906 gallons');
            }
            else if(values2 === "Teaspoons"){
                const result = i * 3;
                setoutValue(result);
                setTutValue('1 tablespoon = 3 teaspoons');
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.000522;
                setoutValue(result);
                setTutValue('1 tablespoon = 0.000522 cubic feet');
            }
            else if(values2 === "FluidOunces"){
                const result = i * 0.5;
                setoutValue(result);
                setTutValue('1 tablespoon = 0.5 fluid ounces');
            }
            else if(values2 === "Tablespoons"){
                setoutValue(i);
                setTutValue('1 tablespoon');
            }
        }  
        else if(values1 === "Teaspoons"){
            if(values2 === "Cups"){
                const result = i * 0.020833;
                setoutValue(result);
                setTutValue('1 teaspoon = 0.020833 cups');
            }
            else if(values2 === "Liters"){
                const result = i * 0.004929;
                setoutValue(result);
                setTutValue('1 teaspoon = 0.004929 liters');
            }
            else if(values2 === "Pints"){
                const result = i * 0.010417;
                setoutValue(result);
                setTutValue('1 teaspoon = 0.010417 pints');
            }
            else if(values2 === "Quarts"){
                const result = i * 0.005208;
                setoutValue(result);
                setTutValue('1 teaspoon = 0.005208 quarts');
            }  
            else if(values2 === "Milliliters"){
                const result = i * 4.928922;
                setoutValue(result);
                setTutValue('1 teaspoon = 4.928922 milliliters');
            }
            else if(values2 === "Tablespoons"){
                const result = i * 0.333333;
                setoutValue(result);
                setTutValue('1 teaspoon = 0.333333 tablespoons');
            }
            else if(values2 === "Gallons"){
                const result = i * 0.001302;
                setoutValue(result);
                setTutValue('1 teaspoon = 0.001302 gallons');
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.000174;
                setoutValue(result);
                setTutValue('1 teaspoon = 0.000174 cubic feet');
            }
            else if(values2 === "FluidOunces"){
                const result = i * 0.166667;
                setoutValue(result);
                setTutValue('1 teaspoon = 0.166667 fluid ounces');
            }
            else if(values2 === "Teaspoons"){
                setoutValue(i);
                setTutValue('1 teaspoon');
            }
        }  
        else if(values1 === "CubicFeet"){
            if(values2 === "Cups"){
                const result = i * 119.6883;
                setoutValue(result);
                setTutValue('1 cubic foot = 119.6883 cups');
            }
            else if(values2 === "Liters"){
                const result = i * 28.31685;
                setoutValue(result);
                setTutValue('1 cubic foot = 28.31685 liters');
            }
            else if(values2 === "Pints"){
                const result = i * 59.84416;
                setoutValue(result);
                setTutValue('1 cubic foot = 59.84416 pints');
            }
            else if(values2 === "Quarts"){
                const result = i * 29.92208;
                setoutValue(result);
                setTutValue('1 cubic foot = 29.92208 quarts');
            }  
            else if(values2 === "Milliliters"){
                const result = i * 28316.85;
                setoutValue(result);
                setTutValue('1 cubic foot = 28316.85 milliliters');
            }
            else if(values2 === "Tablespoons"){
                const result = i * 1915.013;
                setoutValue(result);
                setTutValue('1 cubic foot = 1915.013 tablespoons');
            }
            else if(values2 === "Teaspoons"){
                const result = i * 5745.039;
                setoutValue(result);
                setTutValue('1 cubic foot = 5745.039 teaspoons');
            }
            else if(values2 === "Gallons"){
                const result = i * 7.480519;
                setoutValue(result);
                setTutValue('1 cubic foot = 7.480519 gallons');
            }
            else if(values2 === "FluidOunces"){
                const result = i * 957.5065;
                setoutValue(result);
                setTutValue('1 cubic foot = 957.5065 fluid ounces');
            }
            else if(values2 === "CubicFeet"){
                setoutValue(i);
                setTutValue('1 cubic foot');
            }
        }  
        else if(values1 === "FluidOunces"){
            if(values2 === "Cups"){
                const result = i * 0.125;
                setoutValue(result);
                setTutValue('1 fluid ounce = 0.125 cups');
            }
            else if(values2 === "Liters"){
                const result = i * 0.029574;
                setoutValue(result);
                setTutValue('1 fluid ounce = 0.029574 liters');
            }
            else if(values2 === "Pints"){
                const result = i * 0.0625;
                setoutValue(result);
                setTutValue('1 fluid ounce = 0.0625 pints');
            }
            else if(values2 === "Quarts"){
                const result = i * 0.03125;
                setoutValue(result);
                setTutValue('1 fluid ounce = 0.03125 quarts');
            }  
            else if(values2 === "Milliliters"){
                const result = i * 29.57353;
                setoutValue(result);
               setTutValue('1 fluid ounce = 29.57353 milliliters');
            }
            else if(values2 === "Tablespoons"){
                const result = i * 2;
                setoutValue(result);
                setTutValue('1 fluid ounce = 2 tablespoons');
            }
            else if(values2 === "Teaspoons"){
                const result = i * 6;
                setoutValue(result);
                setTutValue('1 fluid ounce = 6 teaspoons');
            }
            else if(values2 === "CubicFeet"){
                const result = i * 0.001044;
                setoutValue(result);
                setTutValue('1 fluid ounce = 0.001044 cubic feet');
            }
            else if(values2 === "Gallons"){
                const result = i * 0.007812;
                setoutValue(result);
                setTutValue('1 fluid ounce = 0.007812 gallons');
            }
            else if(values2 === "FluidOunces"){
                setoutValue(i);
                setTutValue('1 fluid ounce');
            }
        }  
    }, [values1, values2]);

    //When option of either dropdown menu changes, convert with the stored input value
    useEffect(() => {
        volumeConvert(reValue);}, [reValue, values1, values2, volumeConvert] );
    
    //Add border around conversion inputs. Adjust border from here
    const styles = {
        border: '0px', 
        width: '300px',
        height: '300px',
        background:'#C2C3C5',
        fontSize:'18px',
        boxShadow: "0px 20px 10px #5F6368",
   };

    const conversionGuide = {
        border: '0px',
        background: 'transparent',
        width: '300px',
        fontSize: '18px',
        fontWeight: '100',
        color: '#424242',
        textAlign: "center",
    }; 
    //render/html for Volume Conversion
    //Two Dropdown boxes to pick measurement types
    // An input text field to enter a number (top).
    // An input text field that outputs converted result (readonly/noneditable)
    return (
        
        <><div align="center"><h1>Volume Conversion</h1>
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
                    <input id = "initial volume" type='number' style={{fontSize:'20px'}} ref={(input) => {input && input.focus()}}  value = {reValue} placeholder= '0.0' onChange={e => volumeConvert(e.target.value)}/>
                    <select id = "volumeType1" style={{fontSize:'20px'}} onChange={e => setValues1(e.target.value)}>
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
            <p> &nbsp; to &nbsp; </p>
            <div>
                <input type = "text" value={outValue} style={{fontSize:'20px'}} readonly = "readonly"/>
                <select id = "volumeType2" style={{fontSize:'20px'}} onChange={e => {setValues2(e.target.value)}}>
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
