import React  from 'react';
import Container from 'react-bootstrap/Container';
import useWindowDimensions from '../components/WindowDimensions'
import useFirestore from '../hooks/useFirestore';
import '../styles/globalstyles.css';
import { Link } from 'react-router-dom';

const Completed = () => {

    const { height, width } = useWindowDimensions();
    // const { docs } = useFirestore('completed-stories');
    // console.log(docs);
    return (
        <div style={{backgroundColor: '#C4C4C4', width: width, height: height}}>
            <div style={{backgroundColor: 'Coral'}}>
                <Container>
                    <p> Weatherbox </p>
                    <Link to='/projectInfo'>
                        <p> Project Info </p>
                    </Link>
                    <Link to='/quarantine'>
                        <p> Quarantine </p>
                    </Link>
                </Container>
            </div>
        </div>
    )
}

export default Completed;
