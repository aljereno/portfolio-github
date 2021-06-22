import React from 'react';
import Container from 'react-bootstrap/Container';
import LeftMonth from '../minis/LeftMonth';
import RightMonth from '../minis/RightMonth';
import '../styles/globalstyles.css';

const MiddleHomepage = () => {

    return (
        <div>
            <div style={{display: "flex"}}>
                    <Container className="middleContainer">
                        <p>Nonsense goals, projects, buys</p>
                    </Container>
            </div>
            <div style={{display: "flex", textAlign: "center"}}>
                <LeftMonth/>
                <RightMonth/>
            </div>
        </div>
    )
}

export default MiddleHomepage;