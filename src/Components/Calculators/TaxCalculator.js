import React, { useState } from 'react';

const TaxCalculator = () =>{

    const [values1, setValues1] = useState('Alabama');
    const [values2, setValues2] = useState('0');
    const [values3, setValues3] = useState('0');
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

    const calcTax = () => {
        const digits = [];
        const totalFed = 0;
        const totalSt = 0;

        digits.push(<h5>Total taxable income: {values2-values3}</h5>)

        digits.push(<h3>Federal tax calculation:</h3>)
        for(let i=1; i<5; i++){
            digits.push(<body> some output here </body>)
        }
        digits.push(<h3>Estimated State tax calculation:</h3>)
        for(let i=1; i<5; i++){
            digits.push(<body> some output here </body>)
        }
        return digits;
    }

    
    
    return (
        
        <div align="center"><h2>Income Tax Calculator</h2>
        <p>Input Household Income and State.</p>
            <br></br>
            <div>
                <form>
                    <input type="text" id = "income" type='number' onChange={e => setValues2(e.target.value)}/>
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
                    <br></br>
                    Total Tax Eligible Retirement Contributions: <input type="text" id = "retirement" type='number' onChange={e => setValues3(e.target.value)}/>
                </form>   
            </div>
            <div>
                {calcTax()}
                {values1}
                
                {outValue}
            </div>
            </div>
            
    );
}

export default TaxCalculator;