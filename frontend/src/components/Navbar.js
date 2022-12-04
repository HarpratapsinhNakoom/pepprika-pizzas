import React from 'react'
import '../styles/Navbar.css'
import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'
import {useSelector} from 'react-redux'
import {GoThreeBars} from 'react-icons/go'
import {GiTireIronCross} from 'react-icons/gi'

function NavbarComponent() {
    const { user, logOut } = UserAuth();
    const navRef = React.useRef();

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }

    const handleToggle = () => {
        navRef.current.classList.toggle('navbar-responsive');
    }
    const quantity = useSelector(state => state.cart.quantity)

    return (
        <div className='navbar-container'>
            <div className="navbar-left">
                <Link to="/" className="navbar-title">𝒫𝑒𝓅𝓅𝓇𝒾𝓀𝒶 𝒫𝒾𝓏𝓏𝒶𝓈</Link>
            </div>
            <div className="navbar-center" ref={navRef}>
                <div className="navbar-center-side">
                    <Link to="/menu">Menu</Link>
                </div>
                <div className="navbar-center-side navbar-center-side-right">
                    {user?.displayName ? (
                        <>

                            <button onClick={handleSignOut}>LogOut</button>
                            <h1>Welcome {user?.displayName}</h1>
                            {/* <Link to="/cart" style={{ fontSize: "32px" }}><BsCart /></Link> */}
                        </>
                    ) : (
                        <>
                            <Link to='/login'>Sign In</Link>
                            <Link to="/signup">Sign up</Link>
                        </>
                    )}
                    <Link to="/cart" style={{ fontSize: "32px" }}><BsCart /> {quantity}</Link>
                    {/* <Link to="/login">Log in</Link> */}
                    <GiTireIronCross className='toggleBtn closeBtn' onClick={handleToggle}/>
                </div>
            </div>
            
            <div className="navbar-right">
                <GoThreeBars className='toggleBtn showBtn' onClick={handleToggle}/>
            </div>
            
        </div>
    );
}

export default NavbarComponent;
