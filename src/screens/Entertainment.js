import React, {useEffect, useState, useRef} from 'react';
import { Container } from 'react-bootstrap';
import ArchiveCard from '../components/ArchiveCard';
import ArchiveModal from '../components/ArchiveModal';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import InputField from '../components/InputFields';
import { motion } from 'framer-motion';

const Entertainment = ({loggedIn}) => {

    const [modalInformation, setModalInformation] = useState({url: null, title: null, placement: null, caption: null});
    const [firestore, setFirestore] = useState('2021-game-archive');

    const divRef = useRef();

    useEffect(() => {
        divRef.current.textContent = firestore.replace(/[^A-Z0-9]/ig, " ").toUpperCase();
    }, [firestore])
    
    return (
        <motion.div initial={{y:-100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1}}>
            <Container style={{marginTop: '1rem'}}>
            <Navbar expand="lg">
                <Container fluid>
                <Navbar.Brand  ref={divRef}>Entertainment List</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-game" >
                <Nav>
                    <NavDropdown title="Games">
                        <NavDropdown.Item onClick={() => {setFirestore('2021-game-archive')}}>2021</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {setFirestore('2020-game-archive')}}>2020</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {setFirestore('2019-game-archive')}}>2019</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {setFirestore('2018-game-archive')}}>2018</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {setFirestore('2017-game-archive')}}>2017</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="navbar-print">
                <Nav>
                    <NavDropdown title="Prints">
                        <NavDropdown.Item onClick={() => {setFirestore('2021-print-archive')}}>2021</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {setFirestore('2020-print-archive')}}>2020</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {setFirestore('2019-print-archive')}}>2019</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="navbar-movie">
                <Nav>
                    <NavDropdown title="Movies">
                        <NavDropdown.Item onClick={() => {setFirestore('2021-movie-archive')}}>2021</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {setFirestore('2020-movie-archive')}}>2020</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {setFirestore('2019-movie-archive')}}>2019</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="navbar-show">
                <Nav>
                    <NavDropdown title="Shows">
                        <NavDropdown.Item onClick={() => {setFirestore('2021-show-archive')}}>2021</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {setFirestore('2020-show-archive')}}>2020</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {setFirestore('2019-show-archive')}}>2019</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <ArchiveCard setModalInformation={setModalInformation} firestore={firestore}/>
            {modalInformation.title && <ArchiveModal modalInformation={modalInformation} setModalInformation={setModalInformation}/>}
            {loggedIn && <InputField firestore={firestore} current={false}/>}
        </Container>
        </motion.div>
    )
}

export default Entertainment;