import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import css from '../NavBar/NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../Images/logo.png';
import {NavLink} from 'react-router-dom';

const NavBar = () => {

    return(
        <header>
            <Navbar bg="light" variant="light" className="shadow px-5">
            <NavLink to={'/'}  className="container-logo">
            <img className="logo" src={logo} alt="" />
            </NavLink>
            <Nav className="mr-auto">
                <NavLink to='/Malbec' activeClassName='claseActiva' className="navbar-item">Malbec</NavLink>
                <NavLink to='/Merlot' activeClassName='claseActiva' className="navbar-item" >Merlot</NavLink>
                <NavLink to='/Bonarda' activeClassName='claseActiva' className="navbar-item">Bonarda</NavLink>
                <NavLink to='/Cabernet' activeClassName='claseActiva' className="navbar-item">Cabernet</NavLink>
                <NavLink to='/Chardonnay' activeClassName='claseActiva' className="navbar-item">Chardonnay</NavLink>
            </Nav>
            <NavLink to='/Cart' activeClassName='claseActiva' className='navbar-item'>
                <CartWidget/> 
            </NavLink> 
            </Navbar>
        </header>
    )
    

}

export default NavBar