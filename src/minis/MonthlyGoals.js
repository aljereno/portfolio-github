import React from 'react';
import Container from 'react-bootstrap/Container';
import useFirestore from '../hooks/useFirestore';

const MonthlyGoals = ({leftOrient}) => {

    const orient = leftOrient ? 'october-collection-stories' : 'november-collection-stories';
    const { docs } = useFirestore(`${orient}`);
    
    return (
            <Container >
                {leftOrient ? <p><b>Current Month</b></p> : <p><b>Next Month</b></p>}
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

export default MonthlyGoals;