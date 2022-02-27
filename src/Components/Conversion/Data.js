import React, { useState , useEffect} from 'react';

//This component for conversion can be reused/expanded for other measurements
//Currently do not know how to route between two components from a dropdown menu

  const Data = () =>{
    //the unit types are represented by these. Intial units set.
    // The value is change on selection below
    //Current Options for conversion are: Bytes, Kilobytes, Bits, Megabytes, Gigabytes, Terabytes
    const [values1, setValues1] = useState('Bytes');
    const [values2, setValues2] = useState('Bits');
    //The representation of the output value
    const[outValue, setoutValue] = useState();
    //The input value is stored when conversion happens.
    //This allows for conversion when units are changed
    const[reValue, setReValue] = useState(0);
    const [tutValue, setTutValue] = useState('');

    //conversion occurs by conditionals
    //check first/top measurement, then select conversion based on second
    //setoutValue sets the result which automatically appears in the bottom textbox
    const dataConvert = (i) =>{
        setReValue(i);
       if(values1 === "Bytes"){
           if(values2 === "Bits"){
               const result = i * 8;
               setoutValue(result);
               setTutValue('                            1 byte = 8 bits');

           }
           else if(values2 === "Gigabytes"){
                const result = i * 0.000000001;
                setoutValue(result);
                setTutValue('             1 byte = 0.000000001 gigabytes');
           }
           else if(values2 === "Kilobytes"){
                const result = i * 0.001;
                setoutValue(result);
                setTutValue('                    1 byte = 0.001 kilobytes');
            }
           else if(values2 === "Megabytes"){
                const result = i * 0.000001;
                setoutValue(result);
                setTutValue('             1 byte = 0.000001 megabytes');

            }
            else if(values2 === "Terabytes"){
                const result = i * 0.000000000001;
                setoutValue(result);
                setTutValue('             1 byte = 0.000000000001 terabytes');
            }
           else if(values2 === "Bytes"){
               setoutValue(i);
               setTutValue('                                     1 byte');

           }
       }
       else if(values1 === "Bits"){
           if(values2 === "Bytes"){
               const result = i * 0.125;
               setoutValue(result);
               setTutValue('                          1 bit = 0.125 bytes');

           }
           else if(values2 === "Kilobytes"){
                const result = i * 0.000125;
                setoutValue(result);
                setTutValue('               1 bit = 0.000125 kilobytes');
            }
           else if(values2 === "Gigabytes"){
                const result = i * 0.000000000125;
                setoutValue(result);
                setTutValue('             1 bit = 0.000000000125 gigabytes');
            }
            else if(values2 === "Megabytes"){
                const result = i * 0.000000125;   
                setoutValue(result);
                setTutValue('             1 bit = 0.000000125 megabytes');
            }
            else if(values2 === "Terabytes"){
                const result = i * 0.000000000000125;
                setoutValue(result);
                setTutValue('             1 bit = 0.000000000000125 terabytes');
            }
           else if(values2 === "Bits"){
               setoutValue(i);
               setTutValue('                                   1 bit');
           }
       }
       else if(values1 === "Kilobytes"){
            if(values2 === "Bytes"){
                const result = i * 1000;
                setoutValue(result);
                setTutValue('                    1 kilobyte = 1000 bytes');
            }
            else if(values2 === "Bits"){
                const result = i * 8000;
                setoutValue(result);
                setTutValue('                        1 kilobyte = 8000 bits');
            }
            else if(values2 === "Gigabytes"){
                const result = i * 0.000001;
                setoutValue(result);
                setTutValue('             1 kilobyte = 0.000001 gigabytes');

            }
            else if(values2 === "Megabytes"){
                const result = i * 0.001;
                setoutValue(result);
                setTutValue('                   1 kilobyte = 0.001 megabytes');

            }  
            else if(values2 === "Terabytes"){
                const result = i * 0.000000001;
                setoutValue(result);
                setTutValue('             1 kilobyte = 0.000000001 terabytes');

            }
            else if(values2 === "Kilobytes"){
                setoutValue(i);
                setTutValue('                                 1 kilobyte');

            }
        }
        else if(values1 === "Megabytes"){
            if(values2 === "Bytes"){
                const result = i * 1000000;
                setoutValue(result);
                setTutValue('             1 megabytes = 1000000 bytes');

            }
            else if(values2 === "Bits"){
                const result = i * 8000000;
                setoutValue(result);
                setTutValue('                   1 megabyte = 8000000 bits');

            }
            else if(values2 === "Gigabytes"){
                const result = i * 0.001;
                setoutValue(result);
                setTutValue('                  1 megabyte = 0.001 gigabytes');

            }
            else if(values2 === "Kilobytes"){
                const result = i * 1000;
                setoutValue(result);
                setTutValue('             1 megabyte = 1000 kilobytes');

            }  
            else if(values2 === "Terabytes"){
                const result = i * 0.000001;
                setoutValue(result);
                setTutValue('             1 megabyte = 0.000001 terabytes');

            }
            else if(values2 === "Megabytes"){
                setoutValue(i);
                setTutValue('                             1 megabyte');

            }
        }
        else if(values1 === "Gigabytes"){
            if(values2 === "Bytes"){
                const result = i * 1000000000;
                setoutValue(result);
                setTutValue('                1 gigabytes = 1000000000 bytes');

            }
            else if(values2 === "Bits"){
                const result = i * 8000000000;
                setoutValue(result);
                setTutValue('               1 gigabyte = 8000000000 Bits');

            }
            else if(values2 === "Megabytes"){
                const result = i * 1000;
                setoutValue(result);
                setTutValue('             1 gigabyte = 1000 Megabytes');

            }
            else if(values2 === "Kilobytes"){
                const result = i * 1000000;
                setoutValue(result);
                setTutValue('                1 gigabyte = 1000000 Kilobytes');

            }  
            else if(values2 === "Terabytes"){
                const result = i * 0.001;
                setoutValue(result);
                setTutValue('                  1 gigabyte = 0.001 terabytes');

            }
            else if(values2 === "Gigabytes"){
                setoutValue(i);
                setTutValue('                                  1 gigabyte');

            }
        }
        else if(values1 === "Terabytes"){
            if(values2 === "Bytes"){
                const result = i * 1000000000000;
                setoutValue(result);
                setTutValue('             1 terabyte = 1000000000000 bytes');

            }
            else if(values2 === "Bits"){
                const result = i * 8000000000000;                
                setoutValue(result);
                setTutValue('             1 terabyte = 8000000000000 bits');

            }
            else if(values2 === "Megabytes"){
                const result = i * 1000000;
                setoutValue(result);
                setTutValue('             1 terabyte = 1000000 megabytes');

            }
            else if(values2 === "Kilobytes"){
                const result = i * 1000000000;
                setoutValue(result);
                setTutValue('             1 terabyte = 1000000000 kilobytes');

            }  
            else if(values2 === "Gigabytes"){
                const result = i * 1000;
                setoutValue(result);
                setTutValue('                   1 terabyte = 1000 gigabytes');

            }
            else if(values2 === "Terabytes"){
                setoutValue(i);
                setTutValue('                                  1 terabyte');
            }
        }  
    } 

    //When option of either dropdown menu changes, convert with the stored input value
    useEffect(() => {
        dataConvert(reValue);}, [values1, values2] );
    
    //Add border around conversion inputs. Adjust border from here
    const styles = {
            border: '1px solid rgba(0, 0, 0, 1.00)', 
            width: '300px',
            height: '230px',
       };

       const conversionGuide = {
        border: '0px',
        background: 'transparent',
        width: '300px',
    };
    //render/html for Data Conversion
    //Two Dropdown boxes to pick measurement types
    // An input text field to enter a number (top).
    // An input text field that outputs converted result (readonly/noneditable)
    return (
        
        <><div align="center"><h2>Data Conversion</h2>
        <p>Select units and enter a number.</p>
            <body style={styles}>
            <br></br>
            <div>
            <div> Conversion Guide
                <input style = {conversionGuide} type = "text" value={tutValue} readonly = "readonly"/>
            </div>
            <br></br>
                <form>
                    <input type="text" id = "initial data" type='number' onChange={e => dataConvert(e.target.value)}/>
                    <select id = "dataType1" onChange={e => setValues1(e.target.value)}>
                        <option value="Bytes">Bytes</option>
                        <option value ="Bits">Bits</option>
                        <option value ="Kilobytes">Kilobytes</option>
                        <option value ="Megabytes">Megabytes</option>
                        <option value ="Gigabytes">Gigabytes</option>    
                        <option value ="Terabytes">Terabytes</option>
                        
                    </select>
                </form>   
            </div>
            <br></br>
            <p> &nbsp; to &nbsp; </p>
            <br></br>
            <div>
                <input type = "text" value={outValue} readonly = "readonly"/>
                <select id = "dataType2" onChange={e => {setValues2(e.target.value)}}>
                    <option value ="Bits">Bits</option>
                    <option value="Bytes">Bytes</option>
                    <option value ="Kilobytes">Kilobytes</option>
                    <option value ="Megabytes">Megabytes</option>
                    <option value ="Gigabytes">Gigabytes</option>
                    <option value ="Terabytes">Terabytes</option>
                </select>
            </div>
            <br></br>
            </body>
            </div>
            </>

    );
}

export default Data;
