import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { Container } from 'react-bootstrap';

const ArchiveCard = ({setModalInformation, firestore}) => {
    const { docs } = useFirestore(firestore)

    const setInformation = (e) => {
        setModalInformation({title: e.title, caption: e.caption, url: e.url, placement: e.placement});
    }
    
    return (
        <Container style={{marginTop: "1rem", backgroundColor: "#ADD8E6", borderRadius: "1rem"}}>
            <div className="entertain-flex">
                {docs && docs.map(doc => (
                    <div className="entertain-wrap" 
                        style={{backgroundColor: "#D5FFCC"}}
                        onClick={() => setInformation(doc)}
                        key={doc.placement}
                    >
                        <h1 className="entertain-wrap-single"><b>{doc.title}</b></h1>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default ArchiveCard;
