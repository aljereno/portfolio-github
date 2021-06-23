import React from 'react';
import Container from 'react-bootstrap/Container';
import useFirestore from '../hooks/useFirestore';
import '../styles/globalstyles.css';

const RightMonth = () => {

    const { docs } = useFirestore('july-collection-stories');

    return (
            <Container> 
                <p>Next Month</p>
                <div className="goalContainer">
                    {docs && docs.map(doc => (
                        doc.placement <= 8 ? 
                        <p key={doc.id}>
                            {doc.title}
                        </p> : <p></p>
                    ))}
                </div>
            </Container>

    )
}

export default RightMonth;