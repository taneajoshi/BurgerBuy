import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:.3,
    bacon:0.7
};

class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // } This is old way
    state= {
        ingredients : {
            salad: 0,
            bacon:0,
            cheese:0,
            meat:0

        },
        totalPrice:4 //Base Price
    }


    addIngredientHandler = (type)=>{
     const oldCount = this.state.ingredients[type];
     const updatedCount = oldCount+1;
     const updatedIngredients= {
         ...this.state.ingredients //To distribute the pops of old ingredient sate into this new object.
     };
     //Update Count
     updatedIngredients[type]= updatedCount;
     //Update Price
     const priceAddition = INGREDIENT_PRICES[type];
     const oldPrice = this.state.totalPrice;
     const newPrice = oldPrice+priceAddition;
     this.setState({totalPrice: newPrice, ingredients: updatedIngredients}); 
      
    }
    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients= {
            ...this.state.ingredients //To distribute the pops of old ingredient sate into this new object.
        };
        updatedIngredients[type]= updatedCount;
     //Update Price
     const priceDeduction = INGREDIENT_PRICES[type];
     const oldPrice = this.state.totalPrice;
     const newPrice = oldPrice-priceDeduction;
     this.setState({totalPrice: newPrice, ingredients: updatedIngredients}); 

    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo)
        {
            disabledInfo[key]= disabledInfo[key]<=0
        }
        
        return (
            <Aux>
             <Burger ingredients={this.state.ingredients}/>
             <BuildControls 
             ingredientAdded= {this.addIngredientHandler}
             ingredientRemoved= {this.removeIngredientHandler}
              disabled={disabledInfo}
              
              />
            </Aux>
        );
    }
}

export default BurgerBuilder;