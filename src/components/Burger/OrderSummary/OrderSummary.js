import React from 'react';
import Aux from '../../../hoc/aux'
import Button from '../../UI/Button/Button';
const orderSummary = (props)=>{
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey=>{
      return(
          <li key={igKey}>
              <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
              </li>
      )
  })
  return(
<Aux>
    <h3>YOUR ORDER</h3>
    <p>Checkout to grab your delicious burger!</p>
    <ul>
        {ingredientSummary}
    </ul>
    <p>Press continue to checkout</p>
    <Button
    btnType="Danger"  clicked={props.purchaseCancelled}
    > Cancel</Button>
    <Button btnType="Success" clicked={props.purchaseContinued}
    >Continue</Button>

</Aux>
  )
}; 

export default orderSummary;