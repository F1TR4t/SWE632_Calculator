import React, { useState } from 'react';

const TaxCalculator = () =>{

    const [values1, setValues1] = useState('XX');
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
        if(taxableIncome==0){
            digits.push(<text>Tax Bracket: N/A</text>)
        }
        else if(taxableIncome<=9950){
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
        
        // taxes for state estimated using diagram from: https://taxfoundation.org/publications/state-individual-income-tax-rates-and-brackets/
        switch (values1) {
            case 'XX':
                digits.push(<text>Tax Bracket: N/A</text>)
                break;
            case 'WA':
            case 'NV':
            case 'WY':
            case 'SD':
            case 'TX':
            case 'TN':
            case 'FL':
            case 'AK':
                totalSt = 0;
                digits.push(<text>No State Income Tax in {values1}</text>)
                break;
            case 'OK':
            case 'AL':
            case 'KY':
            case 'MS':
            case 'NH':
            case 'MA':
                totalSt = taxableIncome*.05;
                digits.push(<text>{values1} Tax: 5%</text>)
                break;
            case 'CO':
                totalSt = taxableIncome*.0455;
                digits.push(<text>{values1} Tax: 4.55%</text>)
                break;
            case 'OR':
                totalSt = taxableIncome*.099;
                digits.push(<text>{values1} Tax: 9.90%</text>)
                break;
            case 'CA':
                totalSt = taxableIncome*.133;
                digits.push(<text>{values1} Tax: 13.3%</text>)
                break;
            case 'ID':
                totalSt = taxableIncome*.06925;
                digits.push(<text>{values1} Tax: 6.925%</text>)
                break;
            case 'MT':
                totalSt = taxableIncome*.069;
                digits.push(<text>{values1} Tax: 6.9%</text>)
                break;
            case 'ND':
                totalSt = taxableIncome*.029;
                digits.push(<text>{values1} Tax: 2.9%</text>)
                break;
            case 'MN':
                totalSt = taxableIncome*.0985;
                digits.push(<text>{values1} Tax: 9.85%</text>)
                break;
            case 'WI':
                totalSt = taxableIncome*.0765;
                digits.push(<text>{values1} Tax: 7.65%</text>)
                break;
            case 'MI':
                totalSt = taxableIncome*.0425;
                digits.push(<text>{values1} Tax: 4.25%</text>)
                break;
            case 'NY':
                totalSt = taxableIncome*.0882;
                digits.push(<text>{values1} Tax: 8.82%</text>)
                break;
            case 'VT':
                totalSt = taxableIncome*.0875;
                digits.push(<text>{values1} Tax: 8.75%</text>)
                break;
            case 'ME':
                totalSt = taxableIncome*.0715;
                digits.push(<text>{values1} Tax: 7.15%</text>)
                break;
            case 'OH':
                totalSt = taxableIncome*.04797;
                digits.push(<text>{values1} Tax: 4.797%</text>)
                break;
            case 'IL':
                totalSt = taxableIncome*.0495;
                digits.push(<text>{values1} Tax: 4.95%</text>)
                break;
            case 'WV':
                totalSt = taxableIncome*.065;
                digits.push(<text>{values1} Tax: 6.5%</text>)
                break;
            case 'VA':
            case 'GA':
            case 'MD':
                totalSt = taxableIncome*.0575;
                digits.push(<text>{values1} Tax: 5.75%</text>)
                break;
            case 'NC':
                totalSt = taxableIncome*.0525;
                digits.push(<text>{values1} Tax: 5.25%</text>)
                break;
            case 'AZ':
                totalSt = taxableIncome*.08;
                digits.push(<text>{values1} Tax: 8%</text>)
                break;
            case 'AR':
                totalSt = taxableIncome*.059;
                digits.push(<text>{values1} Tax: 5.9%</text>)
                break;
            case 'CT':
                totalSt = taxableIncome*.0699;
                digits.push(<text>{values1} Tax: 6.99%</text>)
                break;
            case 'DE':
                totalSt = taxableIncome*.066;
                digits.push(<text>{values1} Tax: 6.6%</text>)
                break;
            case 'HI':
                totalSt = taxableIncome*.11;
                digits.push(<text>{values1} Tax: 11%</text>)
                break;
            case 'IN':
                totalSt = taxableIncome*.0323;
                digits.push(<text>{values1} Tax: 3.23%</text>)
                break;
            case 'IA':
                totalSt = taxableIncome*.0853;
                digits.push(<text>{values1} Tax: 8.53%</text>)
                break;
            case 'KS':
                totalSt = taxableIncome*.057;
                digits.push(<text>{values1} Tax: 5.7%</text>)
                break;
            case 'LA':
                totalSt = taxableIncome*.06;
                digits.push(<text>{values1} Tax: 6%</text>)
                break;
            case 'MO':
                totalSt = taxableIncome*.054;
                digits.push(<text>{values1} Tax: 5.4%</text>)
                break;
            case 'NE':
                totalSt = taxableIncome*.0684;
                digits.push(<text>{values1} Tax: 6.84%</text>)
                break;
            case 'NJ':
                totalSt = taxableIncome*.1075;
                digits.push(<text>{values1} Tax: 10.75%</text>)
                break;
            case 'NM':
                totalSt = taxableIncome*.059;
                digits.push(<text>{values1} Tax: 5.9%</text>)
                break;
            case 'PA':
                totalSt = taxableIncome*.0307;
                digits.push(<text>{values1} Tax: 3.07%</text>)
                break;
            case 'RI':
                totalSt = taxableIncome*.0599;
                digits.push(<text>{values1} Tax: 5.99%</text>)
                break;
            case 'SC':
                totalSt = taxableIncome*.07;
                digits.push(<text>{values1} Tax: 7%</text>)
                break;
            case 'UT':
                totalSt = taxableIncome*.0495;
                digits.push(<text>{values1} Tax: 4.95%</text>)
                break;
            case 'DC':
                totalSt = taxableIncome*.0895;
                digits.push(<text>{values1} Tax: 8.95%</text>)
                break;
            default:
        }
        
        

        digits.push(<h4>${totalSt.toFixed(2)} in State Taxes</h4>)

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
        
        <div align="center"><h1>Income Tax Calculator</h1>
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
                        <option value="DC">District of Columbia</option>
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