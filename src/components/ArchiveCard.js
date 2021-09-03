import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
const ArchiveCard = ({setModalInformation, firestore}) => {

    const { docs } = useFirestore(firestore);

    const setInformation = (e) => {
        setModalInformation({title: e.title, caption: e.caption, url: e.url, placement: e.placement});
    }

    return (
        <Container style={{marginTop: "1rem", backgroundColor: "wheat", borderRadius: "1rem"}}> 
            <div className="entertain-grid">
                {docs && docs.map(doc => (
                    <div  className="entertain-wrap" 
                        onClick={() => setInformation(doc)}
                        key={doc.uid}
                    >
                        {doc.url && 
                            <motion.img 
                                initial={{scaleY: 0}} 
                                animate={{scaleY: 1}} 
                                transition={{duration: 1}}
                                src={doc.url} 
                                alt="uploaded pic" />}
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default ArchiveCard;
