import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import MonthlyGoals from '../minis/MonthlyGoals';
import '../styles/globalstyles.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MiddleHomepage = ({loggedIn}) => {

    const {ref, inView} = useInView({threshold: 0.1});
    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration: 0.5,
                    bounce: 0.3
                }
            })
        }
        if(!inView){
            animation.start({
                x: "-100vw",
                opacity: 0
            })
        }
    }, [inView, animation])

    return (
        <div ref={ref}>
            <motion.div animate={animation}>
            <div style={{display: "flex"}}>
                    <Container className="middleContainer">
                        <p>Nonsense goals, projects, buys</p>
                    </Container>
            </div>
            <Container>
            <div className="miniDisplay" style={{display: "flex", textAlign: "center"}}>
                <MonthlyGoals leftOrient={true} loggedIn={loggedIn}/>
                <MonthlyGoals leftOrient={false} loggedIn={loggedIn}/>
            </div>
            </Container>
            </motion.div>
        </div>
    )
}

export default MiddleHomepage;