import React from 'react';
import { Container } from 'react-bootstrap';
import Card from '../minis/Card';

export default function Entertainment() {
    return (
        <div style={{backgroundColor: 'coral', width: '100%', height: '100%'}}>
            <Container>
                <Card imageName="entertainment-stories"/>
            </Container>
        </div>
    )
}