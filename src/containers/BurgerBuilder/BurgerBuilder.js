import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

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
        totalPrice:4, //Base Price
        purchasable: false,
        purchasing:false,
        loading: false
    }

    updatePurchaseState(ingredients    ){
          
          const sum = Object.keys(ingredients).map(igKey=>{
              return ingredients[igKey];
          }).reduce((sum,el)=>{
              return sum+el;
          },0);
          this.setState({purchasable: sum>0});
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
     this.updatePurchaseState(updatedIngredients); 
      
    }
    purchaseHandler =()=>{
        this.setState({purchasing: true});

    }
    purchaseCancelHandler =()=> {
        this.setState({purchasing:false})
    }
    purchaseContinueHandler=()=>{
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer:{
                name: 'Tanea Joshi',
                address:{
                    street: 'JustaTeststreet 1',
                    zipCode: '263139',
                    country: 'India'
                },
                email:'tanea@gmail.com'
            },
            deliveryMethod: 'fastest'
        }

       axios.post('/orders.json', order)
       .then(res => console.log(res))
       .catch(error=> console.log(error));

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
     this.updatePurchaseState(updatedIngredients); 
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo)
        {
            disabledInfo[key]= disabledInfo[key]<=0
        }

        let orderSummary =  <OrderSummary ingredients={this.state.ingredients}
        purchaseContinued={this.purchaseContinueHandler} 
        price={this.state.totalPrice}
        purchaseCancelled={this.purchaseCancelHandler}
         />;
        if(this.state.loading){
            orderSummary = <Spinner/>
         
        }
        
        return (
            <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
               {orderSummary}
            </Modal> 
             <Burger ingredients={this.state.ingredients}/>
             <BuildControls 
             ingredientAdded= {this.addIngredientHandler}
             ingredientRemoved= {this.removeIngredientHandler}
              disabled={disabledInfo}
              purchasable={this.state.purchasable}
              price={this.state.totalPrice}
              ordered={this.purchaseHandler}
              />
            </Aux>
        );
    }
}

export default BurgerBuilder;