import React from 'react';
import Container from 'react-bootstrap/Container';
import { Tabs, Tab } from 'react-bootstrap';

export default function Weatherbox(){
    return (
        <Container>
            <h1>SCEL Weatherbox</h1>
            <p>Spring 2019 Teammates: Kenneth Lauritzen, Rammell Transfiguracion, Aljaed Lui Ereno</p>
            <p>Fall 2020 Teammates: Rammell Transfiguracion, Aljaed Lui Ereno, Diwen Lin</p>
            <p>Lab Manager Spring 2019: Josh Claudio</p>
            <p>Lab Manager Fall 2019: Sharmaine Javiar </p>
            <p>Principal Investigator: Dr. Anthony Kuh </p>
            <p>A full report for Fall 2019 is located <a href="https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/ProjectPDFs%2FGuave%20F19%20Final%20Report.pdf?alt=media&token=de82b4d3-8b39-4d39-85a9-445aac1248b5"> here</a></p>
            <h1>Synopsis: </h1>
            <p>Design, Document and develop a prototype Weatherbox meant to keep itself powered to capture meteorological data of:
                barometric pressure, temperature, solar irradiance. 
            </p>
            <h2>Technologies used: </h2>
            <ul>
                <li>Eagle</li>
                <li>Arduino</li>
                <li>PCB Design Principles</li>
                <li>Soldering</li>
            </ul>
            <Tabs defaultActiveKey="main">
                <Tab eventKey="main" title="Weatherbox Information">
                <h2>Lessons Learned</h2>
            <p> Smart Campus Energy Lab, is a UH Manoa lab that is focused on allowing students to directly answer and help with the ever present problem of 
                renewable energy. The main idea is to use the meteorological data gathered to make decisions on which systems and buildings to power at certain 
                times of the year the semester, week or day. If the weather was a cold, dark and rainy we could decrease the load of the AC as to not force the 
                system to cool down any further. 
            </p>
            <p> SCEL consists of a multitude of teams; teams dedicated to weatherbox design (such as we), to server upkeep and design, to website and data visualization
                and design of housing for the weatherbox. As such, all the teams must be able to easily communicate with each other. The hardware team further 
                subdivides itself into four more teams, two upper-level design and two-lower level design. The lower-level design consists of freshmens or sophmores and
                are required to work with a very specific set of parts mainly an Arduino Uno. The upper-level branches off by allowing the students to do their own 
                research and use the parts they deemed as useful. The team I joined was Guava, who specialized into creating a compact board by taking only the necessary
                parts off of other components and soldering it ourselves. 
            </p>
            <p> Coming into this lab, I had very limited experience with the Arduino, let alone trying to solder a small board together since I joined at the upper-level
                team. Thanks to the hard work of my teammates, lab manager, and guidance of Dr. Kuh I learned enough to scrape by and begin assisting 
                them into deployment. As noted, I took this for two semesters; which counted as a junior and senior year project capstone. 
                Along with trying to create the board, we also had to maintain a design document that is up on the 
            </p>
                </Tab>
                <Tab eventKey="gallery" title="Gallery">
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    <img 
                    style={{width: '50%', height: '50%'}}
                    src='https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/Weatherbox%2FFigure1.JPG?alt=media&token=bb5090f7-b67c-4ba6-9fb0-5fa0ab6b0621' 
                    alt='Early prototype of dashboard'/>
                    <img 
                    style={{width: '50%', height: '50%'}}
                    src='https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/Weatherbox%2FFigure2.JPG?alt=media&token=6b2a2550-e06f-4f36-ae75-a707a7debb92' 
                    alt='Early prototype of dashboard'/>
                    <img 
                    style={{width: '50%', height: '50%'}}
                    src='https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/Weatherbox%2FFigure3.JPG?alt=media&token=b583dc86-08f5-49ea-8a2c-3f469e5c5774' 
                    alt='Early prototype of dashboard'/>
                    <img 
                    style={{width: '50%', height: '50%'}}
                    src='https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/Weatherbox%2FFigure4.JPG?alt=media&token=54ac7f27-321b-4ad2-b0ab-5aa14e697c27' 
                    alt='Early prototype of dashboard'/>
                    <img 
                    style={{width: '50%', height: '50%'}}
                    src='https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/Weatherbox%2FFigure5.JPG?alt=media&token=b950ef25-0cec-4389-b051-b6474614f013' 
                    alt='Early prototype of dashboard'/>
                    <img 
                    style={{width: '50%', height: '50%'}}
                    src='https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/Weatherbox%2FFigure6.JPG?alt=media&token=5cbded5b-fda7-4e46-8132-292d7a5a409f' 
                    alt='Early prototype of dashboard'/>
                    <img 
                    style={{width: '50%', height: '50%'}}
                    src='https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/Weatherbox%2FFigure78.JPG?alt=media&token=18838594-8195-47f9-8038-38f6273ea246' 
                    alt='Early prototype of dashboard'/>
                    <img 
                    style={{width: '50%', height: '50%'}}
                    src='https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/Weatherbox%2FFigure910.JPG?alt=media&token=b317435f-0bc7-49ac-89cd-f91c315c741a' 
                    alt='Early prototype of dashboard'/>
                    <img 
                    style={{width: '50%', height: '50%'}}
                    src='https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/Weatherbox%2FFigure11.JPG?alt=media&token=76766c4f-4c33-4ebd-856b-7242eab50f89' 
                    alt='Early prototype of dashboard'/>
                    <img 
                    style={{width: '50%', height: '50%'}}
                    src='https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/Weatherbox%2FFigure12.JPG?alt=media&token=4c6af88c-34d1-4da7-a79d-b31a7ad9f665' 
                    alt='Early prototype of dashboard'/>
                    <img 
                    style={{width: '50%', height: '50%'}}
                    src='https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/Weatherbox%2FFigure13.JPG?alt=media&token=3e614c78-3b80-431e-bdd7-8dcaea9bb00b' 
                    alt='Early prototype of dashboard'/>
                    <img 
                    style={{width: '50%', height: '50%'}}
                    src='https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/Weatherbox%2FFigure14.JPG?alt=media&token=5a35b4e0-bb5e-4ecd-baa2-fa4afb3b27ce' 
                    alt='Early prototype of dashboard'/>
                    </div>
                </Tab>
            </Tabs>
            
        </Container>
    )
}