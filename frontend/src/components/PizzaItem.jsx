import React from 'react'
import '../styles/PizzaItem.css'

const PizzaItem = (props) => {
  return (
    <div className='pizzaItem-container'>
        <img src={props.pizza.image} alt="Pizza" />
        <h3>{props.pizza.title}</h3>
        <p>{props.pizza.desc}</p>
        <h3>₹{props.pizza.price}</h3>
        <button>Add to cart</button>
    </div>
  )
}

export default PizzaItem
