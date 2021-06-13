import React from 'react';
import { Container } from 'react-bootstrap';
import Card from '../minis/Card';

export default function Entertainment() {
    return (
        <Container style={{backgroundColor: '#2e4a1e', borderRadius: "25px"}}>
            <Card imageName="entertainment-stories"/>
        </Container>
    )
}