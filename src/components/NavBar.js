import React from 'react';
import '../styles/globalstyles.css';
// import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import useWindowDimensions from '../components/WindowDimensions'
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Navbar expand="lg" style={{backgroundColor: '#cc7a00'}}>
            <Link to='/'>
                <Navbar.Brand stlye={{color: 'white'}}>Home</Navbar.Brand>
            </Link>
            <Link to='completed'>
                <Navbar.Brand stlye={{color: 'white'}}>Completed</Navbar.Brand>
            </Link>
            <Link to='/ongoing'>
                <Navbar.Brand stlye={{color: 'white'}}>Ongoing</Navbar.Brand>
            </Link> 
            <Link to='/entertainment'>
                <Navbar.Brand stlye={{color: 'white'}}>Home</Navbar.Brand>
            </Link>
        </Navbar>
        
    )
}

export default NavBar;