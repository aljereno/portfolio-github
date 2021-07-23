import React, {useEffect, useState, useRef} from 'react';
import { Container, Badge} from 'react-bootstrap';
import ArchiveCard from '../components/ArchiveCard';
import ArchiveModal from '../components/ArchiveModal';
import { Dropdown, Button } from 'react-bootstrap';
import InputField from '../components/InputFields';
const Entertainment = ({loggedIn}) => {

    const [modalInformation, setModalInformation] = useState({url: null, title: null, placement: null, caption: null});
    const [firestore, setFirestore] = useState('2021-game-archive');

    const divRef = useRef();

    useEffect(() => {
        divRef.current.textContent = firestore.replace(/[^A-Z0-9]/ig, " ").toUpperCase();
    }, [firestore])
    
    return (
        <Container style={{marginTop: '1rem'}}>
            <div style={{display: "flex"}}>
            <h3><Badge variant="light" ref={divRef}>Entertainment List</Badge></h3>
                
                <Dropdown style={{marginLeft: "1rem"}}>
                <Button variant="primary" onClick={() => setFirestore('2021-game-archive')}>Current Games</Button>
                <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setFirestore('2017-game-archive')}>2017</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFirestore('2018-game-archive')}>2018</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFirestore('2019-game-archive')}>2019</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFirestore('2020-game-archive')}>2020</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown style={{marginLeft: "1rem"}}>
                    <Button variant="primary" onClick={() => setFirestore('2021-print-archive')}>Current Books</Button>
                    <Dropdown.Toggle variant="primary" id="dropdown-split-basic"/>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setFirestore('2019-print-archive')}>2019</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFirestore('2020-print-archive')}>2020</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown style={{marginLeft: "1rem"}}>
                    <Button variant="primary" onClick={() => setFirestore('2021-movie-archive')}>Current Movies</Button>
                    <Dropdown.Toggle variant="primary" id="dropdown-split-basic"/>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setFirestore('2019-movie-archive')}>2019</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFirestore('2020-movie-archive')}>2020</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown style={{marginLeft: "1rem"}}>
                    <Button variant="primary" onClick={() => setFirestore('2021-show-archive')}>Current Shows</Button>
                    <Dropdown.Toggle variant="primary" id="dropdown-split-basic"/>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setFirestore('2019-show-archive')}>2019</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFirestore('2020-show-archive')}>2020</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <ArchiveCard setModalInformation={setModalInformation} firestore={firestore}/>
            {modalInformation.title && <ArchiveModal modalInformation={modalInformation} setModalInformation={setModalInformation}/>}
            {loggedIn && <InputField firestore={firestore} current={false}/>}
        </Container>
    )
}

export default Entertainment;