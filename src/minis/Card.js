import React, { createRef } from 'react';
import useFirestore from '../hooks/useFirestore';
import { Link } from 'react-router-dom';
import '../styles/globalstyles.css';
import { motion } from 'framer-motion';

const Card = (props) => {
    const { docs } = useFirestore(props.imageName);

    let wrapper = createRef();

    return (
        <motion.div ref={wrapper} >
            { docs && docs.map((doc, index)=> (
                index === 0 ? <div key={doc.placement} style={{ marginTop:"2rem", display: 'flex'}}>
                <motion.div className="cardAttributes" initial={{opacity: 0, y:-100}} animate={{opacity: 1, y: 0}} transition={{duration: 1}}>
                    {doc.url && <div style={{height: '100%', width: '100%'}} >
                        <img className="ongoingImg" src={(doc.url)} alt={doc.title}/>
                    </div>  }
                    <div className="ongoingBox">
                        <Link to={doc.link} style={{textDecoration: "none"}}>
                            <p style={{marginLeft: "20px"}}>{doc.title}</p>
                        </Link>
                        <p style={{marginLeft: "20px"}}>{doc.caption}</p>
                    </div>
                </motion.div>
            </div>: <div key={doc.placement} style={{ display: 'flex'}}>
            <motion.div className="cardAttributes" style={{display: 'flex'}} initial={{opacity: 0, y:-100}} animate={{opacity: 1, y: 0}} transition={{duration: 1}}>
                {doc.url && <div style={{height: '100%', width: '100%'}} >
                    <img className="ongoingImg" src={(doc.url)} alt={doc.title}/>
                </div>  }
                <div className="ongoingBox">
                    <Link to={doc.link} style={{textDecoration: "none"}}>
                        <p style={{marginLeft: "20px"}}>{doc.title}</p>
                    </Link>
                    <p style={{marginLeft: "20px"}}>{doc.caption}</p>
                </div>
            </motion.div>
        </div>))}
        </motion.div>  
    )
}

export default Card;
