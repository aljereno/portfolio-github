import React  from 'react';
import Container from 'react-bootstrap/Container';
import useWindowDimensions from '../components/WindowDimensions'
import '../styles/globalstyles.css';
import Card from '../minis/Card';

const Completed = () => {

    const { height, width } = useWindowDimensions();

    return (
        <div style={{backgroundColor: '#C4C4C4', width: width, height: height}}>
            <div style={{backgroundColor: 'Coral'}}>
                <Container>
                    <Card imageName="completed-stories"/>
                </Container>
            </div>
        </div>
    )
}

export default Completed;
