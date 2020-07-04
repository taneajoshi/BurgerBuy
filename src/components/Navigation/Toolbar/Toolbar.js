import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
const toolbar = (props)=>(
   <header className={classes.Toolbar}>
      <div className={classes.MenuLogo}><Logo/></div>
      <div className={classes.MenuItem}>MENU</div>
      <nav>
          ...
      </nav>

   </header>
);

export default toolbar;