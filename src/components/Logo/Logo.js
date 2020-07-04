import React from 'react';
import classes from './Logo.css'
import BurgerLogo from "../../assets/images/logo.png";
const logo = (props) =>(
    <div className={classes.Logo} >
        <img src={BurgerLogo} alt={BurgerLogo}/>
    </div>
)

export default logo;