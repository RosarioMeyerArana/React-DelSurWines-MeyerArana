import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import css from '../NavBar/NavBar.css';
import Button from 'react-bootstrap/Button';
import logo from '../../Images/logo.png';

const NavBar = () => {

    return(
        <header>
        <nav className="navbar">
            <div className="container-logo">
            <img className="logo" src={logo} alt="" />
            </div>

            <ul className="navbar-item-container">
                <li className="navbar-item">Nosotros</li>
                <li className="navbar-item">Bodegas</li>
                <li className="navbar-item">Contacto</li>
                <li className="navbar-item">Shop</li>
            </ul>

            <CartWidget/>

        </nav>
        </header>
    )
    

}

export default NavBar