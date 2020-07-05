import React from 'react';
import MenuLogo from '../../assets/images/menu.png';
import classes from './Menu.css';
const Menu =(props)=>(
    <div onClick={props.clicked} className={classes.Menu} >
    <img src={MenuLogo} alt={MenuLogo}/>
</div>
);

export default Menu;