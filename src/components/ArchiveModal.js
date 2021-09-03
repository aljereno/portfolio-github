import React from 'react';
import { Container, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ArchiveModal = ({modalInformation, setModalInformation}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setModalInformation({url: null, title: null, placement: null, caption: null});
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <motion.div initial={{y:-100}} animate={{y:0}} transition={{duration: 0.5}}>
                <Container style={{marginTop: '10rem', backgroundColor: "#ADD8E6", borderRadius: "15px"}}>
                    <h1><Badge variant="light">{modalInformation.title}</Badge></h1>
                    <p style={{backgroundColor: "white", borderRadius: "15px", paddingLeft: "1rem"}}>{modalInformation.caption}</p>
                    {modalInformation.url && <img style={{marginTop: "5px", height: "auto"}} src={modalInformation.url} alt="enlarged"/>}
                </Container>
            </motion.div>
        </div>
    )
}

export default ArchiveModal;