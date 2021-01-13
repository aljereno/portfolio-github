import React from 'react';
import Container from 'react-bootstrap/Container';
import useFirestore from '../hooks/useFirestore';
import LeftMonth from '../minis/LeftMonth';
import RightMonth from '../minis/RightMonth';
import '../styles/globalstyles.css';

const MiddleHomepage = () => {

    const { docs } = useFirestore('january-project-stories');
    //const { docs2 } = useFirestore('february-project-stories');
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