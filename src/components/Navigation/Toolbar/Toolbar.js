import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';
const toolbar = (props)=>(
   <header className={classes.Toolbar}>
    <div className={classes.MenuLogo}><Logo/></div>
    <nav>
        <Navigation/>
    </nav>
    <div className={classes.MenuItem}>MENU</div>
    

   </header>
);

export default toolbar;