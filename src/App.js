import Length from "./Components/Conversion/Length";
import Mass from "./Components/Conversion/Mass";
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
    <Router>
    <Link to ="/">Length</Link>
    <br></br>
    <Link to = "/Mass">Mass</Link>
    <Routes>
      <Route exact path = '/' element={<Length />}></Route>
      <Route exact path = '/Mass' element={<Mass />}></Route>
    </Routes>

      </Router>
      </>
  );
}
export default App;