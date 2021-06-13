import React from 'react';
import { Container } from 'react-bootstrap';

const ProjectInfo = () => {
    return (
        <Container>
            <h1 style={{textAlign: 'center'}}>Project info</h1>
            <h2>Technolgies Used: </h2>
            <ul>
                <li>React</li>
                <li>Firebase Firestore</li>
                <li>React router</li>
                <li>React bootstrap</li>
                <li>Firebase Authentication</li>
            </ul>
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
                    <li>Created on April 15, 2021   </li>
                    <li>Genshin Abyss, data refinement</li>
                    <li>Genshin Abyss, gallery animations</li>
                    <li>Genshin Abyss, Progress update on characters throughout the patches (Current Patch 1.4)</li>
                    <li>Entertainment, have a drag and droppable component</li>
                    <li>Entertainment, contain lists of all the shtuff that I want to watch, play or read</li>
                    <li>Ongoing, further elaborate on Project Emblem</li>
                    <li>Ongoing, further elaborate on Flat Foot</li>
                    <li>Components, update the card that will be used to display small info about everything</li>
                    <li>Components, update navbar to change based on what page you are on</li>
                    <li>Completed, finish up the pictures for Quarantine</li>
                    <li>Completed, finish up pictures for Weatherbox</li>
                    <li>Created on June 12, 2021</li>
                    <li>Need to setup an authenticator</li>
                    <li>Use authenticator to create login page</li>
                    <li>As the main user, be able to easily add in new items to Entertainment, Ongoing, Completed</li>
                </ul>
            </section>
            <h3>Progress</h3>
            <p>Since I started the write-up late, my early problems have since disappeared from my noggin and will just update as I see fit.
                It's not like this page is gonna get much traction anyways. 
            </p>
            <section>
                
                <div style={{alignContent: 'center'}}>
                    <img 
                    style={{width: '100%', height: '100%'}}
                    src='https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/ProjectPDFs%2FearlyPrototype.JPG?alt=media&token=b9a66b9a-9601-41e4-8f4b-681f989bbcdc' 
                    alt='Early prototype of dashboard'/>
                    <p style={{textAlign : 'center'}}>Needed to determine how I would prototype the dashboard, settled on using a site called Figma</p>
                </div>
            </section>
        </Container>
    )
}

export default ProjectInfo;