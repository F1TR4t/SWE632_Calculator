import React from "react";

//Links of Unit Conversion components are together in this component
function Conversion() {
  return (
    <>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;Unit Conversion
        <li>
        <a className ="menu-item" href="/Length">Length</a>
        </li>
        <li>
        <a className ="menu-item" href="/Mass">Mass/Weight</a>
        </li>
        <li>
        <a className ="menu-item" href="/Temperature">Temperature</a>
        </li>
        <li>
        <a className ="menu-item" href="/Speed">Speed</a>
        </li>
        <li>
        <a className ="menu-item" href="/Volume">Volume</a>
        </li>
        <li>
        <a className ="menu-item" href="/Data">Data</a>
        </li>
      </div>
    </>
  );
}
export default Conversion;