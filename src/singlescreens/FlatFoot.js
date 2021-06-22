import React from 'react';
import { Container } from 'react-bootstrap';

const FlatFoot = () => {
    return (
        <Container>
            <h1 style={{textAlign: 'center'}}>Flat Foot</h1>
            <h2>Technologies Used: </h2>
            <ul>
                <li>Unity</li>
                <li>Mobile Android Development</li>
                <li>C#</li>
                <li>Game Design</li>
            </ul>
            <h3>Objective</h3>
            <p>
                I have always been fascinated by clicker games, from Cookie Clicker to my most
                recent game Legends of Idleon. Fascinating games, try them out if you want to satisfy
                your lizard brain with gradually increasing numbers. I have this concept that the idle clicker
                game has always had a connection with long distance running. In the beginning your
                trying to catch up, trying to actively like the activity your doing. In the clicker
                game, your trying to see which ones to upgrade first, which ones to prioritze. But as time goes
                by, you get into the zone and the number of miles adds up and everything is basically
                just progress. Flat Foot will also be my first foray into the mobile android space, 
                meaning I'd have to shell out $25 at some point to be able to publish this.
            </p>
            <h3>Ideas:</h3>
            <ul>
                <li>Accumulate miles by running, mainly the running energy is used to power the city you live</li>
                <li>Vendors, takes in miles as currency</li>
                <ul>
                    <li>Tech industry: Access to performance clothes and accessories, requires power to run</li>
                    <li>Health Industry: Rehab for injuries sustained due to bottlenecks and other human upgrades, requires power to run</li>
                    <li>Electric Industry: Powers the two industries above 
                        ,upgrades makes use of miles more efficiently,
                        don't have to require so much to power things</li>

                </ul>
                <li>Create bottlenecks so that it's not too idle</li>
                <li>First bottleneck: Clicking for too long exhausts the player, have to minimize with rest</li>
                <li>Second bottlenect: Resting for too long means you get too stiff, leading to slower gains</li>
                <li>These bottlenecks don't really affect the game if you don't have the game on, but I want to aim for active gameplay if you do have it on</li>
            </ul>
            <h3>Things to buy:</h3>
            <ul>
                <li>Shoes</li>
                <ul>
                    <li>Nike Wildhorse 6</li>
                    <li>Jesus Slippers</li>
                    <li>Vans Old Skools</li>
                    <li>Jordans</li>
                    <li>Ultraboosts</li>
                    <li>Nike Pegasus</li>
                    <li>Hoka</li>
                </ul>
                <li>Pedalling Equipment for light training while resting</li>
                <li>Better maps/tracks</li>
                <li>Gym Membership/Trainer</li>
                <li>Supplements</li>
            </ul>
        </Container>
    )
}

export default FlatFoot;