import React from 'react';
import '../styles/globalstyles.css';
// import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import useWindowDimensions from '../components/WindowDimensions'
import { Link } from 'react-router-dom';

const NavBar = () => {

    const { width } = useWindowDimensions();
    console.log(width);
    return (
        // <Navbar style={{backgroundColor: '#2E2222', width: width, flex: 1}}>
        //     <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        // </Navbar>
        <Navbar expand="lg" style={{backgroundColor: '#cc7a00'}}>
            <Link to='/'>
                <Navbar.Brand stlye={{color: 'white'}}>Navbar</Navbar.Brand>
            </Link>
            {/* <Link to='/'>
                <p stlye={{color: '#0060B6', textDecoration: "none"}}>Navbar</p>
            </Link> */}
        </Navbar>
        
    )
}

export default NavBar;