import React from 'react'
import '../styles/PizzaItem.css'

const PizzaItem = (props) => {
  return (
    <div className='pizzaItem-container'>
        <img src={props.pizza.pizzaImg} alt="Pizza" />
        <h3>{props.pizza.pizzaTitle}</h3>
        <p>{props.pizza.pizzaDesc}</p>
        <h3>₹{props.pizza.pizzaPrice}</h3>
        <button>Add to cart</button>
    </div>
  )
}

export default PizzaItem
