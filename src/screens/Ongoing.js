import React from 'react';
import Container from 'react-bootstrap/Container';
import useWindowDimensions from '../components/WindowDimensions'
import '../styles/globalstyles.css';
const Ongoing = () => {

    const { height, width } = useWindowDimensions();

    return (
        <div style={{backgroundColor: '#C4C4C4', width: width, height: height}}>
            <div style={{backgroundColor: 'Coral'}}>
                <Container>
                    <p style={{textAlign: "center"}}>Ongoing</p>
                </Container>

            </div>
        </div>
    )
}

export default Ongoing;