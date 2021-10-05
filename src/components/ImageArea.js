import React, {useState} from 'react';
import useFirestore from '../hooks/useFirestore';
import { Row, Container, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import GenshinCanvas from '../screens/GenshinCanvas';
const ImageArea = () => {

    const { docs } = useFirestore('genshin-character-progression');
    const [sel, setSel] = useState(null);
    return (
        <div style={{marginTop: "1rem"}}>
            <div style={{marginBottom: "1rem"}}>
                <Row>
                    <Container>
                        <p style={{textAlign: "center"}}>Choose a character by clicking on the heads of the screen</p>
                    </Container>
                </Row>
            </div>
            <nav>
                <ul style={{overflowX: "auto", height: "6rem", whiteSpace: "nowrap"}}>
                    {docs && docs.filter(d => d.completed === true).map((doc) => (
                        <motion.li 
                            key={doc.placement} 
                            style={{textDecoration: "none", overflow: 'auto', whiteSpace: "no wrap", display: "inline"}}
                            onClick={() => {setSel(doc)}}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            >
                            <a 
                                style={{textDecoration: "none"}} 
                                href={`#${doc.placement}`}
                                onClick={() => {setSel(doc)}} 
                            >
                            {doc.headUrl && <Image src={`${doc.headUrl}`} alt="character heads" roundedCircle/>}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </nav>
            <Container>
                <GenshinCanvas characters={sel}/>
            </Container>
        </div>
    )
}

export default ImageArea;