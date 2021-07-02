import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { Container } from 'react-bootstrap';

const ArchiveCard = ({setModalImg}) => {
    const { docs } = useFirestore('entertainment-stories')
    return (
        <Container style={{marginTop: "1rem"}}>
            <div className="entertain-grid">
            { docs && docs.map(doc => (
                <div className="entertain-wrap" style={{backgroundColor: "gray"}}>
                    <h1 style={{writingMode: "vertical-lr", backgroundColor: "coral"}}>{doc.title}</h1>
                    {/* {doc.url && <img src={doc.url} alt={doc.placement}/>}  */}
                </div>
            ))}
        </div>
        </Container>
    )
}

export default ArchiveCard;
