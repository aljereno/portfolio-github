import React from 'react';
import { Container } from 'react-bootstrap';
const ArchiveModal = ({modalInformation, setModalInformation}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setModalInformation({url: null, title: null, placement: null, caption: null});
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <Container style={{marginTop: '10rem', backgroundColor: "coral"}}>
                <h1>{modalInformation.title}</h1>
                <p>{modalInformation.caption}</p>
                <img src={modalInformation.url} alt="enlarged"/>
            </Container>
        </div>
    )
}

export default ArchiveModal;