import React from 'react';
import Container from 'react-bootstrap/Container';
import useFirestore from '../hooks/useFirestore';
import '../styles/globalstyles.css';
import InputField from '../components/InputFields';
const RightMonth = () => {

    const { docs } = useFirestore('july-collection-stories');

    return (
            <Container> 
                <p>Next Month</p>
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
                <InputField firestore={'july-collection-stories'} current={true}/>
            </Container>

    )
}

export default RightMonth;