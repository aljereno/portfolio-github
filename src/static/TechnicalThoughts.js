import React from 'react';
import { motion } from 'framer-motion';

const TechnicalThoughts = () => {
    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}>
            <div className="basicTextBox">
                    <p>Tab Contains all the technical things that I can explain. Mainly Web Development, but I am looking to
                        branch out to more creative things like Blender and Unity.
                    </p>
                    <h3>What is React?</h3>
                    <p>
                        So as I said, I chose React because it provides a clean way for developers to create their sites. 
                        From what I know about web development without React, is that for every page you want to create, 
                        you would need to create separate .html files for it. Or you could dynamically change the content 
                        by using querySelectors and manipulating the DOM. I am confident that these might be wrong assumptions, 
                        but nevertheless the React framework definitely makes web development a bit easier to get going. 
                        React is an example of a concept called single page applications, this is because there is only one 
                        html file. It uses a component method to swap in different parts that come together to make a single 
                        page. How I like to think about it is, imagine you have a single blank sheet of paper as your web page. 
                        Your components are the different parts of the page, say a Navigation bar, a text box, images and videos 
                        which could be represented as a sticky note. So you place the sticky notes on this paper and when you 
                        want to change the page, say move to a gallery. You take all the sticky notes out (nav bar, text box, 
                        images etc.) and place your gallery sticky note on the page.
                    </p>
                    <h3>What else do I want to learn about React?</h3>
                    <p>I’ll put this into a list format and will constantly update this as I learn more:</p>
                    <ul>
                        <li>Custom Hooks</li>
                        <li>Connecting to different API's</li>
                        <li>Connection with Java, specifically Spring Boot</li>
                        <li>Redux for complex state management</li>
                        <li>Interaction with Node</li>
                    </ul>
                    <h3>What is Firebase?</h3>
                    <p>
                        Firebase is a google service that allows the developer to store and access their data, host their website 
                        and even authenticate users if you need logging in capabilities. This website uses all of those in various 
                        ways. The images are stored in what is called the Firebase Storage, the service generates a usable url 
                        that can be called into my firestore or in my img tag’s src field. I also have a NoSQL database called 
                        Firebase Firestore that considers it’s tables as collections and the data fields as documents. An example 
                        of this structure is my gallery page on the entertainment project. The images and blurbs are all stored in 
                        their respective collections such as the 2020 movie archive. I use a custom react hook to asynchronously 
                        request the firestore database for the specific collection then map through it. Creating dynamic elements 
                        that can be changed just as easily as adding to the collection or removing it. I use their authentication 
                        service to make it easier for me to: A, enter this information for this project since I know I will 
                        continuously add to it over the years and B, to make sure that I am the only one capable of doing this. 
                        I recommend first time web developers this tech stack since there are tons of ways to diverge from this.
                    </p>
                    </div >
                    
        </motion.div>
    )
}

export default TechnicalThoughts;