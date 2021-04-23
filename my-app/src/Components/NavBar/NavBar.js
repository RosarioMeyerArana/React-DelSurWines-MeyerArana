import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import css from '../NavBar/NavBar.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../Images/logo.png';

const NavBar = () => {

    return(
        <header>
            <Navbar bg="light" variant="light" className="shadow px-5">
            <div className="container-logo">
            <img className="logo" src={logo} alt="" />
            </div>
            <Nav className="mr-auto">
                <Nav.Link href="#home" className="navbar-item">Nosotros</Nav.Link>
                <Nav.Link href="#features" className="navbar-item" >Contacto</Nav.Link>
                <Nav.Link href="#pricing" className="navbar-item" >Shop</Nav.Link>
            </Nav>
            <CartWidget/>
            </Navbar>
        </header>
    )
    

}

export default NavBar