import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'
import {RiAdminFill} from 'react-icons/ri'
import {AiOutlineShopping} from 'react-icons/ai'

const Login = () => {
  const [userType, setUserType] = React.useState("customer");

  const handleUserType = () => {
      if (userType === "customer") {
          setUserType("admin");
      }else {
        setUserType("customer");
      }


  }
  return (
    <div className='login-container'>
        <div className='login-image-container'>
            <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/cartoon-pizza-slices-italian-food-gifts-licensed-art.jpg" alt="Pizza boy" className='login-image'/>
        </div>
        <div className="login-box">
            <h1 className="login-title">Log In</h1>
            <div className="customer-admin">
                <div
                  className={`icon-part ${userType === "customer" ? "selected" : ""}`}
                  onClick={handleUserType}>
                    <RiAdminFill className='login-icons'/>
                    <p>Customer</p>
                </div>
                <div 
                  className={`icon-part ${userType === "admin" ? "selected" : ""}`}
                  onClick = {handleUserType}>
                    <AiOutlineShopping className='login-icons'/>
                    <p>Admin</p>
                </div>
            </div>
            <div className="input-elements">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" name='email'/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id='password' />
            </div>
            <button className='submit-btn btn'>Log in</button>
            <p>Don't have an account? <Link to="/signup">Sign up</Link> </p>
        </div>
    </div>
  )
}

export default Login
