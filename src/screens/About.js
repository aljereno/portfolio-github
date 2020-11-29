import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import useWindowDimensions from '../components/WindowDimensions'
import HeadCarousel from '../components/HeadCarousel';
//import '../styles/globalstyles.css';
import '../App.css';

const About = () => {

    const { height, width } = useWindowDimensions();

    return (
        <div style={{backgroundColor: '#C4C4C4', width: width, height: height}}>
            <div style={{backgroundColor: 'Coral'}}>
                <Container>
                    <p style={{textAlign: "center"}}>This is a simple text component.</p>
                </Container>
                <Container stlye={{textAlign: 'center'}}>
                    <p>This is a simple text component.</p>
                </Container>
                <Container stlye={{textAlign: 'center'}}>
                    <p>This page is a way to sample out separate route screens</p>
                </Container>
            </div>
        </div>
    )
}

export default About;