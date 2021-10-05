import React from 'react';
import { Accordion, Button, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
const FlowerArtifact = ({doc}) => {
    return (
        <motion.div 
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            className="firstDiv">
            <div className="secondDiv">
            <p><b>Name:</b> {doc.artifact.aflower.name} <b>Level:</b> {doc.artifact.aflower.lv}</p>
            <p><b>Main Stat (HP):</b> {doc.artifact.aflower.main}</p>
            <ul>
                <li><b>{doc.artifact.aflower.sub1[0]}:</b> {doc.artifact.aflower.sub1[1]}</li>
                <li><b>{doc.artifact.aflower.sub2[0]}:</b> {doc.artifact.aflower.sub2[1]}</li>
                <li><b>{doc.artifact.aflower.sub3[0]}:</b> {doc.artifact.aflower.sub3[1]}</li>
                <li><b>{doc.artifact.aflower.sub4[0]}:</b> {doc.artifact.aflower.sub4[1]}</li>
            </ul>
            {doc.artifact.aflower.img && <Image src={`${doc.artifact.aflower.img}`}/>}
            </div>
        </motion.div>
    )
}

const FeatherArtifact = ({doc}) => {
    return (
        <motion.div 
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            className="firstDiv">
            <div className="secondDiv">
            <p><b>Name:</b> {doc.artifact.bfeather.name} <b>Level:</b> {doc.artifact.bfeather.lv}</p>
            <p><b>Main Stat (ATK):</b> {doc.artifact.bfeather.main}</p>
            <ul>
                <li><b>{doc.artifact.bfeather.sub1[0]}:</b> {doc.artifact.bfeather.sub1[1]}</li>
                <li><b>{doc.artifact.bfeather.sub2[0]}:</b> {doc.artifact.bfeather.sub2[1]}</li>
                <li><b>{doc.artifact.bfeather.sub3[0]}:</b> {doc.artifact.bfeather.sub3[1]}</li>
                <li><b>{doc.artifact.bfeather.sub4[0]}:</b> {doc.artifact.bfeather.sub4[1]}</li>
            </ul>
            {doc.artifact.bfeather.img && <Image src={`${doc.artifact.bfeather.img}`}/>}
            </div>
        </motion.div>
    )
}

const SandsArtifact = ({doc}) => {
    return (
        <motion.div
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}} 
            className="firstDiv">
            <div className="secondDiv">
            <p><b>Name:</b> {doc.artifact.csands.name} <b>Level:</b> {doc.artifact.csands.lv}</p>
            <p><b>Main Stat ({doc.artifact.csands.main[0]}):</b> {doc.artifact.csands.main[1]}</p>
            <ul>
                <li><b>{doc.artifact.csands.sub1[0]}:</b> {doc.artifact.csands.sub1[1]}</li>
                <li><b>{doc.artifact.csands.sub2[0]}:</b> {doc.artifact.csands.sub2[1]}</li>
                <li><b>{doc.artifact.csands.sub3[0]}:</b> {doc.artifact.csands.sub3[1]}</li>
                <li><b>{doc.artifact.csands.sub4[0]}:</b> {doc.artifact.csands.sub4[1]}</li>
            </ul>
            {doc.artifact.csands.img && <Image src={`${doc.artifact.csands.img}`}/>}
            </div>
        </motion.div>
    )
}

const CupArtifact = ({doc}) => {
    return (
        <motion.div 
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            className="firstDiv">
            <div className="secondDiv">
            <p style={{marginLeft: "1rem"}}><b>Name:</b> {doc.artifact.dcup.name} <b>Level:</b> {doc.artifact.dcup.lv}</p>
            <p style={{marginLeft: "1rem"}}><b>Main Stat ({doc.artifact.dcup.main[0]}):</b> {doc.artifact.dcup.main[1]}</p>
            <ul>
                <li><b>{doc.artifact.dcup.sub1[0]}:</b> {doc.artifact.dcup.sub1[1]}</li>
                <li><b>{doc.artifact.dcup.sub2[0]}:</b> {doc.artifact.dcup.sub2[1]}</li>
                <li><b>{doc.artifact.dcup.sub3[0]}:</b> {doc.artifact.dcup.sub3[1]}</li>
                <li><b>{doc.artifact.dcup.sub4[0]}:</b> {doc.artifact.dcup.sub4[1]}</li>
            </ul>
            {doc.artifact.dcup.img && <Image src={`${doc.artifact.dcup.img}`}/>}
            </div>
        </motion.div>
    )
}


const CrownArtifact = ({doc}) => {
    return (
        <motion.div 
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            className="firstDiv">
            <div className="secondDiv">
            <p><b>Name: </b>{doc.artifact.ecrown.name} <b>Level:</b> {doc.artifact.ecrown.lv}</p>
            <p><b>Main Stat ({doc.artifact.ecrown.main[0]}):</b> {doc.artifact.csands.main[1]}</p>
            <ul>
                <li><b>{doc.artifact.ecrown.sub1[0]}:</b> {doc.artifact.ecrown.sub1[1]}</li>
                <li><b>{doc.artifact.ecrown.sub2[0]}:</b> {doc.artifact.ecrown.sub2[1]}</li>
                <li><b>{doc.artifact.ecrown.sub3[0]}:</b> {doc.artifact.ecrown.sub3[1]}</li>
                <li><b>{doc.artifact.ecrown.sub4[0]}:</b> {doc.artifact.ecrown.sub4[1]}</li>
            </ul>
            {doc.artifact.ecrown.img && <Image src={`${doc.artifact.ecrown.img}`}/>}
            </div>
        </motion.div>
    )
}

const Artifact = ({doc, parentFunc, setDisplay}) => {

    const choose = (choice) => {
        parentFunc('artifact');
        switch(choice){
            case 'flower':
                setDisplay(<FlowerArtifact doc={doc}/>);
                break;
            case 'feather':
                setDisplay(<FeatherArtifact doc={doc}/>);
                break;
            case 'sands':
                setDisplay(<SandsArtifact doc={doc}/>);
                break;
            case 'cup':
                setDisplay(<CupArtifact doc={doc}/>);
                break;
            case 'crown':
                setDisplay(<CrownArtifact doc={doc}/>);
                break;
            default:
        }
    }

    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item >
                <Accordion.Header style={{contentAlign: "center"}}>Artifacts</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li><Button variant="outline-dark" onClick={() => {choose("flower")}}>Flower</Button></li>
                        <li><Button variant="outline-dark" onClick={() => {choose("feather")}}>Feather</Button></li>
                        <li><Button variant="outline-dark" onClick={() => {choose("sands")}}>Sands</Button></li>
                        <li><Button variant="outline-dark" onClick={() => {choose("cup")}}>Cup</Button></li>
                        <li><Button variant="outline-dark" onClick={() => {choose("crown")}}>Crown</Button></li>
                    </ul>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Artifact;