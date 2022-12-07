import React from 'react'
import '../styles/PizzaItem.css'
import {BiUpArrow, BiDownArrow} from 'react-icons/bi'
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/cartRedux'
import { useNavigate } from 'react-router'

const PizzaItem = (props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1);
  const handleCart = () => {
      dispatch(addToCart({...props.pizza, quantity}));
  }
  // console.log(props.pizza)
  const navigate = useNavigate();
  const handlePizzaClick = () => {
    navigate(`/pizza/${props.pizza.title.toLowerCase()}`, {state:{...props.pizza}})
  }
  return (
    <div className='pizzaItem-container' onClick={handlePizzaClick}>
        <img src={props.pizza.image} alt="Pizza" />
        <h3>{props.pizza.title}</h3>
        <p>{props.pizza.desc}</p>
        <h3>₹{props.pizza.price}</h3>
        <button>
            <p onClick={handleCart}>Add to cart</p>
            <div className="quantity">
                <p>{quantity}</p>
                <div className="quantity-controls">
                    <div
                      onClick={() => {setQuantity(quantity + 1)}}>
                        <BiUpArrow />
                    </div>
                    <div
                      onClick={() => {quantity > 1 && setQuantity(quantity - 1)}}>
                        <BiDownArrow />
                    </div>
                </div>
            </div>
        </button>
    </div>
  )
}

export default PizzaItem
