import React from 'react';
import { Accordion } from 'react-bootstrap';

const Artifact = ({doc}) => {
    return (
        <div>
            <h4 >Constellation: {doc.constellation}</h4>
            <Accordion defaultActiveKey="0">
                <Accordion.Item>
                <Accordion.Header>Flower</Accordion.Header>
                <Accordion.Body>
                    <p><b>Name:</b> {doc.artifact.aflower.name} <b>Level:</b> {doc.artifact.aflower.lv}</p>
                    <p><b>Main Stat (HP):</b> {doc.artifact.aflower.main}</p>
                    <ul>
                        <li><b>{doc.artifact.aflower.sub1[0]}:</b> {doc.artifact.aflower.sub1[1]}</li>
                        <li><b>{doc.artifact.aflower.sub2[0]}:</b> {doc.artifact.aflower.sub2[1]}</li>
                        <li><b>{doc.artifact.aflower.sub3[0]}:</b> {doc.artifact.aflower.sub3[1]}</li>
                        <li><b>{doc.artifact.aflower.sub4[0]}:</b> {doc.artifact.aflower.sub4[1]}</li>
                    </ul>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0">
                <Accordion.Item>
                <Accordion.Header>Feather</Accordion.Header>
                <Accordion.Body>
                    <p><b>Name:</b> {doc.artifact.bfeather.name} <b>Level:</b> {doc.artifact.bfeather.lv}</p>
                    <p><b>Main Stat (ATK):</b> {doc.artifact.bfeather.main}</p>
                        <ul>
                            <li><b>{doc.artifact.bfeather.sub1[0]}:</b> {doc.artifact.bfeather.sub1[1]}</li>
                            <li><b>{doc.artifact.bfeather.sub2[0]}:</b> {doc.artifact.bfeather.sub2[1]}</li>
                            <li><b>{doc.artifact.bfeather.sub3[0]}:</b> {doc.artifact.bfeather.sub3[1]}</li>
                            <li><b>{doc.artifact.bfeather.sub4[0]}:</b> {doc.artifact.bfeather.sub4[1]}</li>
                        </ul>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0">
                <Accordion.Item>
                <Accordion.Header>Sands</Accordion.Header>
                <Accordion.Body>
                    <p><b>Name:</b> {doc.artifact.csands.name} <b>Level:</b> {doc.artifact.csands.lv}</p>
                    <p><b>Main Stat ({doc.artifact.csands.main[0]}):</b> {doc.artifact.csands.main[1]}</p>
                    <ul>
                        <li><b>{doc.artifact.csands.sub1[0]}:</b> {doc.artifact.csands.sub1[1]}</li>
                        <li><b>{doc.artifact.csands.sub2[0]}:</b> {doc.artifact.csands.sub2[1]}</li>
                        <li><b>{doc.artifact.csands.sub3[0]}:</b> {doc.artifact.csands.sub3[1]}</li>
                        <li><b>{doc.artifact.csands.sub4[0]}:</b> {doc.artifact.csands.sub4[1]}</li>
                    </ul>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0">
                <Accordion.Item>
                <Accordion.Header>Cup</Accordion.Header>
                <Accordion.Body>
                    <p><b>Name:</b> {doc.artifact.dcup.name} <b>Level:</b> {doc.artifact.dcup.lv}</p>
                    <p><b>Main Stat ({doc.artifact.dcup.main[0]}):</b> {doc.artifact.dcup.main[1]}</p>
                    <ul>
                        <li><b>{doc.artifact.dcup.sub1[0]}:</b> {doc.artifact.dcup.sub1[1]}</li>
                        <li><b>{doc.artifact.dcup.sub2[0]}:</b> {doc.artifact.dcup.sub2[1]}</li>
                        <li><b>{doc.artifact.dcup.sub3[0]}:</b> {doc.artifact.dcup.sub3[1]}</li>
                        <li><b>{doc.artifact.dcup.sub4[0]}:</b> {doc.artifact.dcup.sub4[1]}</li>
                    </ul>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0">
                <Accordion.Item>
                <Accordion.Header>Crown</Accordion.Header>
                <Accordion.Body>
                    <p><b>Name: </b>{doc.artifact.ecrown.name} <b>Level:</b> {doc.artifact.ecrown.lv}</p>
                    <p><b>Main Stat ({doc.artifact.ecrown.main[0]}):</b> {doc.artifact.csands.main[1]}</p>
                    <ul>
                        <li><b>{doc.artifact.ecrown.sub1[0]}:</b> {doc.artifact.ecrown.sub1[1]}</li>
                        <li><b>{doc.artifact.ecrown.sub2[0]}:</b> {doc.artifact.ecrown.sub2[1]}</li>
                        <li><b>{doc.artifact.ecrown.sub3[0]}:</b> {doc.artifact.ecrown.sub3[1]}</li>
                        <li><b>{doc.artifact.ecrown.sub4[0]}:</b> {doc.artifact.ecrown.sub4[1]}</li>
                    </ul>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Artifact;