import React from 'react';
import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Carousel from 'react-bootstrap/Carousel';
import useWindowDimensions from '../components/WindowDimensions'
import HeadCarousel from '../components/HeadCarousel';
import '../styles/globalstyles.css';
import useFirestore from '../hooks/useFirestore';
//import '../App.css';
import { Link } from 'react-router-dom';

const Homepage = () => {

    const { height } = useWindowDimensions();
    const { docs } = useFirestore('project-stories');
    console.log(docs);

    return (
        <div style={{backgroundColor: '#C4C4C4', height: height}}>
            <div style={{display: "flex"}}>
                <Container style={{marginTop: "20px", marginBottom: "20px", borderRadius: "25px"}}>
                    <HeadCarousel/>
                </Container>
                <Container>
                    <Link to='/completed'>
                        <div className="rightContainer" >
                            <p style={{textAlign: 'center', paddingTop: '1.5rem'}}>
                                Completed
                            </p>
                        </div>
                    </Link>
                    <Link to='/ongoing'>
                        <div className="rightContainer" >
                            <p style={{textAlign: 'center', paddingTop: '1.5rem'}}>
                                Ongoing
                            </p>
                        </div>
                    </Link>
                    <Link to='/about' style={{textDecoration:'none'}}>
                        <div className="rightContainer" >
                            <p style={{textAlign: 'center', paddingTop: '1.5rem'}}>
                                Entertainment
                            </p>
                        </div>
                    </Link>
                </Container>
            </div>
            <div style={{display: "flex"}}>
                    <Container className="middleContainer middleExtra"><p>Archive</p></Container>
                    <Container className="middleContainer">
                        <p>Nonsense goals, projects, buys</p>
                    </Container>
                    <Container className="middleContainer middleExtra"><p>Archive</p></Container>
            </div>
            <div style={{display: "flex", textAlign: "center"}}>
                <Container>
                    <p>December Major Goals</p>
                    <div className="goalContainer">
                        <p>List format that is going to derive itself from a backend database</p>
                    </div>
                </Container>
                <Container>
                    <p>January Major Goals</p>
                    <div className="goalContainer">
                        {docs && docs.map(doc => (
                            <p key={doc.id}>
                                {doc.title}
                            </p>
                        ))}
                    </div>
                </Container>
                <Container>
                    <p>February Major Goals</p>
                    <div className="goalContainer">
                        List format for february goals
                    </div>
                </Container>
            </div>
            <div className="middleContainer" style={{fontSize: "10px", marginTop: "3rem", lineHeight: "1rem", paddingBottom: "1rem"}}>
                <p>Aljaed Lui Ereno</p>
                <p>There isn't much to this world, so make the most of it.</p>
            </div>
        </div>
    )
}

export default Homepage;