import React, { useState , useEffect, useCallback} from 'react';

  const Temperature = () =>{
    //the unit types are represented by these. Intial units set.
    // The value is change on selection below
    //Current Options for conversion are: Fahrenheit, Kelvin, Celsius
    const [values1, setValues1] = useState('Fahrenheit');
    const [values2, setValues2] = useState('Celsius');
    //The representation of the output value
    const[outValue, setoutValue] = useState();
    //The input value is stored when conversion happens.
    //This allows for conversion when units are changed
    const[reValue, setReValue] = useState(1);
    const [tutValue, setTutValue] = useState('');

    //conversion occurs by conditionals
    //check first/top measurement, then select conversion based on second
    //setoutValue sets the result which automatically appears in the bottom textbox
    const temperatureConvert = useCallback((i) =>{
        setReValue(i);
       if(values1 === "Fahrenheit"){
           if(values2 === "Celsius"){
               const result = (i -32)* (5/9);
               setoutValue(result);
               setTutValue('1 fahrenheit = -17.22 celsius');
           }
           else if(values2 === "Kelvin"){
                const result = ( i - 32) * (5/9) + 273.15;
                setoutValue(result);
                setTutValue('1 fahrenheit = 255.92777 kelvin');
            }
           else if(values2 === "Fahrenheit"){
               setoutValue(i);
               setTutValue('1 fahrenheit');
           }
       }
       else if(values1 === "Celsius"){
           if(values2 === "Fahrenheit"){
               const result = (i*(9/5))+32;
               setoutValue(result);
               setTutValue('1 celsius = 33.8 fahrenheit');
           }
           else if(values2 === "Kelvin"){
                const result = i + 273.15;  
                setoutValue(result);
                setTutValue('1 celsius = 1273.15 kelvin');
            }
           else if(values2 === "Celsius"){
               setoutValue(i);
               setTutValue('1 celsius');
           }
       }
       else if(values1 === "Kelvin"){
            if(values2 === "Fahrenheit"){
                const result = (i - 273.15) * (9/5) + 32 ;
                setoutValue(result);
                setTutValue('1 kelvin = -457.86999 fahrenheit');
            }
            else if(values2 === "Celsius"){
                const result = i -273.15;
                setoutValue(result);
                setTutValue('1 kelvin = -272.15 celsius');
            }
            else if(values2 === "Kelvin"){
                setoutValue(i);
                setTutValue('1 kelvin');
            }
        }  
    }, [values1, values2]);

    //When option of either dropdown menu changes, convert with the stored input value
    useEffect(() => {
        temperatureConvert(reValue);}, [reValue, values1, values2, temperatureConvert] );
    
    //Add border around conversion inputs. Adjust border from here
    const styles = {
        border: '0px', 
        width: '300px',
        height: '300px',
        background:'#fde6d1',
        fontSize:'18px',
        boxShadow: "0px 20px 10px gray",
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
    //render/html for Temperature Conversion
    //Two Dropdown boxes to pick measurement types
    // An input text field to enter a number (top).
    // An input text field that outputs converted result (readonly/noneditable)
    return (
        
        <><div align="center"><h2 style = {{fontWeight: '800', fontSize: '25px'}}>Temperature Conversion</h2>
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
                    <input id = "initial temperature" type='number' style={{fontSize:'20px'}} ref={(input) => {input && input.focus()}}  value = {reValue} placeholder= '0.0' onChange={e => temperatureConvert(e.target.value)}/>
                    <select id = "temperatureType1" style={{fontSize:'20px'}} onChange={e => setValues1(e.target.value)}>
                        <option value="Fahrenheit">Fahrenheit</option>
                        <option value ="Kelvin">Kelvin</option>
                        <option value ="Celsius">Celsius</option>     
                    </select>
                </form>   
            </div>
            <p> &nbsp; to &nbsp; </p>
            <div>
                <input type = "text" style={{fontSize:'20px'}} value={outValue} readonly = "readonly"/>
                <select id = "temperatureType2" style={{fontSize:'20px'}} onChange={e => {setValues2(e.target.value)}}>
                    <option value ="Celsius">Celsius</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                    <option value ="Kelvin">Kelvin</option>
                </select>
            </div>
            <br></br>
            </body>
            </div>
            </>

    );
}

export default Temperature;
