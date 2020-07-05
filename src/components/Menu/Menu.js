import React from 'react';
import MenuLogo from '../../assets/images/menu.png';
import classes from './Menu.css';
const Menu =(props)=>{
    let classList =[classes.Menu, classes.MobileOnly];
    return(
    <div onClick={props.clicked} className={classList.join(' ')} >
    <img src={MenuLogo} alt={MenuLogo}/>
</div>
)}

export default Menu;