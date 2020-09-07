import React from 'react';
import NavBar from "../components/NavBar";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import useWindowDimensions from '../components/WindowDimensions'
import HeadCarousel from '../components/HeadCarousel';

const Homepage = () => {

    const { height, width } = useWindowDimensions();

    return (
        <div style={{backgroundColor: '#C4C4C4', width: width, height: height}}>
            <NavBar/>
            <Container style={{backgroundColor: 'white'}}>
                <Row style={{backgroundColor: 'black'}}>
                    <Col style={{backgroundColor: 'blue'}}>
                        <HeadCarousel/>
                    </Col>
                    <Col>
                        <Container>
                            <img src={require('../image4.JPG')} alt='derelict ship'/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Homepage;