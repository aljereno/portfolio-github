import React from 'react';
import Container from 'react-bootstrap/Container';
import useFirestore from '../hooks/useFirestore';
import '../styles/globalstyles.css';

const LeftMonth = () => {

    const { docs } = useFirestore('january-project-stories');
    
    return (
            <Container>
                <p>January</p>
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

export default LeftMonth;