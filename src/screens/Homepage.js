import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import useWindowDimensions from '../components/WindowDimensions'
import HeadCarousel from '../components/HeadCarousel';
//import '../styles/globalstyles.css';
import '../App.css';
import { Link } from 'react-router-dom';

const Homepage = () => {

    const { height, width } = useWindowDimensions();

    return (
        <div style={{backgroundColor: '#C4C4C4', height: height}}>
            <div style={{backgroundColor: 'white', display: "flex"}}>
                <Container style={{marginTop: "20px", marginBottom: "20px"}}>
                    <HeadCarousel/>
                </Container>
                <Container>
                    <Link to='/completed'>
                        <div className="rightContainer" >
                            <p style={{textAlign: 'center', paddingTop: '1.5rem'}}>
                                Completed
                            </p>
                        </div>
                    </Link>
                    <Link to='/completed'>
                        <div className="rightContainer" >
                            <p style={{textAlign: 'center', paddingTop: '1.5rem'}}>
                                Ongoing
                            </p>
                        </div>
                    </Link>
                    <Link to='/completed' style={{textDecoration:'none'}}>
                        <div className="rightContainer" >
                            <p style={{textAlign: 'center', paddingTop: '1.5rem'}}>
                                Entertainment
                            </p>
                        </div>
                    </Link>
                </Container>
            </div>
            
        </div>
    )
}

export default Homepage;