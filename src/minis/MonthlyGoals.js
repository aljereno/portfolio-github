import React from 'react';
import Container from 'react-bootstrap/Container';
import InputField from '../components/InputFields';
import useFirestore from '../hooks/useFirestore';
import '../styles/globalstyles.css';

const MonthlyGoals = ({leftOrient, loggedIn}) => {

    const orient = leftOrient ? 'june-collection-stories' : 'july-collection-stories';
    const { docs } = useFirestore(`${orient}`);
    
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
                {loggedIn && <InputField firestore={'june-collection-stories'} current={true}/>}
            </Container>
    )
}

export default MonthlyGoals;