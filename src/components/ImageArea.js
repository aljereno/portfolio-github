import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { Row, Col, Accordion, Badge } from 'react-bootstrap';
const ImageArea = ({ setSelectedImg }) => {

    //const { docs } = useFirestore('genshin-abyss-second');
    //const { docs } = useFirestore('images');
    const { docs } = useFirestore('genshin-character-progression');
    //console.log(docs2);
    // console.log(docs);
    return (
        <div style={{marginTop: "1rem"}}>
            {/* <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                > 
                    {doc.url && <img src={doc.url} alt="uploaded pic"/>}
                </div>
            ))}
            </div> */}
            <div>
                {docs && docs.map((doc, index) => (
                    
                    <div key = {index}>
                        {index % 2 === 0 ? 
                        <Row key={doc.placement}>
                            <Col md="auto" >{doc.url && <img style={{width: "auto", height: "85%", borderRadius: "25px"}}src={doc.url} alt="uploaded pic"/>}</Col>
                            <Col>
                                <Row>
                                    <h4><Badge bg="secondary">{doc.name}</Badge></h4>
                                <Col>
                                    <h4>Level: {doc.lv}</h4>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item>
                                            <Accordion.Header>Status</Accordion.Header>
                                            <Accordion.Body>
                                                <p><b>HP:</b> {doc.stats.hp} <b>ATK:</b> {doc.stats.atk} <b>DEF:</b> {doc.stats.def} <b>EM:</b> {doc.stats.em}</p>
                                                <p><b>Crit Rate:</b> {doc.stats.crp}% <b>Crit DMG:</b> {doc.stats.cdp}%</p>
                                                <p><b>Energy Recharge:</b> {doc.stats.erp}%</p>
                                                <p><b>Elemental Status:</b> </p>
                                                <ul>
                                                    <li><b>Pyro DMG:</b> {doc.elemental[0]}%</li>
                                                    <li><b>Pyro RES:</b> {doc.elemental[1]}%</li>
                                                    <li><b>Hydro DMG:</b> {doc.elemental[2]}%</li>
                                                    <li><b>Hydro RES:</b> {doc.elemental[3]}%</li>
                                                    <li><b>Dendro DMG:</b> {doc.elemental[4]}%</li>
                                                    <li><b>Dendro RES:</b> {doc.elemental[5]}%</li>
                                                    <li><b>Electro DMG:</b> {doc.elemental[6]}%</li>
                                                    <li><b>Electro RES:</b> {doc.elemental[7]}%</li>
                                                    <li><b>Anemo DMG:</b> {doc.elemental[8]}%</li>
                                                    <li><b>Anemo RES:</b> {doc.elemental[9]}%</li>
                                                    <li><b>Cryo DMG:</b> {doc.elemental[10]}%</li>
                                                    <li><b>Cryo RES:</b> {doc.elemental[11]}%</li>
                                                    <li><b>Geo DMG:</b> {doc.elemental[12]}%</li>
                                                    <li><b>Geo RES:</b> {doc.elemental[13]}%</li>
                                                    <li><b>Physical DMG:</b> {doc.elemental[14]}%</li>
                                                    <li><b>Physical RES:</b> {doc.elemental[15]}%</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item>
                                            <Accordion.Header>Weapon</Accordion.Header>
                                            <Accordion.Body>
                                                <p><b>Name:</b> {doc.weapon.name} <b>Level:</b> {doc.weapon.lv}</p>
                                                <p><b>Base ATK:</b> {doc.weapon.atk}</p>
                                                <p><b>Substat:</b> {doc.weapon.substat.name} {doc.weapon.substat.value}</p>
                                                <p><b>Refinement:</b> {doc.weapon.refine}</p>
                                                <p><b>Effect: </b> {doc.weapon.effect}</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item>
                                            <Accordion.Header>Talents</Accordion.Header>
                                            <Accordion.Body>
                                                <p><b>{doc.talents.first.name}</b> Level: {doc.talents.first.lv}</p>
                                                <p><b>{doc.talents.second.name}</b> Level: {doc.talents.second.lv}</p>
                                                <p><b>{doc.talents.third.name}</b> Level: {doc.talents.third.lv}</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>
                                <Col>
                                <h4>Constellation: {doc.constellation}</h4>
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
                                </Col>
                                </Row>
                            </Col>
                        </Row> 
                        : 
                        <Row key={doc.placement}>
                            <Col>
                                <Row>
                                    <h4><Badge bg="secondary">{doc.name}</Badge></h4>
                                <Col>
                                    <h4>Level: {doc.lv}</h4>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item>
                                            <Accordion.Header>Status</Accordion.Header>
                                            <Accordion.Body>
                                                <p><b>HP:</b> {doc.stats.hp} <b>ATK:</b> {doc.stats.atk} <b>DEF:</b> {doc.stats.def} <b>EM:</b> {doc.stats.em}</p>
                                                <p><b>Crit Rate:</b> {doc.stats.crp}% <b>Crit DMG:</b> {doc.stats.cdp}%</p>
                                                <p><b>Energy Recharge:</b> {doc.stats.erp}%</p>
                                                <p><b>Elemental Status:</b> </p>
                                                <ul>
                                                    <li><b>Pyro DMG:</b> {doc.elemental[0]}%</li>
                                                    <li><b>Pyro RES:</b> {doc.elemental[1]}%</li>
                                                    <li><b>Hydro DMG:</b> {doc.elemental[2]}%</li>
                                                    <li><b>Hydro RES:</b> {doc.elemental[3]}%</li>
                                                    <li><b>Dendro DMG:</b> {doc.elemental[4]}%</li>
                                                    <li><b>Dendro RES:</b> {doc.elemental[5]}%</li>
                                                    <li><b>Electro DMG:</b> {doc.elemental[6]}%</li>
                                                    <li><b>Electro RES:</b> {doc.elemental[7]}%</li>
                                                    <li><b>Anemo DMG:</b> {doc.elemental[8]}%</li>
                                                    <li><b>Anemo RES:</b> {doc.elemental[9]}%</li>
                                                    <li><b>Cryo DMG:</b> {doc.elemental[10]}%</li>
                                                    <li><b>Cryo RES:</b> {doc.elemental[11]}%</li>
                                                    <li><b>Geo DMG:</b> {doc.elemental[12]}%</li>
                                                    <li><b>Geo RES:</b> {doc.elemental[13]}%</li>
                                                    <li><b>Physical DMG:</b> {doc.elemental[14]}%</li>
                                                    <li><b>Physical RES:</b> {doc.elemental[15]}%</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item>
                                            <Accordion.Header>Weapon</Accordion.Header>
                                            <Accordion.Body>
                                                <p><b>Name:</b> {doc.weapon.name} <b>Level:</b> {doc.weapon.lv}</p>
                                                <p><b>Base ATK:</b> {doc.weapon.atk}</p>
                                                <p><b>Substat:</b> {doc.weapon.substat.name} {doc.weapon.substat.value}</p>
                                                <p><b>Refinement:</b> {doc.weapon.refine}</p>
                                                <p><b>Effect: </b> {doc.weapon.effect}</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item>
                                            <Accordion.Header>Talents</Accordion.Header>
                                            <Accordion.Body>
                                                <p><b>{doc.talents.first.name}</b> Level: {doc.talents.first.lv}</p>
                                                <p><b>{doc.talents.second.name}</b> Level: {doc.talents.second.lv}</p>
                                                <p><b>{doc.talents.third.name}</b> Level: {doc.talents.third.lv}</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>
                                <Col>
                                <h4>Constellation: {doc.constellation}</h4>
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
                                </Col>
                                </Row>
                            </Col>
                            <Col md="auto">{doc.url && <img style={{width: "auto", height: "auto  ", borderRadius: "25px"}}src={doc.url} alt="uploaded pic"/>} {console.log(doc.name)}</Col>
                        </Row>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageArea;