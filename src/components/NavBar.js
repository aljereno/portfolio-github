import React from 'react';
import '../styles/globalstyles.css';
// import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import useWindowDimensions from '../components/WindowDimensions'

const NavBar = () => {

    const { width } = useWindowDimensions();
    console.log(width);
    return (
        // <Navbar style={{backgroundColor: '#2E2222', width: width, flex: 1}}>
        //     <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        // </Navbar>
        <Navbar expand="lg" style={{backgroundColor: '#2E2222'}}>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Navbar>
        
    )
}

export default NavBar;