import React from "react";

//Links of Unit Conversion components are together in this component

//https://blog.hubspot.com/website/html-dropdown (Basic principles used are the same)
//added window.onclick for closing dropdown menu when clicking anywhere outside of it
//also added a toggle to open/close dropdown menu, instead of via hover
function Conversion() {
  window.onclick = function(event) {
    if (!event.target.matches('.dbutton')) {
      var dropdowns = document.getElementsByClassName("dropdown-options");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  return (
    <>
      <div class="dropdown-menu">
        <button onClick={function() { document.getElementById("myDropdown").classList.toggle("show"); }} class = "dbutton">Conversions </button>
        <div id= "myDropdown" class="dropdown-options">
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
