import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
    <header className="Toolbar"> 
        <div onClick={props.click} className="DrawerToggle"> 
            <div> </div>
            <div> </div>
            <div> </div>
        </div>
        <div className="Logo"> 
            <Logo />
        </div>    
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;