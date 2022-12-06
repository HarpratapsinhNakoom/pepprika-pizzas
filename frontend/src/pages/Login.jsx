import React, { useEffect } from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'
import { RiAdminFill } from 'react-icons/ri'
import { AiOutlineShopping } from 'react-icons/ai'
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/apiCalls'
import {useDispatch, useSelector} from 'react-redux'

const Login = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = React.useState("customer");
  
  const {isFetching, error} = useSelector(state => state.user);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const handleUserType = () => {
    if (userType === "customer") {
      setUserType("admin");
    } else {
      setUserType("customer");
    }
  }

  const handleLogin = (e) => {
      e.preventDefault();
      login(dispatch, {email, password});
      if(error) {
        navigate("/");
      }
  }

  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [user])


  return (
    <div className='login-container'>
      <div className='login-image-container'>
        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/cartoon-pizza-slices-italian-food-gifts-licensed-art.jpg" alt="Pizza boy" className='login-image' />
      </div>
      <div className="login-box">
        <h1 className="login-title">Log In</h1>
        <div className="customer-admin">
          <div
            className={`icon-part ${userType === "customer" ? "selected" : ""}`}
            onClick={handleUserType}>
            <AiOutlineShopping className='login-icons' />
            <p>Customer</p>
          </div>
          <div
            className={`icon-part ${userType === "admin" ? "selected" : ""}`}
            onClick={handleUserType}>
            <RiAdminFill className='login-icons' />
            <p>Admin</p>
          </div>
        </div>
        <div className="input-elements">
          <label htmlFor="email">Email address</label>
          <input
              type="email"
              id="email"
              name='email'
              onChange={(e) => {setEmail(e.target.value)}}
              />
          <label htmlFor="password">Password</label>
          <input
              type="password"
              name="password"
              id='password'
              onChange={(e) => {setPassword(e.target.value)}}
              />
        </div>
        <button
            className='submit-btn btn'
            onClick={handleLogin}
            disabled={isFetching}>Log in</button>
        {error && <p
                    style={
                      {color:"salmon",
                      margin:"40px 0",
                      fontSize:"25px"}}>Uh oh! Something went wrong</p>}
        <GoogleButton onClick={handleGoogleSignIn} />

        <p>Don't have an account? <Link to="/signup">Sign up</Link> </p>
      </div>
    </div>
  )
}

export default Login
