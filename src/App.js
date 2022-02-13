import Length from "./Components/Conversion/Length";
import Mass from "./Components/Conversion/Mass";
import Temperature from "./Components/Conversion/Temperature";
import Speed from "./Components/Conversion/Speed";
import Calculator from "./Components/Calculators/Calculator";
import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    //connect component then // Dropdown menu example (2 dropdowns with actions above)
    //(https://www.js-tutorials.com/react-js/how-to-create-react-dropdown-select/#React_Select)
    //Another place for dropdowns is: https://reactjs.org/docs/forms.html
    // routed to reach different components
     //connect component then // Dropdown menu example (2 dropdowns with actions above)
      //(https://www.js-tutorials.com/react-js/how-to-create-react-dropdown-select/#React_Select)
      //Another place for dropdowns is: https://reactjs.org/docs/forms.html
      // routed to reach different components
    <>
    <div>Conversions
    <Router>
    <li>
    <Link to ="/">Length</Link>
    </li>
    <li>
    <Link to = "/Mass">Mass/Weight</Link>
    </li>
    <li>
    <Link to = "/Temperature">Temperature</Link>
    </li>
    <li>
    <Link to = "/Speed">Speed</Link>
    </li>
    <li>
    <Link to ="/Calculator">Calculator</Link>
    </li>
    <Routes>
      <Route exact path = '/' element={<Length />}></Route>
      <Route exact path = '/Mass' element={<Mass />}></Route>
      <Route exact path = '/Temperature' element={<Temperature />}></Route>
      <Route exact path = '/Speed' element={<Speed />}></Route>
      <Route exact path = '/Calculator' element={<Calculator />}></Route>
    </Routes>

      </Router>
      </div>
      </>
  );
}
export default App;
