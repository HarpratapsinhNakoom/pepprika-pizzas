import React from 'react'
import {BiUpArrow, BiDownArrow} from 'react-icons/bi'
import '../styles/CartItem.css'

const CartItem = (props) => {
    const [quantity, setQuantity] = React.useState(1);
    
  return (
    <div className="cart-item">
        <div className="cart-pizza">
            <img src={props.pizza.pizzaImg} alt="pizza" className='pizza-img' />
            <div className="pizza-info">
                <div className="pizza-title">{props.pizza.pizzaTitle}</div>
                <div className="pizza-size">Small - 30cm</div>
            </div>
        </div>
        <div className="cost-info">
            <div className="quantity-control">
                <div className="quantity-inc"
                onClick={() => {setQuantity(quantity + 1)}}>
                    <BiUpArrow />
                </div>
                <div className="quantity-dec"
                onClick={() => {
                    if(quantity > 1) {
                        setQuantity(quantity - 1)
                    }
                }}>
                    <BiDownArrow />
                </div>
                <div className="quantity">
                    {quantity}
                </div>
            </div>
            <div className="cost">₹{quantity*props.pizza.pizzaPrice}</div>
        </div>
    </div>
  )
}

export default CartItem
