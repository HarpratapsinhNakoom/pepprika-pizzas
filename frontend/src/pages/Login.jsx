import React from 'react'
import '../styles/Login.css'

const Login = () => {
  return (
    <div className='login-container'>
        <div className='login-image-container'>
            <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/cartoon-pizza-slices-italian-food-gifts-licensed-art.jpg" alt="Pizza boy" className='login-image'/>
        </div>
        <div className="login-box">
            <h1 className="login-title">Log In</h1>
            <div className="input-elements">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" name='email'/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id='password' />
            </div>
            <button className='submit-btn btn'>Log in</button>
        </div>
    </div>
  )
}

export default Login
