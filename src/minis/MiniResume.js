import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';
import useFirestore from '../hooks/useFirestore';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MiniExp = () => {
    const {docs} = useFirestore('experience');

    const {ref, inView} = useInView({threshold: 0.2});
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
            <motion.div 
            className="miniResume"
            animate={animation}>
            <h3>Experience</h3>
            {docs && docs.map((doc, index) => (
                <div className="miniResume" key={doc.placement}>
                    <h5>{doc.company}</h5>
                    <b><p>{doc.position}</p></b>
                    <p>{doc.detail}</p>
                </div>
            ))}
            </motion.div>
        </div>
    )
}

const MiniSkills = () => {
    const {docs} = useFirestore('skill-text');
    let emptyArr = [];
    
    return (
        <div className="miniResume">
            <h3>Skills</h3>
            {docs && docs.map((doc) => emptyArr.push(doc.title))}
            <p>{emptyArr = emptyArr.join(', ')}</p>                
        </div>
    )
}

const MiniCompeted = () => {
    const {docs} = useFirestore('completed-text');
    return (
        <div className="miniResume">
            <h3>Completed Projects</h3>
            {docs && docs.map((doc, index) => (
                <p key={doc.placement}>
                    {doc.title}
                </p>
            ))}                
        </div>
    )
}

const MiniOngoing = () => {
    const {docs} = useFirestore('ongoing-stories');
    return (
        <div className="miniResume">
            <h3>Ongoing Projects</h3>
            {docs && docs.map((doc, index) => (
                <p key={doc.placement}>
                    {doc.title}
                </p>
            ))}                
        </div>
    )
}
const MiniResume = () => {


    const {ref, inView} = useInView({threshold: 0.2});
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
        <div>
            <Container style={{marginTop: "1rem"}}>
                <div style={{display: "flex"}}>
                    <MiniExp/>
                </div>
                <div ref={ref} >
                <motion.div animate={animation} className="miniDisplay">
                    <MiniSkills/>
                    <MiniCompeted/>
                    <MiniOngoing/>
                </motion.div>
                </div>
            </Container>
        </div>
    )
}

export default MiniResume;