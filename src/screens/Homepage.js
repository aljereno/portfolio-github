import React from 'react';
import Container from 'react-bootstrap/Container';
import MiddleHomepage from '../components/MiddleHomepage';
import HeadCarousel from '../components/HeadCarousel';
import '../styles/globalstyles.css';
import { Link } from 'react-router-dom';
import Card from '../minis/Card';

const Homepage = () => {
    return (    
        <div style={{backgroundColor: '#C4C4C4'}}>
            <div style={{display: "flex"}}>
                <Container style={{marginTop: "20px", marginBottom: "20px", borderRadius: "25px"}}>
                    <HeadCarousel/>
                </Container>
                <Container>
                    <Link to='/completed'>
                        <div className="rightContainer" >
                            <h3 style={{textAlign: 'center', paddingTop: '1.5rem'}}>
                                Completed
                            </h3>
                        </div>
                    </Link>
                    <Link to='/ongoing'>
                        <div className="rightContainer" >
                            <h3 style={{textAlign: 'center', paddingTop: '1.5rem'}}>
                                Ongoing
                            </h3>
                        </div>
                    </Link>
                    <Link to='/about' style={{textDecoration:'none'}}>
                        <div className="rightContainer" >
                            <h3 style={{textAlign: 'center', paddingTop: '1.5rem'}}>
                                Entertainment
                            </h3>
                        </div>
                    </Link>
                </Container>
            </div>
            
            <MiddleHomepage/>
            <div className="middleContainer" style={{fontSize: "10px", marginTop: "3rem", lineHeight: "1rem", paddingBottom: "1rem"}}>
            <Container className="middleContainer middleExtra"><p>Archive</p></Container>
                <p>Aljaed Lui Ereno</p>
                <p>There isn't much to this world, so make the most of it.</p>
            </div>

            <Card imageName={'carousel-images'}/>
        </div>
    )
}

export default Homepage;