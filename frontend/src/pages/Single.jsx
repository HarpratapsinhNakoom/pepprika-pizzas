import React from 'react';
import '../styles/Single.css';
import {BiUpArrow, BiDownArrow} from 'react-icons/bi'
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/cartRedux'
import Header from '../components/Header';
import { useLocation } from 'react-router';


export default function Single() {
    const location = useLocation();
    const pizzaInfo = location.state;

    const dispatch = useDispatch();
    const [quantity, setQuantity] = React.useState(1);

    const handleCart = () => {
        dispatch(addToCart({ ...pizzaInfo, quantity}));
    }
    return (
        <>
            <Header />
            <div className='single-pizza-container'>
                <div className='single-pizza-image'>
                    <img src={pizzaInfo.image} alt='Pizza' />
                </div>
                <div className='single-pizza-info'>
                    <div className='single-pizza-title'>
                        {pizzaInfo.title}
                    </div>
                    <div className='single-pizza-ingredients'>
                        <div className="ingredients-title">Compounds</div>
                        <div className="ingredients-list">
                            {pizzaInfo.desc}
                        </div>
                    </div>
                    <div className='single-pizza-price'>
                    ₹{pizzaInfo.price}
                    </div>
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
            </div>
        </>
    )
}