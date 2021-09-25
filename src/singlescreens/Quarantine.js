import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import MiniGallery from '../minis/MiniGallery';

const Quarantine = () => {
    return (
        <Container>
            <h1>Quarantine</h1>
            <p>Teammates: Aljaed Lui Ereno, Arnold Flores</p>
            <p>Full report located <a href="https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/ProjectPDFs%2FEE%20369%20Final%20Project%20Report.pdf?alt=media&token=ab665a79-75de-4b4f-8d1e-6d413ffbd656"> here </a>
            </p>
            <h2> Synopsis: </h2>
            <p>Two students learn the limits of their game knowledge by 
                trying to create a 2-D platformer with floaty and weighty 
                controls as the main gimmick. </p>
            <h2>Technologies Used: </h2>
            <ul>
                <li>Language C#</li>
                <li>Unity Game Engine</li>
            </ul>
            <Tabs defaultActiveKey="main">
                <Tab eventKey="main" title="Quarantine Information">
                <h2>Lessons Learned</h2>
            <p> 
                As we went through the class we learned various techniques in handling screens, menu, lightning, creating models/shaders/materials, collissions etc. 
                With these basic understanding of game development, we developed two levels that showcase the weighty and floaty nature of our posterior heavy man. 
                We wanted to create more complex levels that leveraged the possibilty of the floaty yet tight controls. Due to time constraints we were forced to 
                create a level based on dodging covid enemies and a themed "hell" dungeon. 
            </p>
            <p>
                As stated, the first level focuses on manuevring your character to dodge two variant of covid enemies, a horizontal and vertical moving molecule. 
                Something interesting I learned about programming the logic of the movement of these enemies is that I can't just use pixels and had to calculate 
                relative positions. Well duh of course you do, but for the longest I wasn't understanding why the horizontal enemies would b-line it to the left 
                and the vertical enemies were so inclined to meet god. 
            </p>
            <p>
                The enemies were a major kink and as such the hell dungeon was very lackluster. At first i wanted to design skeletons, ghouls, floating heads to 
                direct and taunt the player but i settled on a baby hand sticking up from the ground or the walls. Furthermore, since the background in this level
                 is colored to red another problem that also plagued the first level was made apparent. This problem was with the lighting, in which the level would
                  get brighter and brighter every time you clicked the retry button. To this day I still am not sure of the problem, maybe the theme was too dark for unity.  
            </p>
            <p>
                        All in all, me and my partner learned a great deal with not only coding but navigating and interacting with Unity itself. 
                There are plans to create more basic games that utilize unity and are disussed in the other pages. 
            </p>
                </Tab>
                <Tab eventKey="gallery" title="Gallery">
                    <MiniGallery document={'quarantine-images-collection'}/>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default Quarantine;