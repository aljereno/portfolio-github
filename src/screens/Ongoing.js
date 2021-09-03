import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from '../minis/Card';
import { motion } from 'framer-motion';
const Ongoing = () => {
    return (
        <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y:0}} transition={{duration: 1}}>
            <Container style={{backgroundColor: 'wheat', borderRadius: "25px", paddingBottom: "0.5rem"}}>
                <Card imageName={'ongoing-stories'}/>  
            </Container>
        </motion.div>
    )
}

export default Ongoing; 