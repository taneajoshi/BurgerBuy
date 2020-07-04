import React from 'react';
import classes from './Button.css';
const button = (props) =>(
<button 
className={[classes.Button, classes[props.btnType]].join(' ')} //join is used to convert array od items into list of strings.
onClick={props.clicked}>{props.children}</button>
);

export default button;