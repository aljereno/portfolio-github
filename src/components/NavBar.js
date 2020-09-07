import React from 'react';
import '../styles/globalstyles.css';
import Navbar from "react-bootstrap/Navbar";
import useWindowDimensions from '../components/WindowDimensions'

const NavBar = () => {

    const { width } = useWindowDimensions();
    
    return (
        <Navbar style={{backgroundColor: '#2E2222', width: width}}>
            <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Navbar>
    )
}

export default NavBar;