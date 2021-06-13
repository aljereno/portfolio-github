import React from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/globalstyles.css';
import Card from '../minis/Card';

const Ongoing = () => {
    return (
        <Container style={{backgroundColor: '#2e4a1e', borderRadius: "25px"}}>
            <Card imageName={'ongoing-stories'}/>  
        </Container>
    )
}

export default Ongoing; 