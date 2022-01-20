import React from 'react';
import './SideMenu.css';
import Menu from '../Menus/Menu';

const Menus=[
'Feed','Profile','TimeLine','My Applications','About Us','Contact Us'
];
function SideMenu(props)
{
    const menuSelectionHandler = (menuName) => {
        // console.log(menuName)
        props.onMenuSelect(menuName);
    }
    
    return(
        <div className='menu-bar'>
            {Menus.map((menu , index )=> <Menu title={menu} key={index} onSelect={menuSelectionHandler} />)}
        </div>
    );
}

export default SideMenu;