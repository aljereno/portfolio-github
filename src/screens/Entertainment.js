import React, {useEffect, useState, useRef} from 'react';
import { Container } from 'react-bootstrap';
import ArchiveCard from '../components/ArchiveCard';
import ArchiveModal from '../components/ArchiveModal';
import { Dropdown, Button } from 'react-bootstrap';
const Entertainment = () => {

    const [modalInformation, setModalInformation] = useState({url: null, title: null, placement: null, caption: null});
    const [firestore, setFirestore] = useState('entertainment-stories');

    const divRef = useRef();

    useEffect(() => {
        divRef.current.textContent = firestore.replace(/[^A-Z0-9]/ig, " ").toUpperCase();
    }, [firestore])
    return (
        // <Container style={{backgroundColor: '#2e4a1e', borderRadius: "25px"}}>
        //     <Card imageName="entertainment-stories"/>
        // </Container>
        <Container style={{marginTop: '1rem'}}>
            <div style={{display: "flex"}}>
                <h2 ref={divRef}>Entertainment List</h2>
                <Dropdown style={{marginLeft: "1rem"}}>
                <Button variant="secondary" onClick={() => setFirestore('entertainment-stories')}>Current</Button>
                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setFirestore('2017-game-archive')}>2017</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFirestore('2018-game-archive')}>2018</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFirestore('2019-game-archive')}>2019</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFirestore('2017-game-archive')}>2020</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown style={{marginLeft: "1rem"}}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Books/Comics/Manga
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        
                        <Dropdown.Item onClick={() => setFirestore('2019-print-archive')}>2019</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFirestore('2020-print-archive')}>2020</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown style={{marginLeft: "1rem"}}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Movies/Shows/Shorts
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setFirestore('2019-movie-archive')}>2019</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFirestore('2020-movie-archive')}>2020</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <ArchiveCard setModalInformation={setModalInformation} firestore={firestore}/>
            {modalInformation.title && <ArchiveModal modalInformation={modalInformation} setModalInformation={setModalInformation}/>}
        </Container>
    )
}

export default Entertainment;