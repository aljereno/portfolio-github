import React , {createRef} from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/globalstyles.css';
import useFirestore from '../hooks/useFirestore';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

// const Completed = () => {
//     return (
//         <Container style={{backgroundColor: '#2e4a1e', borderRadius: "25px"}}>
//             <Card imageName="completed-stories"/>
//         </Container>
//     )
// }

const Completed = () => {
    const { docs } = useFirestore('completed-stories');
    let wrapper = createRef();

    return (
        <Container style={{backgroundColor: '#2e4a1e', borderRadius: "25px"}}>
            <div ref={wrapper}>
            { docs && docs.map(doc => (
                <div key={doc.placement} style={{ marginTop:"2rem", display: 'flex'}}>
                    <div className="cardAttributes" style={{display: 'flex'}}>
                        {doc.url && <div style={{height: '100%', width: '100%'}} >
                            <img style={{maxHeight: '100%', maxWidth: '100%', borderRadius: '25px'}} src={(doc.url)} alt={doc.title}/>
                        </div>  }
                        <div style={{textAlign: "left", width: "100%", marginTop: "1rem", color: "white"}}>
                            
                            <div style={{display: "flex"}}>
                            <Link to={doc.link} style={{textDecoration: "none"}}>
                                <p style={{marginLeft: "20px"}}>{doc.title}</p>
                            </Link>
                            {doc.badges && doc.badges.map(attr => (
                                <p><Badge style={{marginLeft: "20px"}} variant="secondary">{attr}</Badge></p>
                            ))}
                            </div>
                            <p style={{marginLeft: "20px"}}>{doc.caption}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </Container>
    )
}


export default Completed;
