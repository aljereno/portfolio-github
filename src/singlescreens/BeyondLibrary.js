import React from 'react';
import { Container } from 'react-bootstrap';

const BeyondLibrary = () => {
    return (
        <Container>
            <h1 style={{textAlign: 'center'}}>Beyond the Library</h1>
            <h2>Technologies Used: </h2>
            <ul>
                <li>Software Engineering</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>Galaxy</li>
                <li>Semantic React UI</li>
                <li>A further analysis of the full team's work can be found <a href="https://beyond-the-library.github.io/">HERE</a></li>
                <li>Source code can be found <a href="https://github.com/beyond-the-library/beyond-the-library">HERE</a></li>
            </ul>
            <h3>Objective</h3>
            <p>For a student, finding spots to study can become a hassle when all 
                their exposed to is whats in their path everyday. Even moreso when 
                the path/routine that they have, doesn’t have any spots at all or 
                the spot is always busy. Some ways they could mitigate their problem 
                is break from their routine and find and discover spots on their own 
                or ask fellow classmates or friends for ideas. Beyond the Library seeks 
                to ensure that such a problem would not plague the University of Hawaii 
                students by creating an online platform for discovering, commenting and 
                submitting their own spots.
            </p>
            <p>At the heart of Beyond the Library is community engagement, we want to make 
                sure that all the information on a spot is easy and interesting to find. 
                One aspect that pushes that notion is through the discover spots page, 
                where the main idea is to hold a catalogue of all the spots the community 
                has posted. The page contains pictures, a description and a section that 
                let’s student’s read and/or post their own comments about a specific spot. 
                Another interesting aspect is our map integration, we believed that the main 
                page should contain an aggregated information about all the notes posted at 
                all the spots. This is to make sure students get to see all the updates. As 
                mentioned, each student is allowed to recommend their own spots but with a 
                vetting process that makes sure the spot is legit and satisfactory.
            </p>
            <p>My contribution to the project was establishing the layout of the landing page,
             the user profile page and the maps page. The Landing page received a major overhaul 
             from it’s first inception, since my previous design had too much scrolling to do that 
             provided no benefit to the user. The user profile page also received another overhaul 
             since the logic behind it was not as fleshed out as all the other components of the web app.
             </p>
             <p>
                The maps page used a library called Leaflet, which allowed me to access open-sourced map 
                data to create an interactive map and place pins on said map. I also introduced the commenting 
                system to each spot in the discover page and the maps page. Clicking on a pin on the maps page 
                replaces the feed with a card that reveals information about the spot.
             </p>
             <p>
                Overall, this project reached very close to what our ultimate goal was. If we could 
                extend for another week or two then new features such revamping the profile page and 
                making the map component move with the scroll wheel could have been implemented. 
                Beyond the Library left me with such an interesting outlook about the interaction 
                between the database and the front-end side of the web application. By far the most 
                difficult and time consuming process was interacting with the database, but it also 
                meant that it was the most rewarding once everything clicked together. I aim to go 
                beyond as I move on my software engineering career.
             </p>
        </Container>
    )
}

export default BeyondLibrary;