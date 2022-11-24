import React from 'react'
import '../styles/Navbar.css'
import { BsCart, BsInstagram, BsGithub } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'


function NavbarComponent() {
    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='navbar-container'>
            <div className="navbar-left">
                <Link to="/" className="navbar-title">𝒫𝑒𝓅𝓅𝓇𝒾𝓀𝒶 𝒫𝒾𝓏𝓏𝒶𝓈</Link>
            </div>
            <div className="navbar-center">
                <div className="navbar-center-side">
                    <Link to="/menu">Menu</Link>
                </div>
                <div className="navbar-center-side">
                    {user?.displayName ? (
                        <>

                            <button onClick={handleSignOut}>LogOut</button>
                            <h1>Welcome {user?.displayName}</h1>
                            <Link to="/cart" style={{ fontSize: "32px" }}><BsCart /></Link>
                        </>
                    ) : (
                        <>
                            <Link to='/login'>Sign In</Link>
                            <Link to="/signup">Sign up</Link>
                        </>
                    )}
                    {/* <Link to="/login">Log in</Link> */}
                </div>
            </div>
            {/* <div className="navbar-right">
                <Link to="/"><BsGithub /></Link>
                <Link to="/"><CiLinkedin /></Link>
                <Link to="/"><BsInstagram /></Link>
            </div> */}
        </div>
    );
}

export default NavbarComponent;
