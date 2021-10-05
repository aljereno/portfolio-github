import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Attribute = ({doc}) => {
    return (
        <motion.div 
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            className="firstDiv">
            <div className="secondDiv">
            <h4 
                style={{marginTop: "1rem"}} 
                id={doc.placement}>
                <Badge bg="secondary"> {doc.name} </Badge>
            </h4>
            <p><b>Level:</b> {doc.lv}</p>
            <p><b>HP:</b> {doc.stats.hp} <b>ATK:</b> {doc.stats.atk} <b>DEF:</b> {doc.stats.def} <b>EM:</b> {doc.stats.em}</p>
            <p><b>Crit Rate:</b> {doc.stats.crp}% <b>Crit DMG:</b> {doc.stats.cdp}%</p>
            <p><b>Energy Recharge:</b> {doc.stats.erp}%</p>
            <p><b>Elemental Status:</b> </p>
            <ul>
                <li><b>Pyro DMG:</b> {doc.elemental[0]}% </li>
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
            </div>
        </motion.div>
    )
}


const Weapon = ({doc}) => {
    return (
        <motion.div 
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            className="firstDiv">
            <div className="secondDiv">
            <p><b>Name:</b> {doc.weapon.name} <b>Level:</b> {doc.weapon.lv}</p>
            <p><b>Base ATK:</b> {doc.weapon.atk}</p>
            <p><b>Substat:</b> {doc.weapon.substat.name} {doc.weapon.substat.value}</p>
            <p><b>Refinement:</b> {doc.weapon.refine}</p>
            <p><b>Effect: </b> {doc.weapon.effect}</p>
            </div>
        </motion.div>
    )
}

const Talent = ({doc}) => {
    return (
        <motion.div 
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            className="firstDiv">
            <div className="secondDiv">
            <p><b>{doc.talents.first.name}</b> Level: {doc.talents.first.lv}</p>
            <p><b>{doc.talents.second.name}</b> Level: {doc.talents.second.lv}</p>
            <p><b>{doc.talents.third.name}</b> Level: {doc.talents.third.lv}</p>
            </div>
        </motion.div>
    )
}

const Constellation = ({doc}) => {
    return (
        <motion.div 
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            className="firstDiv">
            <div className="secondDiv">
            <p>Constellation: {doc.constellation}</p>
            </div>
        </motion.div>
    )
}
const UnitStats = ({doc, setDisplay}) => {

    const choose = (choice) => {
        switch(choice){
            case 'attribute':
                setDisplay(<Attribute doc={doc}/>);
                break;
            case 'weapon':
                setDisplay(<Weapon doc={doc}/>);
                break;
            case 'talent':
                setDisplay(<Talent doc={doc}/>);
                break;
            case 'constellation':
                setDisplay(<Constellation doc={doc}/>);
                break;
            default:
        }
        
    } 
    return (
        <div style={{marginTop: "1rem"}}>
            <div>
                <Button
                    onClick={() => choose('attribute')} 
                    variant="light" 
                    style={{width: "100%", marginBottom: "1rem", textAlign: "left", paddingLeft: '1rem'}}
                >
                    Attributes
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => choose('weapon')}
                    variant="light" 
                    style={{width: "100%", marginBottom: "1rem", textAlign: "left", paddingLeft: '1rem'}}
                    >
                        Weapon
                </Button>
            </div>
            <div>
                <Button 
                    onClick={() => choose('constellation')}
                    variant="light" 
                    style={{width: "100%", marginBottom: "1rem", textAlign: "left", paddingLeft: '1rem'}}
                    >
                    Constellation
                </Button>
            </div>
            <div>
                <Button 
                    onClick={() => choose('talent')}
                    variant="light" 
                    style={{width: "100%", marginBottom: "1rem", textAlign: "left", paddingLeft: '1rem'}}
                    >
                    Talents
                </Button>
            </div>
        </div>
    )
}

export default UnitStats;