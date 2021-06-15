import React from 'react';
import { Container } from 'react-bootstrap';

const ImgProcessing = () => {
    return (
        <Container>
            <h1 style={{textAlign: 'center'}}>Embryo Image Processing</h1>
            <h2>Technolgies Used: </h2>
            <ul>
                <li>MatLab</li>
                <li>MatLab Image Processing Toolbox</li>
            </ul>
            <h3>Obecjtive</h3>
            <p>In-vitro fertilization is a costly endeavour not just in terms of financial, 
                but also in time and emotion. This is because of the doctor visits, medical 
                problems associated with the procedure and an overall low percentage of 
                successs. Our principal investigator is involved with a doctor who wanted 
                to task students to test out his hypothesis on image detection and growth 
                rates of embryos. Since IVF is very expensive, early detection of an embryo 
                being unviable is the main goal.
            </p>
            <p>This program was related to my sophomore year project, where our group was 
                tasked to further enhance the past semesters progress. The current program 
                was was coded in MatLab and utilized the image processing tools/libraries 
                and batch processing capabilities. In the end, we were able to get it down 
                closer and more accurate by drawing circles around the embryo which in the 
                end had an error rate of ~%10-%15 when compared with manual detection.
            </p>
            <p>
            This was my first foray into the world of MatLab and its capabilties. My interest 
            to work in Matlab was not piqued during this time though and so I have not done 
            anything else with it since. Although, since I was exposed to a multitude of its 
            libraries I won’t reject another chance to work with the language again because of 
            its diverse offerings. It was also my first dive into an application that bridged 
            the gap between the medical world and computing. This was just a step because my 
            junior year project would be combining another world with computing.
            </p>
        </Container>
    )
}

export default ImgProcessing;