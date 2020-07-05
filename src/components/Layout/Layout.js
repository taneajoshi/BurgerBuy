import React, { Component } from 'react';
import Aux from '../../hoc/aux'
import classes from './Layout.css'
import Toolbar  from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSideDrawer: false
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false});
    }
    MenuClickedHandler=()=>{
        this.setState((prevState)=>{
           return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
    render(){
        return(
            <Aux>
            <SideDrawer 
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}/>
            <Toolbar MenuClicked={this.MenuClickedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
            </Aux>
        )
    }
}

export default Layout;

