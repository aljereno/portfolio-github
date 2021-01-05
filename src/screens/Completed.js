import React from 'react';
import Container from 'react-bootstrap/Container';
import useWindowDimensions from '../components/WindowDimensions'
import useFirestore from '../hooks/useFirestore';
import '../styles/globalstyles.css';

const Completed = () => {

    const { height, width } = useWindowDimensions();
    const { docs } = useFirestore('completed-stories');
    console.log(docs);
    return (
        <div style={{backgroundColor: '#C4C4C4', width: width, height: height}}>
            <div style={{backgroundColor: 'Coral'}}>
                <Container>
                    <p style={{textAlign: "center"}}>Completed</p>
                    { docs && docs.map(doc => (
                        <Container key={doc.id}>
                            <p href={doc.url}>
                            {doc.title}
                            {doc.synopsis}
                            </p>
                        {/* <img src={doc.url} alt="pdf"/> */}
                        </Container>
                    ))}
                </Container>
            </div>
        </div>
    )
}

export default Completed;