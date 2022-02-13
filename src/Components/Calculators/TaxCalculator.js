import React, { useState } from 'react';

const TaxCalculator = () =>{

    const [values1, setValues1] = useState('Alabama');
    const [values2, setValues2] = useState('0');
    const [values3, setValues3] = useState('0');
    const [values4, setValues4] = useState('0');

    const box = {
        border: '2px solid rgba(0, 0, 0, 1.00)', 
        width: '500px',
        height: '120px',
    };

    const calcTax = () => {
        const digits = [];
        var totalFed = 0;
        var totalSt = 0;
        var taxableIncome = values2-values3-values4;

        digits.push(<h5>Total taxable income: ${taxableIncome.toFixed(2)}</h5>)

        digits.push(<h3>Federal tax calculation:</h3>)
        // calculated based on brackets from nerd wallet: https://www.nerdwallet.com/article/taxes/federal-income-tax-brackets
        if(taxableIncome<=9950){
            totalFed = taxableIncome*.1;
            digits.push(<text>Tax Bracket: 10%</text>)
        }
        else if(taxableIncome<=40525){
            totalFed = 995+(taxableIncome-9950)*.12;
            digits.push(<text>Tax Bracket: 12% (on income above $9,950)</text>)
        }
        else if(taxableIncome<=86375){
            totalFed = 4664+(taxableIncome-40525)*.22;
            digits.push(<text>Tax Bracket: 22% (on income above $40,525)</text>)
        }
        else if(taxableIncome<=164925){
            totalFed = 14751+(taxableIncome-85375)*.24;
            digits.push(<text>Tax Bracket: 24% (on income above $86,375)</text>)
        }
        else if(taxableIncome<=209425){
            totalFed = 33603+(taxableIncome-164925)*.32;
            digits.push(<text>Tax Bracket: 32% (on income above $164,925)</text>)
        }
        else if(taxableIncome<=523600){
            totalFed = 47843+(taxableIncome-209425)*.35;
            digits.push(<text>Tax Bracket: 35% (on income above $209,425)</text>)
        }
        else{
            totalFed = 157804.25+(taxableIncome-523600)*.37;
            digits.push(<text>Tax Bracket: 37% (on income above $523,600)</text>)
        }

        digits.push(<h4>${totalFed.toFixed(2)} in Federal Taxes</h4>)

        digits.push(<h3>Estimated State tax calculation:</h3>)
        for(let i=1; i<5; i++){
            digits.push(<body> some output here </body>)
        }

        digits.push(<br></br>)
        digits.push(
            <body style={box}>
                <h2>Estimated Total Taxes: ${(totalFed+totalSt).toFixed(2)}</h2>
                <h2>Take-home Income: ${(taxableIncome-totalFed-totalSt).toFixed(2)}</h2>
            </body>
        )
        digits.push(<br></br>)

        return digits;
    }
    
    return (
        
        <div align="center"><h2>Income Tax Calculator</h2>
        <p>Input Household Income and State.</p>
        <body style={box}>
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
                    <br></br>
                    Other Tax Deductions: <input type="text" id = "deductions" type='number' onChange={e => setValues4(e.target.value)}/>
                </form>
            </div>
        </body>
            <div>
                {calcTax()}
                
            </div>
            </div>
            
    );
}

export default TaxCalculator;