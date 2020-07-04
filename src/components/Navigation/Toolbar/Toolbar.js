import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';
const toolbar = (props)=>(
   <header className={classes.Toolbar}>
    <div className={classes.MenuLogo}>
        <div className={classes.MenuLogo}> <Logo/></div>
        </div>
    <nav>
        <Navigation/>
    </nav>
    <div>MENU</div>
    

   </header>
);

export default toolbar;