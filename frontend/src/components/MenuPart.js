import React from 'react'
import '../styles/MenuPart.css'
export default function MenuPart() {
  return (
    <>
      <div className="box">
        <div className='container'>
        <h3>PIZZA OF THE MONTH</h3>
        <h1>THE BIG BIRD</h1>
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
          <div className="btn">
             <button id='bt1'><strong>ORDER ONLINE NOW</strong></button>
              <button id='bt2'><strong>SEE OUR MENU</strong></button>
          </div>
        
         
        </div>
      </div>
    </>

  )
}

