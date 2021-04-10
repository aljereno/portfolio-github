import React, { createRef } from 'react';
import useFirestore from '../hooks/useFirestore';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { docs } = useFirestore(props.imageName);

    let wrapper = createRef();

    return (
        <div ref={wrapper}>
            { docs && docs.map(doc => (
                <div key={doc.placement} style={{backgroundColor: "coral", display: 'flex'}}>
                    <div className="cardAttributes" style={{display: 'flex'}}>
                        {doc.url && <div style={{height: '100%', width: '100%'}} >
                            <img style={{maxHeight: '100%', maxWidth: '100%', borderRadius: '25px'}} src={(doc.url)} alt={doc.title}/>
                        </div>  }
                        <div style={{textAlign: "center", width: "100%", paddingTop: '10px'}}>
                            <Link to={doc.link}>
                                <p>{doc.title}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>  
    )
}

export default Card;
