import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxilary/Auxilary";

const sideDrawer = (props) => {

    let attachedClasses = ["SideDrawer", "Close"];
    if(props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className="Logo">
                    <Logo />
                </div>            
                <nav> 
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;