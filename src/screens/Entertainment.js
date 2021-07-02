import React from 'react';
import { Container } from 'react-bootstrap';
import Card from '../minis/Card';
import useFirestore from '../hooks/useFirestore';

const Entertainment = () => {
    const { docs } = useFirestore('entertainment-stories')
    return (
        // <Container style={{backgroundColor: '#2e4a1e', borderRadius: "25px"}}>
        //     <Card imageName="entertainment-stories"/>
        // </Container>
        <Container style={{marginTop: "1rem"}}>
            <div className="entertain-grid">
            { docs && docs.map(doc => (
                <div className="entertain-wrap" style={{backgroundColor: "gray", justifyContent: "center", alignContent: "center"}}>
                    <h1 style={{writingMode: "vertical-lr", backgroundColor: "coral"}}>{doc.title}</h1>
                    {/* {doc.url && <img src={doc.url} alt={doc.placement}/>}  */}
                </div>
            ))}
        </div>
        </Container>
    )
}

export default Entertainment;