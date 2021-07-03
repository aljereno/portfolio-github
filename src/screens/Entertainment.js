import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import Card from '../minis/Card';
import ArchiveCard from '../components/ArchiveCard';
import ArchiveModal from '../components/ArchiveModal';

const Entertainment = () => {

    const [modalInformation, setModalInformation] = useState({url: null, title: null, placement: null, caption: null});
    return (
        // <Container style={{backgroundColor: '#2e4a1e', borderRadius: "25px"}}>
        //     <Card imageName="entertainment-stories"/>
        // </Container>
        <Container>
            <ArchiveCard setModalInformation={setModalInformation}/>
            {modalInformation.title && <ArchiveModal modalInformation={modalInformation} setModalInformation={setModalInformation}/>}
        </Container>
    )
}

export default Entertainment;