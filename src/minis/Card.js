import React from 'react';
import useFirestore from '../hooks/useFirestore';

const Card = () => {
    const { docs } = useFirestore('carousel-images');
    
    return (
        <div>
            { docs && docs.map(doc => (
                <div style={{backgroundColor: "coral", display: 'flex'}}>
                    <div className="cardAttributes" style={{display: 'flex'}}>
                        <div style={{height: '100%', width: '100%'}} >
                            <img style={{objectFit:'cover'}} src={(doc.url)}/>
                        </div>
                        <div style={{textAlign: "center", width: "100%"}}>
                            <p>Explanatory text</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;
