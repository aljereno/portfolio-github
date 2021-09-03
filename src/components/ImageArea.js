import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { Row, Col, Badge} from 'react-bootstrap';
import Artifact from '../minis/Artifact';
import UnitStats from '../minis/UnitStats';
import { motion } from 'framer-motion';
const ImageArea = () => {

    const { docs } = useFirestore('genshin-character-progression');

    return (
        <div style={{marginTop: "1rem"}}>
            <div style={{marginBottom: "1rem"}}>
                <Row>
                <Col sm={3}>
                    <nav className="stickyToC" >
                        <h1>Unit List</h1>
                        <ul>
                            {docs && docs.filter(d => d.completed === true).map((doc, index) => (
                                <motion.li key={doc.placement} initial={{scaleX: 1.5}} animate={{scaleX: 1}} transition={{duration: 1}}>
                                    <a style={{textDecoration: "none"}} href={`#${doc.placement}`}>{doc.name}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                </Col>
                <Col>
                {docs && docs.filter(d => d.completed === true).map((doc, index) => (
                    
                    <div key = {index}>
                        {index % 2 === 0 ? 
                        <Row style={{marginTop: "1rem", backgroundColor: `${doc.bg}`, borderRadius: "25px", paddingBottom: "1rem"}}key={doc.placement}>
                            <Col md="auto" >{doc.url && <motion.img 
                                className="unitImage" 
                                style={{width: "auto", borderRadius: "25px"}}
                                src={doc.url} 
                                alt="uploaded pic"
                                whileHover={{scale: 1.05}}/>}</Col>
                            <Col>
                                <Row>
                                    <h4 style={{marginTop: "1rem"}}id={doc.placement}><Badge bg="secondary">{doc.name}</Badge></h4>
                                <Col>
                                    <UnitStats doc={doc}/>
                                </Col>
                                <Col>
                                    <Artifact doc={doc}/>
                                </Col>
                                </Row>
                            </Col>
                        </Row> 
                        : 
                        <Row style={{marginTop: "1rem", backgroundColor: `${doc.bg}`, borderRadius: "25px", paddingBottom: "1rem"}} key={doc.placement}>
                            <Col>
                                <Row>
                                    <h4 style={{marginTop: "1rem"}} id={doc.placement}><Badge bg="secondary">{doc.name}</Badge></h4>
                                <Col>
                                    <Artifact doc={doc}/>
                                </Col>
                                <Col>
                                    <UnitStats doc={doc}/>
                                </Col>
                                </Row>
                            </Col>
                            <Col md="auto">{doc.url && <motion.img 
                            className="unitImage" 
                            style={{width: "auto", height: "auto  ", borderRadius: "25px"}}
                            src={doc.url} 
                            alt="uploaded pic"
                            whileHover={{scale: 1.05}}/>}</Col>
                        </Row>
                        }
                    </div>
                ))}
                </Col>
                </Row>
            </div>
        </div>
    )
}

export default ImageArea;