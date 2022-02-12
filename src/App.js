//imports for routing
import Length from "./Components/Conversion/Length";
import Mass from "./Components/Conversion/Mass";
import Temperature from "./Components/Conversion/Temperature";
import Volume from "./Components/Conversion/Volume";
import Speed from "./Components/Conversion/Speed";
import Data from "./Components/Conversion/Data";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import React from "react";
import Sidebar from './Sidebar';
import './App.css';

 //connect component then // Dropdown menu example (2 dropdowns with actions above)
    //(https://www.js-tutorials.com/react-js/how-to-create-react-dropdown-select/#React_Select)
    //Another place for dropdowns is: https://reactjs.org/docs/forms.html
    // routed to reach different components
     //connect component then // Dropdown menu example (2 dropdowns with actions above)
      //(https://www.js-tutorials.com/react-js/how-to-create-react-dropdown-select/#React_Select)
      //Another place for dropdowns is: https://reactjs.org/docs/forms.html
      // routed to reach different components

      //Router/Routes is to assign routes to components

function App() {
  return (
   
    <>
    
      <div className = "App" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId = {'outer-container'} />
        <div><h1>Multipurpose Calculator</h1></div>
      </div>
    <div>
    <div id='page-wrap'>
    

    
    <Router>
    <Routes>
      <Route exact path = '/' element={<Length />}></Route>
      <Route exact path = '/Mass' element={<Mass />}></Route>
      <Route exact path = '/Temperature' element={<Temperature />}></Route>
      <Route exact path = '/Volume' element={<Volume />}></Route>
      <Route exact path = '/Speed' element={<Speed />}></Route>
      <Route exact path = '/Data' element={<Data />}></Route>
    </Routes>

      </Router>
      </div>
    </div>
      </>
  );
}
export default App;
