import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import Card from '../minis/Card';
import ArchiveCard from '../components/ArchiveCard';
import ArchiveModal from '../components/ArchiveModal';

const Entertainment = () => {


    const [modalImg, setModalImg] = useState(null);
    return (
        // <Container style={{backgroundColor: '#2e4a1e', borderRadius: "25px"}}>
        //     <Card imageName="entertainment-stories"/>
        // </Container>
        <div>
            <ArchiveCard setModalImg={setModalImg}/>
            {modalImg && <ArchiveModal modalImg={modalImg} setModalImg={setModalImg}/>}
        </div>
    )
}

export default Entertainment;