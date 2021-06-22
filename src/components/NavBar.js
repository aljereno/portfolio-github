import React from 'react';
import '../styles/globalstyles.css';
import Navbar from "react-bootstrap/Navbar";
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Navbar expand="lg" sticky="top" style={{backgroundColor: '#E5AA70', display: 'flex'}}>
            <Link to='/'>
                <h4 className="navLinks" style={{paddingLeft: "3px"}}><Badge variant='secondary'>Home</Badge></h4>
            </Link>
            <Link to='completed'>
                <h4 className="navLinks" style={{paddingLeft: "5px"}}><Badge variant='secondary'>Completed</Badge></h4>
            </Link>
            <Link to='/ongoing'>
                <h4 className="navLinks" style={{paddingLeft: "3px"}}><Badge variant='secondary'>Ongoing</Badge></h4>
            </Link> 
            <Link to='/entertainment'>
                <h4 className="navLinks" style={{paddingLeft: "3px"}}><Badge variant='secondary'>Entertainment</Badge></h4>
            </Link>
        </Navbar>
        
    )
}

export default NavBar;