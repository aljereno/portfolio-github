import React from 'react';
import { Container } from 'react-bootstrap';

const FireChart = () => {
    return (
        <Container>
            <h1 style={{textAlign: 'center'}}>Fire Chart</h1>
            <h2>Technologies Used: </h2>
            <ul>
                <li>Software Engineering</li>
                <li>PostgreSQL</li>
                <li>React</li>
                <li>Express.js</li>
                <li>Node.js</li>
            </ul>
            <h3>Objective</h3>
            <p>The main idea is to use data analysis/equations to analyze the worthiness of certain units. 
                The basis is just using comparable tools since a lot of the game is based on the statistical 
                aspect of the units. Whether the attack deals any damage, if they can attack twice, whether 
                it crits all of these things are determined just by stats randomized or not. This project 
                also stresses the use of a tech stack called PERN (PostgreSQL, Express, React, Node.js). 
                I am already familiar with creating sql queries and using React. As such, this is a great 
                exercise with node.js because even though I use npm, I don’t specifically use the node 
                platform to create a server. Furthermore, I get to learn about API calls and routes with express. 
            </p>
           <h3>Notes</h3>
           <ul>
               <li>
                   It’s not very mathematical, but the way stats are gained is through random generation based on 
                   a percentage of the specified stat. So if a stat is 110%, it means it’s guaranteed to do a +1 
                   but it could also do +2 where the exceeding percent difference determines that extra addition.
                </li>
                <li>
                    This is a purely visual chart project, but I also want to give a tool that could be used for comparison
                </li>
                <li>
                    Another component of this project is user input. I do want to create a tool where they can create a unit and 
                    see its growth stacked up against each unit.
                </li>
                <li>
                    Candlesticks can be good to note the low, low average, high average and high versions of the units stats since a 
                    bad roll’s can continue as much as good rolls can.
                </li>
                <li>
                    A loftier goal is to use machine learning techniques such as linear/logistic regression to determine what a class is, 
                    based on what the user inputs for its stats.
                </li>
           </ul>
           <h3>Early Chart Ideas:</h3>
           <ul>
               <li>
                    Bar chart representing a specific stat (att, spd .. etc) for each unit at their base level and max level
               </li>
               <li>
                    Bar chart or chart that is very similar to a candlestick representing specific stat once they have ascended to
                    their second class.
               </li>
               <li>
                    Line chart, representing the growth of a unit from base - 20 in both pre-promote and promoted versions.
               </li>
           </ul>
           <h3>Goals: </h3>
           <ul>
                <li>June 21, 2021.</li>
                <li>Create the skeleton using React.</li>
                <li>Deploy the app to a heroku.</li>
           </ul>
        </Container>
    )
}

export default FireChart;