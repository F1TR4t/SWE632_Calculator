import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../Sidebar.css';
import Conversion from "./Conversion/Conversion";

//This and Sidebar.css are modified from tutorial here: https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar

const Sidebar = () => {
  return (
    <div>
      <h1 className='menu-header'>Menu</h1>
      <Menu>
          <a className="menu-item" href="/">Simple Calculator</a>
          <a className="menu-item2" href="/Scientific">Scientific Calculator</a>
          <a className="menu-item3" href="/Tax">Tax Calculator</a>
      <Conversion></Conversion>    
      </Menu>
    </div>
  );
};
export default Sidebar;