import React from 'react';
import Container from 'react-bootstrap/Container';
import MiddleHomepage from '../components/MiddleHomepage';
import HeadCarousel from '../components/HeadCarousel';
import '../styles/globalstyles.css';

const Homepage = () => {

    return (    
        <div style={{backgroundColor: '#C4C4C4'}}>
            <div style={{display: "flex"}}>
                <Container style={{marginTop: "20px", marginBottom: "20px", borderRadius: "25px", flex: "0 0 70%"}}>
                    <HeadCarousel/>
                </Container>
            </div>
            <MiddleHomepage/>
            <div className="middleContainer" style={{fontSize: "10px", marginTop: "3rem", lineHeight: "1rem", paddingBottom: "1rem"}}>
            {/* <Container className="middleContainer middleExtra"><p>Archive</p></Container> */}
                <p>Aljaed Lui Ereno </p>
                <p>There isn't much to this world, so make the most of it.</p>
            </div>
        </div>
    )
}

export default Homepage;