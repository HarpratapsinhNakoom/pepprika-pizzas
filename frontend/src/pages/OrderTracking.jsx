import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/OrderTracking.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { orderData } from '../data/homeData'

const OrderTracking = () => {
    const currentStatus = 2;
    const getStatus = (index) => {
        const val = index - currentStatus;
        if(val < 0) {
            return "done"
        }
        else if(val === 0) {
            return"ongoing"
        }
        else {
            return "waiting"
        }
    }
    const showStatus = orderData.map((item, index) => {
        return (
            <div key={index} className={getStatus(index + 1)}>
                <img src={item.image} className='order-icons' alt='payment'/>
                <p>{item.title}</p>
                <AiOutlineCheckCircle style={{
                    display : `${getStatus(index + 1) === "done" ? "block" : "none"}`,
                    color : "green",
                    fontSize : "30px"}}/>
            </div>
        );
    })
  return (
    <div
    className='order-tracking-container'>
        <Header />
        <div className="user-details">
            <div>
                <h3>Order ID</h3>
                <p>234842174</p>
            </div>
            <div>
                <h3>Customer</h3>
                <p>Harpratapsinh Nakoom</p>
            </div>
            <div>
                <h3>Address</h3>
                <p>1, Cityligh Society, Surat.</p>
            </div>
            <div>
                <h3>Total</h3>
                <p>₹795</p>
            </div>
        </div>
        <div className="order-status">
            <h1>Current Status</h1>
            <div className='status-icon-container'>{showStatus}</div>
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default OrderTracking
