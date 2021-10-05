import React , {createRef} from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/globalstyles.css';
import useFirestore from '../hooks/useFirestore';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

const Completed = () => {
    const { docs } = useFirestore('completed-stories');
    let wrapper = createRef();
    
    return (
        
            <Container style={{color: "black", paddingBottom: "25px", borderRadius: "15px"}}>
            <div ref={wrapper}>
            { docs && docs.map((doc, index) => (
                <Link key={index} to={doc.link} style={{textDecoration: "none"}}>
                    {
                <div>
                    <motion.div key={index} className="completedAttributes"  
                    animate={{x: 0, opacity: 1}} 
                    initial={{opacity: 0, x: 100}} 
                    transition={{ ease: "easeOut", duration: 2, type: "spring", bounce: 0.3}}> 
                    <div style={{textAlign: "left", width: "100%", marginTop: "1rem"}}>
                        <div style={{display: "flex", marginBottom: "10px"}}>
                            <h4 style={{paddingLeft: "10px", marginRight: "10px"}}><Button variant="dark">{doc.title}</Button></h4>
                            <div style={{ display: "flex", flexWrap: "wrap"}}>
                                {doc.badges && doc.badges.map((attr, index) => (
                                    <div key={index}><h6><Badge style={{marginLeft: "20px", marginTop: "10px", overflowX: "hidden"}} bg="primary">{attr}</Badge></h6></div>
                                ))}
                            </div>
                        </div>
                        <div style={{display: "flex", marginBottom: "1px"}}>
                            {doc.url && <div style={{height: '100%', width: '100%', marginLeft: "1rem"}}>
                                <img className="completedImg" src={(doc.url)} alt={doc.title}/>
                            </div> }
                            <p style={{marginLeft: "20px", marginRight:"20px"}}>{doc.caption}</p>
                        </div>
                    </div>
            </motion.div>
                </div>
            }
                </Link>
            ))}
        </div>
        </Container>
        
    )
}

export default Completed;
