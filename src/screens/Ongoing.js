import React from 'react';
import Container from 'react-bootstrap/Container';
import useWindowDimensions from '../components/WindowDimensions'
import '../styles/globalstyles.css';
import { Link } from 'react-router-dom';

const Ongoing = () => {

    const { height, width } = useWindowDimensions();

    return (
        <div style={{backgroundColor: '#C4C4C4', width: width, height: height}}>
            <div style={{backgroundColor: 'Coral'}}>
                <Container>
                    <p style={{textAlign: "center"}}>Ongoing</p>
                    <Link to='/genshinScreen'>
                        <p>
                            Genshin Screen
                        </p>
                    </Link>
                    <p>
                        Fire Emblem Project
                    </p>
                    <p>
                        Running Clicker Game Project
                    </p>
                </Container>

            </div>
        </div>
    )
}

export default Ongoing;