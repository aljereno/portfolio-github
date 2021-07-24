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
        <Navbar expand="lg" sticky="top" style={{backgroundColor: '#E5AA70'}}>
            <Nav>
                <Nav.Item>
                    <Link to='/'>
                        <h4 className="navLinks" style={{paddingLeft: "3px"}}><Badge variant='secondary'>Home</Badge></h4>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='completed'>
                        <h4 className="navLinks" style={{paddingLeft: "5px"}}><Badge variant='secondary'>Completed</Badge></h4>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='/ongoing'>
                        <h4 className="navLinks" style={{paddingLeft: "3px"}}><Badge variant='secondary'>Ongoing</Badge></h4>
                    </Link> 
                </Nav.Item>
                <Nav.Item>
                    <Link to='/entertainment'>
                        <h4 className="navLinks" style={{paddingLeft: "3px", alignSelf: "flex-end"}}><Badge variant='secondary'>Entertainment</Badge></h4>
                    </Link>
                </Nav.Item>
            </Nav>
            {loggedIn && 
            <Nav>
                <Nav.Item>
                <Button onClick={() => onLoggedOff()}>
                    <Badge>Logout</Badge>
                </Button>
                </Nav.Item>
            </Nav> }
        </Navbar>
        
    )
}

export default NavBar;