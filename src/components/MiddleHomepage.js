import React from 'react';
import Container from 'react-bootstrap/Container';
import MonthlyGoals from '../minis/MonthlyGoals';
import '../styles/globalstyles.css';

const MiddleHomepage = ({loggedIn}) => {

    return (
        <div>
            <div style={{display: "flex"}}>
                    <Container className="middleContainer">
                        <p>Nonsense goals, projects, buys</p>
                    </Container>
            </div>
            <div style={{display: "flex", textAlign: "center"}}>
                <MonthlyGoals leftOrient={true} loggedIn={loggedIn}/>
                <MonthlyGoals leftOrient={false} loggedIn={loggedIn}/>
            </div>
        </div>
    )
}

export default MiddleHomepage;