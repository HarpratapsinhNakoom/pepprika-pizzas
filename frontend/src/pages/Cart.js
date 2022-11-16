import React from 'react'
import CartItem from '../components/CartItem'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { cartData } from '../data/homeData'
import '../styles/Cart.css'

function Cart() {
    const showCartItems = cartData.map((item, index) => {
        return(
            <CartItem key={index} pizza={item}/>
        );
    })
    return (
        <div
        style={{marginTop : "150px"}}>
            <Header />
                <div className="cart-title">CART</div>
                <div className="cart-items-container">
                    {showCartItems}
                </div>
                <div className="total-cost"></div>
                <div className="payment-options"></div>
                <div className="address-container"></div>
            <Footer />
        </div>
    )
}

export default Cart