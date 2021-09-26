import { motion } from 'framer-motion';
import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { Container, Tabs, Tab } from 'react-bootstrap';
import TechnicalThoughts from '../static/TechnicalThoughts';
import Leets from '../static/Leets';

const Profile = () => {
    const {docs} = useFirestore('past-notes');
    return (
        <Container style={{backgroundColor: "wheat", borderRadius: "10px", marginTop: "1rem"}}>
            <h1 style={{textAlign: 'center'}}>Aljaed Lui Crisolo Ereno</h1>
            <Tabs defaultActiveKey="main">
                <Tab eventKey="main" title="Main Section">
                    <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 1}}>
                    <div className="basicTextBox">
            <h3>Who am I?</h3>
            <p>
                An up and coming adult with a passion for problem solving, especially within the software engineering world.
                I love running long distances, reading books, watching movies and shows specifically of the organized crime 
                and far future/space genre and playing videogames. I tend to be sarcastic at times, especially when I know 
                the person can take it. Thanks for taking the time to read this. <span role="img" aria-label="pizzaEmoji">🍕</span> 
            </p>
            </div>
            <div className="basicTextBox">
            <h3>Career Goals?</h3>
            <p>
                I don’t necessarily care about a job title at this point, I have realized after going through many interviews and 
                reflecting on degree choice I have a knack for wanting to find hard things to do. I had heard that Computer Engineering 
                was hard, so I pursued it. I loved technology and math so that definitely helped, but one of the major driving forces 
                was that it was difficult. I wanted to struggle, I wanted to make mistakes, I wanted to be wrong. I believe that 
                that was the only reason why any sort of information could be retained for me. I don’t think I should be looked 
                down upon just because I don’t have lofty goals, I want to find a job that is hard, that continuously requires 
                me to learn, that pushes me. I don’t care what the title is, all I know is I am capable and I am excited to do it.
            </p>
            </div>
            <div className="basicTextBox">
            <h3>What I like to watch for career development</h3>
            <ul>
                <li><b>Coding Tech (Youtube)</b></li>
                <ul>
                    <li>Doesn’t really specialize in anything, their posts 
                    are usually talks about the specifics of different technologies, frameworks, languages.</li>
                    <li>Great for maybe a morning routine where you just want to drink coffee or tea and ease your way into coding.</li>
                </ul>
                <li><b>Fireship (Youtube):</b></li>
                <ul>
                    <li>One of the first few sources I had in terms of learning stuff about firebase.</li>
                    <li>Has since branched from that specific topic and has created numerous quick videos 
                    summarizing specific languages and frameworks.</li>
                    <li>Also great as part of someones morning routine.</li>
                </ul>
                <li><b>DevEd (Youtube):</b></li>
                <ul>
                    <li>Web development and UI focused content creator.</li>
                    <li>Helped me understand basics of API’s and working with API’s .</li>
                    <li>I also like the way he talks, very European but not the hard to understand version of European.</li>
                </ul>
                <li><b>The Net Ninja (Youtube):</b></li>
                <ul>
                    <li>I have watched 3 or 4 of his tutorial series and will continue to watch more.</li>
                    <li>His series has enough depth in it to incite curiosity, it allows the watcher to look into other things 
                    and really opens up what a person can do to heighten their knowledge.</li>
                </ul>
                <li><b>Brackeys (Youtube):</b></li>
                <ul>
                    <li>I haven’t watched enough of his content yet, but I will soon since I want to go back to Unity and 
                    create two specific games that I have been thinking about.</li>
                    <li>It seems like he has a ton of tutorials that I can really sink my teeth into.</li>
                </ul>
            </ul>
            </div>
            <div className="basicTextBox">
            <h3>Current Running Goals</h3>
            <p>
                I have recently started training for the Honolulu Marathon which I am a little terrified of since the longest 
                I’ve done is 11 miles. Hopefully by November I can get to 18 miles comfortably and so on the actual race I 
                could run the first 18 comfortably then briskly walk/jog the last 6.
            </p>
            </div>
            <div className="basicTextBox">
            <h3>Current Gaming Craze</h3>
            <p>
                I recently got into an RTS game called Starcraft II. Hot garbage in it, but playing Zerg and forcing myself to go 
                fast is such an amazing feeling. Have not tried rank with it though, but will try soon.
            </p>
            </div>
            <div className="basicTextBox">
            <h3>Current Reading Chore</h3>
            <p>
                Considered one of the classics, Dr. Jekyll and Mr. Hide is a book about a man with dual personalities. It’s apparently
                supposed to be a commentary on the nature of people where everyone usually has conflicting thoughts and actions which 
                could be a massive struggle to people. I don’t really know though since I haven’t sat down and read it yet. Hopefully 
                I don’t get lost in the prose. 
            </p>
            </div>
            <div className="basicTextBox">
            <h3>First Programming Language?</h3>
            <p>
                My early college career had me doing things in C and Java, where C became more my thing than Java. I really 
                liked C because of how low level everything was. I had to take care of pointers, their positions, making sure 
                not to lose them or else I’d segfault. It was basically like handing me tetris pieces and telling me to build 
                specific shapes with it. Java on the other hand felt like I was dropped in predefined shapes and I was tasked 
                with labelling them based on their characteristics and patterns. Not sure if that makes sense, but that’s my 
                comparison of my early programming languages.
            </p>
            </div>
            <div className="basicTextBox">
            <h3>Favorite Language?</h3>
            <p>
                JavaScript is what I’ve consistently coded in recently, I think Web development is the easiest to see my 
                contribution on since I could just spin up a localhost and actually take a look at my changes. It’s also a 
                bit like Java where the possibilities of doing things is dependent on how well you could describe your 
                problem/pattern/characteristics. I also like this because it means I get to continuously learn everyday. 
                React is my favorite flavor of JS frameworks. The component method makes so much sense to me and with that 
                I was able to branch out and learn Firebase. These two helped me create this website you're reading this on.
                 Recently I started to learn about adding motion to my components using a library called Framer Motion, which 
                 is why things look a bit smoother as you go through my pages.
            </p>
            </div>
            <div className="basicTextBox">
                <h3>List of all my past notes</h3>
                <p>
                    Not ordered so have fun sifting through the <span role="img" aria-label="bullandpoopemoji">🐂💩.</span> Personally think taking notes is integral to learning, but I don't
                    really consult my notes after I have typed or wrote it down. Although, I think the very act of typing/writing it down the first time helps stamp
                    the ideas to my spongy smooth brain. 
                </p>
                {docs && docs.map((doc, index) => (
                    <p key={index}><a href={`${doc.url}`} target="_blank" rel="noopener noreferrer">{doc.title}</a></p>
                ))}
            </div>
                    </motion.div>
            
                </Tab>
                <Tab eventKey="techThoughts" title="Technical Thoughts">
                    <TechnicalThoughts/>
                </Tab>
                <Tab eventKey="leet" title="Leets">
                    <div className="basicTextBox">
                        <p>Contains the Leetcode questions I have answered</p>
                        <Leets/>
                    </div>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default Profile;