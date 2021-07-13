import React, { useState } from 'react';
import '../styles/globalstyles.css';
import Navbar from "react-bootstrap/Navbar";
import { Nav, Button, Modal, Form } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const NavBar = ({loggedIn}) => {
    console.log(loggedIn);
    return (
        <Navbar expand="lg" sticky="top" style={{backgroundColor: '#E5AA70'}}>
            <Nav className="mr-auto">
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
                    <h4 className="navLinks" style={{paddingLeft: "3px", alignSelf: "flex-end"}}><Badge variant='secondary'>Entertainment</Badge></h4>
                </Link>
            </Nav>
            {!loggedIn && <Button variant="light">
                <Badge>Login</Badge>
            </Button>}
        </Navbar>
        
    )
}

export default NavBar;