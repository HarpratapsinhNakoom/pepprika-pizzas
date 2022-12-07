import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MenuPart.css'

const MenuPart = () => {
  return (
    <div className='menupart-container'>
        <div className="text-part">
            <div className="best-pizza-title">
                <span style={{color : "salmon"}}>PIZZA</span> OF THE MONTH
            </div>
            <div className="best-pizza-subtitle">
                THE BIG <span style={{color : "salmon"}}>BIRD</span>
            </div>
            <div className="ingredients-list">
                <div id='item1'>
                  <ul>
                    <li>BREADED CHHICKEN</li>
                    <li>BBQ RANCH SAUCE</li>
                    <li>BACON</li>
                    <li>MOZZARELLA</li>
                  </ul>
                </div>
                <div id='item2'>
                  <ul>
                    <li>CARAMELIZED ONIONS</li>
                    <li>CHEDDAR</li>
                    <li>ROMANO</li>
                  </ul>
                </div>
            </div>
            <div className="button-container">
                <Link to="/menu" id='btn'><strong>ORDER ONLINE NOW</strong></Link>
                <Link to="/menu" id='btn'><strong>SEE OUR MENU</strong></Link>
            </div>
        </div>
        <div className="img-part">
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" />
        </div>
    </div>
  )
}

export default MenuPart