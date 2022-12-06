import React from 'react'
import {BiUpArrow, BiDownArrow} from 'react-icons/bi'
import {GiTireIronCross} from 'react-icons/gi'
import '../styles/CartItem.css'
// import {useDispatch} from 'react-redux';
// import {updateQuantity} from '../redux/cartRedux';

const CartItem = (props) => {
    // const dispatch = useDispatch();

    // const handleUpdate = () => {
    //     dispatch(updateQuantity());
    // }
  return (
    <div className="cart-item">
        <div className="cart-pizza">
            <img src={props.pizza.image} alt="pizza" className='pizza-img' />
            <div className="pizza-info">
                <div className="pizza-title">{props.pizza.title}</div>
                <div className="pizza-size">Small - 30cm</div>
            </div>
        </div>
        <div className="cost-info">
            <div className="quantity-control">
                <div className="quantity-inc"
                //  onClick={handleUpdate}
                 >
                    <BiUpArrow />
                </div>
                <div className="quantity-dec">
                    <BiDownArrow 
                    // onClick={() => {
                    //     if(props.pizza.quantity > 1){
                    //         dispatch(updateQuantity({pizza : props.pizza, inc : false}))
                    //     }
                    // }}
                    />
                </div>
                <div className="quantity">
                    {props.pizza.quantity}
                </div>
            </div>
            <div className="cost">₹{props.pizza.price*props.pizza.quantity}</div>
            <div className="remove-pizza">
                <GiTireIronCross />
            </div>
        </div>
    </div>
  )
}

export default CartItem
