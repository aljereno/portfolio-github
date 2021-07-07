import React from 'react';
import { Container, Badge } from 'react-bootstrap';
const ArchiveModal = ({modalInformation, setModalInformation}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setModalInformation({url: null, title: null, placement: null, caption: null});
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <Container style={{marginTop: '10rem', backgroundColor: "#ADD8E6"}}>
                <h1><Badge variant="light">{modalInformation.title}</Badge></h1>
                <p style={{backgroundColor: "white", borderRadius: "15px", paddingLeft: "1rem"}}>{modalInformation.caption}</p>
                {modalInformation.url && <img src={modalInformation.url} alt="enlarged"/>}
            </Container>
        </div>
    )
}

export default ArchiveModal;