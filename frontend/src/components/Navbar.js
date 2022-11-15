import React from 'react'
import '../styles/Navbar.css'
import { BsCart , BsInstagram , BsGithub } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'

function NavbarComponent() {
    return (
        <div className='navbar-container'>
            <div className="navbar-left">
                <div className="navbar-title">𝒫𝑒𝓅𝓅𝓇𝒾𝓀𝒶 𝒫𝒾𝓏𝓏𝒶𝓈</div>
            </div>
            <div className="navbar-center">
                <div className="navbar-center-side">
                    <p>Our Menu</p>
                    <p>About</p>
                </div>
                <div className="navbar-center-side">
                    <p>Login</p>
                    <p>Signup</p>
                    <p><BsCart /></p>
                </div>
            </div>
            <div className="navbar-right">
                <BsGithub />
                <CiLinkedin />
                <BsInstagram />
            </div>
        </div>
    );
}

export default NavbarComponent;
