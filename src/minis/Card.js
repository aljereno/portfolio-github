import React, { createRef } from 'react';
import useFirestore from '../hooks/useFirestore';
import { Link } from 'react-router-dom';
import '../styles/globalstyles.css';
import { motion} from 'framer-motion';

const Card = (props) => {
    const { docs } = useFirestore(props.imageName);
    let wrapper = createRef();

    return (
        <div ref={wrapper} style={{marginTop: "1rem"}} >
            { docs && docs.map((doc, index)=> (
            <div key={index} style={{ display: 'flex'}}>
            <motion.div 
                className="cardAttributes" 
                animate={{x: 0, opacity: 1}}
                initial={{x: -100, opacity: 0}}
                transition={{ bounce: 0.2, type: "spring"}}>
                <div className="ongoingBox">
                    <Link to={doc.link} style={{textDecoration: "none"}}>
                        <p style={{marginLeft: "1.5rem", marginRight: "1.5rem"}}>{doc.title}</p>
                    </Link>
                    <p>{doc.caption}</p>
                </div>
            </motion.div>
        </div>))}
        </div>  
    )
}

export default Card;
