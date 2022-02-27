import React from "react";

//Links of Unit Conversion components are together in this component

//https://blog.hubspot.com/website/html-dropdown (Basic principles used are the same)
function Conversion() {
  return (
    <>
      <div class="dropdown-menu">
        <button class = "dbutton">Conversions</button>
        <div class="dropdown-options">
          <a href="/Length">Length</a>
          <a href="/Mass">Mass/Weight</a>
          <a href="/Temperature">Temperature</a>
          <a href="/Speed">Speed</a>
          <a href="/Volume">Volume</a>
          <a href="/Data">Data</a>
        </div>
      </div>
    </>
  );
}
export default Conversion;
