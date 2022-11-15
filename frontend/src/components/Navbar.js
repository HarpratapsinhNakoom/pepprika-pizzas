import React from 'react'
import '../styles/Navbar.css'
import { BsCart , BsInstagram , BsGithub } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <div className='navbar-container'>
            <div className="navbar-left">
                <div className="navbar-title">𝒫𝑒𝓅𝓅𝓇𝒾𝓀𝒶 𝒫𝒾𝓏𝓏𝒶𝓈</div>
            </div>
            <div className="navbar-center">
                <div className="navbar-center-side">
                    <Link to="/menu">Our Menu</Link>
                    <Link to="#about">About</Link>
                </div>
                <div className="navbar-center-side">
                    <Link to="/login">Log in</Link>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/"><BsCart /></Link>
                </div>
            </div>
            <div className="navbar-right">
                <Link to="/"><BsGithub /></Link>
                <Link to="/"><CiLinkedin /></Link>
                <Link to="/"><BsInstagram /></Link>
            </div>
        </div>
    );
}

export default NavbarComponent;
