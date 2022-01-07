import React from 'react';
import './SideMenu.css';
import Menu from '../Menus/Menu';

const Menus=[
'Feed','Profile','TimeLine','My Applications','About Us','Contact Us'
];
function SideMenu()
{
    const menuSelectionHandler = (menuName) => {
        console.log(menuName);
    }
    
    return(
        <div className="sidebar">
            {Menus.map((menu , index )=> <Menu title={menu} key={index} onSelect={menuSelectionHandler} />)}
        </div>
    );
}

export default SideMenu;