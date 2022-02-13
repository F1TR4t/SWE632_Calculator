import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import Conversion from "./Components/Conversion/Conversion";

//This and Sidebar.css are modified from tutorial here: https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar

export default props => {
  return (
    <Menu>
    <a className ="menu-item" href="/">Simple Calculator</a>
    <Conversion></Conversion>    
    </Menu>
  );
};
