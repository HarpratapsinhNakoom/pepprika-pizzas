import React from 'react'
import {BiUpArrow, BiDownArrow} from 'react-icons/bi'
import {GiTireIronCross} from 'react-icons/gi'
import '../styles/CartItem.css'
import {useDispatch} from 'react-redux';
import { removeItem, updateQuantity} from '../redux/cartRedux';
import toast from 'react-hot-toast';

const CartItem = (props) => {
    const dispatch = useDispatch();

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
                <div className="quantity-inc">
                    <BiUpArrow onClick={() => {
                        dispatch(updateQuantity({...props.pizza, inc : true}))
                        }}/>
                </div>
                <div className="quantity-dec">
                    <BiDownArrow 
                    onClick={() => {
                        if(props.pizza.quantity > 1){
                            dispatch(updateQuantity({...props.pizza, inc : false}))
                        }
                    }}
                    />
                </div>
                <div className="quantity">
                    {props.pizza.quantity}
                </div>
            </div>
            <div className="cost">₹{props.pizza.price*props.pizza.quantity}</div>
            <div className="remove-pizza">
                <GiTireIronCross onClick={() => {
                    dispatch(removeItem({...props.pizza}));
                    toast.success("Removed from Cart", 
                    {
                        style :{
                            color : 'salmon'
                        }
                    })
                    }
                }/>
            </div>
        </div>
    </div>
  )
}

export default CartItem
