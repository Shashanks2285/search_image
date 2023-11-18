import React from "react";
import {NavLink} from "react-router-dom"

const Menu = ()=>{
    return (
        <>  <div className="menu_style">
            <NavLink className={( {isActive} ) => {return isActive ? 'active_class' : '';}} 
            to ="/" >About me</NavLink>
            <NavLink className={( {isActive} ) => {return isActive ? 'active_class' : '';}} 
            to="/services">Services</NavLink>
            <NavLink className={( {isActive} ) => {return isActive ? 'active_class' : '';}} 
            to="/search">Search</NavLink>
            <NavLink className={( {isActive} ) => {return isActive ? 'active_class' : '';}} 
            to="/contact">Contact me</NavLink>
            
            </div>
        </>
    );
}

export default Menu;