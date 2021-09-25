import React from 'react';
import { Container, Tabs, Tab} from 'react-bootstrap';
import { motion } from 'framer-motion';
import MiniGallery from '../minis/MiniGallery';
const ProjectInfo = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}}>
            <Container>
            <h1 style={{textAlign: 'center'}}>Project info</h1>
            <h2>Technolgies Used: </h2>
            <ul>
                <li>React</li>
                <li>Firebase Firestore</li>
                <li>React router</li>
                <li>React bootstrap</li>
                <li>Firebase Authentication</li>
                <li>Firebase Hosting</li>
            </ul>
            <Tabs defaultActiveKey="info">
                <Tab eventKey="info" title="Information">
                <h3>Objective</h3>
            <p> To create a website/blog page featuring my previous school projects and side projects. Also this is a way to fully learn
                the basics of React, Firebase Firestore and other smaller technologies within the React ecosystem. Something about me, I 
                enjoy reading about the progress of other people's projects; the final product is no doubt mesmerizing, but the rode to get
                there interests me even more. This is a going to sound really lame and pretentious, but how a person dealt with setbacks 
                and hurdles fascinate me the most. No matter how small the detail, there is an explanation and even if there isn't a clear 
                cut answer its satisfying to acknwoledge them. 
            </p>
            <p>As stated, I wanted to learn and test myself more on React. Although, my components, state management and overall need for
                external React libraries are very limited in this scenario since this project is so basic. One interesting thing though is learning
                the interaction between React and Firebase even more. In my case, the only thing I am saving are pictures and pdfs of various 
                projects. Firestore is used to quickly cycle through specific collections; the main overarching collections are completed, ongoing and 
                entertainment. Completed contains just the side projects and school projects I have done, whereas ongoing are the ones in development 
                such as "Project Emblem". Entertainment is divided into subtopics such as games, movies, and books. One thing I have done for almost two 
                years now is keep track of the entertainment that I have consumed. This is mainly for posterity since I think it would be great
                to analyze my activity over the years. 
            </p>
            <p>
                Another thing is learning how to leverage CSS even more, one tutorial that I've watched that was very helpful is utilizing Firestore to create
                an image gallery. Using that tutorial, I have shown my Genshin Abyss Project - which is further elaborated on in its specific
                project page - and in the future will be used for showcasing my ongoing and completed movies/book/games colection. The abyss project 
                contains a grid gallery and interactable pictures where clicking on one block causes the image to enlarge and center itself. This could
                be further refined if animations were involved such as having the image bounce as it comes down from the top of the page, or zip quickly 
                in a different direction when clicking away. 
            </p>
            <section>
                <h2>Goals List</h2>
                <p>Contains a list of future updates in no particular order since inspiration can strike at anytime</p>
                <ul>
                    <strong><li>Created on April 15, 2021</li></strong>
                    <strike><li>Genshin Abyss, data refinement</li></strike>
                    <strike><li>Genshin Abyss, gallery animations</li></strike>
                    <strike><li>Genshin Abyss, Progress update on characters throughout the patches (Current Patch 2.0)</li></strike>
                    <strike><li>Entertainment, contain lists of all the shtuff that I want to watch, play or read</li></strike>
                    <strike><li>Ongoing, further elaborate on Project Emblem</li></strike>
                    <strike><li>Ongoing, further elaborate on Flat Foot</li></strike>
                    <strike><li>Components 1, update the card that will be used to display small info about everything</li></strike>
                    <strike><li>Components 2, update navbar to change based on what page you are on</li></strike>
                    <strike><li>Completed, finish up the pictures for Quarantine</li></strike>
                    <strike><li>Completed, finish up pictures for Weatherbox</li></strike>
                    <strong><li>Created on June 12, 2021</li></strong>
                    <strike><li>Need to setup an authenticator</li></strike>
                    <strike><li>Use authenticator to create login page</li></strike>
                    <strike><li>As the main user, be able to easily add in new items to Entertainment, Ongoing, Completed</li></strike>
                    <strong><li>June 17, 2021</li></strong>
                    <strike><li>Responsive web design, or as much as I could</li></strike>
                    <strong><li>July 2, 2021</li></strong>
                    <strike><li>Start getting all sample pictures for all the entertainment things I did. Will take a while.</li></strike>
                    <strong><li>September 7th, 2021</li></strong>
                    <strike><li>Add in profile page/about me</li></strike>
                    <strike><li>Create a section within it that I can showcase what I learned about a specific topic</li></strike>
                </ul>
                <h3>Progress</h3>
                <p>Since I started the write-up late, my early problems have since disappeared from my noggin and will just update as I see fit.
                It's not like this page is gonna get much traction anyways. 
                </p>
                <ul>
                    <strong><li>June 13, 2021</li></strong>
                    <li>Components 1 finished, allowed for redirect to specific single screen pages</li>
                    <li>Deployed the website using firebase hosting</li>
                    <strong><li>June 14, 2021</li></strong>
                    <li>Added in the different pages containing all my past projects</li>
                    <strong><li>June 17, 2021</li></strong>
                    <li>Finished adding in blurbs, images to the cards in completed tab</li>
                    <li>Major overhaul of the webpage</li>
                    <strong><li>June 21, 2021</li></strong>
                    <li>Finished Elaboration on Flat foot and fire emblem related projects</li>
                    <strong><li>July 2, 2021</li></strong>
                    <li>Meant to create a bookshelf like way to show off the entertainment section, 
                        but the css was too finicky. Found a use for the new custom cards for the
                        archive section. Not flashy and perfect to show off the old stuff I was into. 
                    </li>
                    <strong><li>July 5, 2021</li></strong>
                    <li>Added in new way to look at entertainment list, a lot more responsive and contains pictures and separate
                        sections for different topics. 
                    </li>
                    <li>Currrently has just games, requires more time to get the movies/shows/books images up</li>
                    <strong><li>July 24, 2021</li></strong>
                    <li>Gathered all necessary data to populate the entertainment section</li>
                    <li>Set up basic authentication to allow only select users to add into entertainment file</li>
                    <li>Scrapped idea of being able to add in to Ongoing and Completed since its a process to get individual pages running</li>
                    <strong><li>August 16</li></strong>
                    <li>This deployment contains a purpose overhaul for my genshin, changed from abyss related to just a full on unit showcase.</li>
                    <strong><li>September 3</li></strong>
                    <li>Contains animation's for the pages. Navbar does change on view. Different style and color choices. In terms of responsive
                        web design, I am at a loss on how to handle the homepage. Not too sure if I should just redesign the whole thing.
                    </li>
                    <strong><li>September 10</li></strong>
                    <li>Contains profile page, revamped homepage, added images for Quarantine and Weatherboxs</li>
                    <strong><li>September 25</li></strong>
                    <li>I spent sometime scanning all my notes ever since college started so if your morbidly curious at how ugly/difficult my notes are, feel free to click on it on my profile page.</li>
                    <li>Also made it easier for me to add in more pictures to my project info tab since I will be adding more in the future.</li>
                </ul>
            </section>
                </Tab>
                <Tab eventKey="gallery" title="Gallery">
                    <MiniGallery document={'project-images-collection'}/>
                </Tab>
            </Tabs>
        </Container>
        </motion.div>
    )
}

export default ProjectInfo;