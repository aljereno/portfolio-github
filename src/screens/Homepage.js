import React from 'react';
import Container from 'react-bootstrap/Container';
import MiddleHomepage from '../components/MiddleHomepage';
import HeadCarousel from '../components/HeadCarousel';
import '../styles/globalstyles.css';
import { Link } from 'react-router-dom';
import {Badge} from 'react-bootstrap';
import { motion } from 'framer-motion';

const Homepage = ({loggedIn}) => {

    return (    
        <motion.div initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{delay: 0.5, duration: 0.5}} exit={{opacity: 0.2}}>
            <div style={{display: "flex"}}>
                <Container style={{marginTop: "20px", marginBottom: "20px", borderRadius: "25px", flex: "0 0 70%"}}>
                    <HeadCarousel/>
                </Container>
            </div>
            <MiddleHomepage loggedIn={loggedIn}/>
            <div className="middleContainer" style={{fontSize: "10px", marginTop: "3rem", lineHeight: "1rem", paddingBottom: "1rem"}}>
                <p>Aljaed Lui Ereno </p>
                <Link to='/adminLogin'>
                    <Badge variant="dark">Login</Badge>
                </Link>
            </div>
        </motion.div>
    )
}

export default Homepage;