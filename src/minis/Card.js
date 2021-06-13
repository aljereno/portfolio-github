import React, { createRef } from 'react';
import useFirestore from '../hooks/useFirestore';
import { Link } from 'react-router-dom';
import '../styles/globalstyles.css';


const Card = (props) => {
    const { docs } = useFirestore(props.imageName);

    let wrapper = createRef();

    return (
        <div ref={wrapper} >
            { docs && docs.map(doc => (
                <div key={doc.placement} style={{ marginTop:"2rem", display: 'flex'}}>
                    <div className="cardAttributes" style={{display: 'flex'}}>
                        {doc.url && <div style={{height: '100%', width: '100%'}} >
                            <img style={{maxHeight: '100%', maxWidth: '100%', borderRadius: '25px'}} src={(doc.url)} alt={doc.title}/>
                        </div>  }
                        <div style={{textAlign: "left", width: "100%", marginTop: "1rem", color: "white"}}>
                            <Link to={doc.link} style={{textDecoration: "none"}}>
                                <p style={{marginLeft: "20px"}}>{doc.title}</p>
                            </Link>
                            <p style={{marginLeft: "20px"}}>{doc.caption}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>  
    )
}

export default Card;
