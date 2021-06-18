import React , {createRef} from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/globalstyles.css';
import useFirestore from '../hooks/useFirestore';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
const Completed = () => {
    const { docs } = useFirestore('completed-stories');
    let wrapper = createRef();

    return (
        <Container style={{backgroundColor: '#C2B280', borderRadius: "25px", color: "black", paddingBottom: "25px"}}>
            <div ref={wrapper}>
            { docs && docs.map(doc => (
                <div key={doc.placement} style={{ marginTop:"2rem", display: 'flex'}}>
                    <div className="cardAttributes" style={{display: 'flex'}}>
                        <div style={{textAlign: "left", width: "100%", marginTop: "1rem"}}>
                            <div style={{display: "flex", marginBottom: "10px"}}>
                                <Link to={doc.link} style={{textDecoration: "none", paddingLeft: "20px"}}>
                                    <Button variant="info"><h5 style={{width:"100%"}}>{doc.title}</h5></Button>
                                </Link>
                                <div style={{ display: "flex", flexWrap: "wrap"}}>
                                    {doc.badges && doc.badges.map(attr => (
                                        <h6 ><Badge style={{marginLeft: "20px", marginTop: "10px"}} variant="secondary">{attr}</Badge></h6>
                                    ))}
                                </div>
                            </div>
                            <div style={{display: "flex"}}>
                                {doc.url && <div style={{height: '100%', width: '100%', marginLeft: "1rem"}}>
                                    <img style={{maxHeight: '100%', maxWidth: '100%', borderRadius: '15px'}} src={(doc.url)} alt={doc.title}/>
                                </div> }
                                <p style={{marginLeft: "20px", marginRight:"20px"}}>{doc.caption}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </Container>
    )
}


export default Completed;
