import React from 'react'
import CartItem from '../components/CartItem'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {TfiHandPointRight} from 'react-icons/tfi'
import '../styles/Cart.css'
import {useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../requestMethods'
import {useNavigate, useNavigation} from 'react-router'

function Cart() {
    const KEY = process.env.REACT_APP_STRIPE;
    console.log(KEY)
    const cart = useSelector(state => state.cart);

    const navigate = useNavigate();
    
    const showCartItems = cart.pizzaList.map((item, index) => {
        return(
            <CartItem key={index} pizza={item}/>
        );
    })

    const [stripeToken, setStripeToken] = React.useState(null);
    const onToken = (token) => {
        setStripeToken(token);
    }

    React.useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("http://localhost:5000/api/checkout/payment", {
                    tokenId : stripeToken.id,
                    amount : cart.totalPrice*100
                })
                navigate("order-tracking")
            }catch(err) {
                console.log(err)
            }
        }

        makeRequest();
    }, [stripeToken, cart.totalPrice])
    return (
        <div id='cart'>
            <Header />
                <div className="cart-title">𝒞𝒜𝑅𝒯</div>
                <div className="cart-items-container">
                    {cart.pizzaList && showCartItems}
                    {!cart.pizzaList && <>
                        <h1>Add something to cart</h1>
                    </>}
                </div>
                <div className="total-cost">
                    Total Payable : ₹{cart.totalPrice}
                </div>
                {/* <div className="payment-options">
                    <h2>Payment options</h2>
                    <div className="option-container">
                        <div className="cod">
                            <img src="https://cdn-icons-png.flaticon.com/512/6491/6491490.png" alt="cash on delivery" />
                            <p>Cash on delivery</p>
                        </div>
                        <div className="card">
                            <img src="https://cdn-icons-png.flaticon.com/512/4341/4341764.png" alt="card" />
                            <p>Credit card</p>
                        </div>
                    </div>
                </div> */}
                <div className="address-container">
                    {/* <input type="text" className='address' placeholder='Your address' /> */}
                    <StripeCheckout
                        name='Pepprika Pizzas'
                        billingAddress
                        shippingAddress
                        description={`Your total is ₹${cart.totalPrice}`}
                        amount={cart.totalPrice*100}
                        token={onToken}
                        stripeKey={KEY}>
                        <button className='checkout_btn'>
                            Place order <TfiHandPointRight />
                        </button>
                    </StripeCheckout>
                </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Cart