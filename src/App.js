import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Calculator from "./Components/Calculators/Calculator";
import Scientific from "./Components/Calculators/Scientific";
import TaxCalculator from "./Components/Calculators/TaxCalculator";

import Sidebar from './Components/Sidebar';

//imports for routing
import Length from "./Components/Conversion/Length";
import Mass from "./Components/Conversion/Mass";
import Temperature from "./Components/Conversion/Temperature";
import Volume from "./Components/Conversion/Volume";
import Speed from "./Components/Conversion/Speed";
import Data from "./Components/Conversion/Data";

import './App.css';
  //Router/Routes is to assign routes to components

function App() {
  window.onbeforeunload = function() {
    return 'Your upload will be lost if you leave the page, are you sure?';
  };

  return (
    <>
      <div className = "App" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId = {'outer-container'} />
      </div>
    <div id='page-wrap'>
     
    <Router> 
    <Routes>
      <Route exact path = '/' element={<Calculator />}></Route>
      <Route exact path = '/Length' element={<Length />}></Route>
      <Route exact path = '/Mass' element={<Mass />}></Route>
      <Route exact path = '/Temperature' element={<Temperature />}></Route>
      <Route exact path = '/Volume' element={<Volume />}></Route>
      <Route exact path = '/Speed' element={<Speed />}></Route>
      <Route exact path='/Scientific' element={<Scientific />}></Route>
      <Route exact path='/Tax' element={<TaxCalculator />}></Route>
      <Route exact path = '/Data' element={<Data />}></Route>
    </Routes>
    </Router>
    </div>
    </>
  );
}
export default App;
