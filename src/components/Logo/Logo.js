import React from "react";
import "./Logo.css";
import logoImage from "../../public/images/burgerlogo.png";

const logo = (props) => {
    return <div className="Logo"> 
        <img src={logoImage} alt="MyBurger"/>
    </div>
}

export default logo;
