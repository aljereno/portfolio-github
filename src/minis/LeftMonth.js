import React from 'react';
import Container from 'react-bootstrap/Container';
import useFirestore from '../hooks/useFirestore';
import '../styles/globalstyles.css';

const LeftMonth = () => {

    const { docs } = useFirestore('june-collection-stories');
    
    return (
            <Container>
                <p>Current Month</p>
                <div className="goalContainer">
                    {docs && docs.map(doc => (
                        doc.completed ? 
                        <p key={doc.id}><strike>{doc.title}</strike></p>
                        :
                        <p key={doc.id}>
                            {doc.title}
                        </p> 
                    ))}
                </div>
            </Container>
    )
}

export default LeftMonth;