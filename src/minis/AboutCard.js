import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutCard = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                opacity: 1,
                transition: {
                    duration: 1
                }
            })
        }
        if(!inView) {
            animation.start({opacity: 0})
        }
    }, [inView, animation])

    return (
        <div ref={ref}>
            <Container style={{marginTop: "1rem", backgroundColor: "#e2d2b3", borderRadius: "15px 15px 15px 0"}}>
                <motion.div animate={animation}>
                <div style={{display: "flex", backgroundColor: "#ffeecc", borderRadius: "15px 15px 15px 0", paddingTop: "0.5rem"}}>
                    <h3 style={{marginLeft: "0.5rem"}}>About me</h3>
                    <a href="https://github.com/aljereno" target="_blank" rel="noopener noreferrer"><i className="bi-github icons" role="img" aria-label="GitHub"></i></a>
                    <a href="https://www.linkedin.com/in/aljaed-lui-ereno-80033417b/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin icons"></i></a>
                    <a href="https://www.instagram.com/algaehead_/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram icons"></i></a>
                </div>
                <div style={{display: "flex", marginTop: "1rem"}}>
                    <div>
                        <p style={{textAlign: "justify"}}>Let's get the basic stuff out of the way: videogames, long distance running, reading books and manga.
                        What's the point of this page? I enjoy web development, I picked up on it about three years ago due to
                        taking a class on it alongside getting an internship with my school's newspaper group. I then got lucky
                        with another web development internship with XForce who paired me up with the 15th Wing Air Force working
                        on a project called Tempest. In terms of career goals, I am actually not too sure. I'm stuck, I enjoy
                        web development but it's been difficult landing one here in Hawai'i. I'd love to get into anything tech related
                        whether it be Information Technology, Data Analysis, lower level machine code. I just know that web development
                        is a skill that I'd always be doing on the side. I'm just trying to have fun and not take things too seriously.
                        </p>
                        <h3 style={{ paddingLeft: "0.5rem",backgroundColor: "#ffeecc", borderRadius: "15px 15px 15px 0"}}>Why this?</h3>
                        <p>To test my limits on what I know about React, Firebase and basic UI generation. There are more I am excited to plan
                            and actually code later. If anyone has any idea on what type of color scheme I should go with, stuff that is more
                            earthy and light on the eyes please let me know. Although I love wheat, brown, slate and beige, I'm sure there are
                            tons of other color combo's and compliments out there. I am unfortunately addicted to Genshin Impact so if you are
                            interested in builds and optimization like I am, look at the genshin project in the ongoing section at the top. 
                        </p>
                    </div>
                <img 
                    style={{width: "10%", height: "10%", marginLeft: "1rem", flex: "30%"}} 
                    src="https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/Carousel%2FfirstFinalDraft.gif?alt=media&token=2ea662d1-c497-4289-9c61-d69442492af0"
                    alt="Me"/>
                </div>
                </motion.div>
            </Container>
        </div>
    )
}

export default AboutCard;