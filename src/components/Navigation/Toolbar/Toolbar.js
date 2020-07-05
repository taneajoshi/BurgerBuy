import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';
import Menu from '../../Menu/Menu';
const toolbar = (props)=>(
   <header className={classes.Toolbar}>
    <div className={classes.MenuLogo}>
        <div className={classes.MenuLogo}> <Logo/></div>
        </div>
    <nav className={classes.DesktopOnly}> 
        <Navigation/>
    </nav>
    <div><Menu className={classes.MobileOnly} clicked={props.MenuClicked}/></div>
    

   </header>
);

export default toolbar;