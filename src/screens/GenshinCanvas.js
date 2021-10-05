import React, {useEffect, useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import Artifact from '../minis/Artifact';
import UnitStats from '../minis/UnitStats';
import PlaceholderStatus from '../minis/PlaceholderStatus';
import { motion
 } from 'framer-motion';
const GenshinCanvas = ({characters}) => {

    const [char, setChar] = useState(null);
    const [infoIndicator, setInfoIndicator] = useState("attributes");
    const [toShow, setToShow] = useState(null);

    useEffect(() => {
        setChar(characters);
        setToShow(null);
    }, [characters])

    const toPassToTypes = (data) => {
        setInfoIndicator(data);
    }

    const infoRightSide = (data) => {
        setToShow(data);
    }

    return (
        <div>
            {char && 
                <Row 
                    style={{marginTop: "1rem", backgroundColor: `${char.bg}`, borderRadius: "25px", paddingBottom: "1rem"}} 
                    key={char.placement}>
                    <Col>
                        <motion.div 
                            initial={{opacity: 0, x:-100}}
                            animate={{opacity: 1, x: 0}}
                            className="firstDiv">
                            <div className="secondDiv">
                                <UnitStats doc={char} setDisplay={infoRightSide}/>
                                <Artifact doc={char} parentFunc={toPassToTypes} setDisplay={infoRightSide}/>  
                            </div>
                        </motion.div>
                    </Col>
                    <Col>
                        <img className="characterPortait" src={`${char.url}`} alt="character portait"/>
                    </Col>
                    <Col>
                        <PlaceholderStatus indicator={infoIndicator} toShow={toShow}/>
                    </Col>
                </Row>
            }
        </div>
    )
}

export default GenshinCanvas;