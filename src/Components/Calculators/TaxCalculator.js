import React, { useState , useEffect} from 'react';

const TaxCalculator = () =>{

    const [values1, setValues1] = useState('Alabama');
    const[outValue, setoutValue] = useState();
    const[reValue, setReValue] = useState(0);

    const lengthConvert = (i) =>{
        setReValue(i);
       if(values1 === "Alabama"){
           const result = i * 0.3048;
           const result1 = result.toFixed(4);
           setoutValue(result1);
        }
    }

    //When option of either dropdown menu changes, convert with the stored input value
    useEffect(() => {
        lengthConvert(reValue);}, [values1] );
    
    return (
        
        <div align="center"><h2>Income Tax Calculator</h2>
        <p>Select Household Income and State.</p>
            <br></br>
            <div>
                <form>
                    <input type="text" id = "current state" type='number' onChange={e => lengthConvert(e.target.value)}/>
                    <select id = "state" onChange={e => setValues1(e.target.value)}>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </form>   
            </div>
            <br></br>
            <div>
                <input type = "text" value={outValue} readonly = "readonly"/>
                <body>the taxes owed are: </body>
            </div>
            </div>
            
    );
}

export default TaxCalculator;