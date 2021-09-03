import React from 'react';
import '../styles/globalstyles.css';
import Navbar from "react-bootstrap/Navbar";
import { Nav, Button } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/config';

const NavBar = ({loggedIn, setLoggedIn}) => {

    const onLoggedOff = () => {
        setLoggedIn(false)
        auth.signOut().then(() => {console.log("user signed out")})
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" style={{backgroundColor: '#E5AA70'}}>    
            <Nav className="me-auto">
            <Nav.Item  style={{marginTop: "0.1rem"}}>
            <Link to='/'>
                <h3 className="navLinks" ><Badge variant='secondary'>Home</Badge></h3>
            </Link>
            </Nav.Item> 
            </Nav>       
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Item>
                    <Link to='completed'>
                        <h5 className="navLinks" style={{paddingLeft: "5px"}}><Badge variant='secondary'>Completed</Badge></h5>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='/ongoing'>
                        <h5 className="navLinks" style={{paddingLeft: "3px"}}><Badge variant='secondary'>Ongoing</Badge></h5>
                    </Link> 
                </Nav.Item>
                <Nav.Item>
                    <Link to='/entertainment'>
                        <h5 className="navLinks" style={{paddingLeft: "3px"}}><Badge variant='secondary'>Entertainment</Badge></h5>
                    </Link>
                </Nav.Item>
                {loggedIn && 
                <Nav.Item>
                    <Button onClick={() => onLoggedOff()}> Logout </Button>
                </Nav.Item>}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;