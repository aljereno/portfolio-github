import React from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/globalstyles.css';
import useFirestore from '../hooks/useFirestore';
import { Document, Page } from 'react-pdf';

const ProjectInfo = ({setProjectInfo}) => {
    const { docs } = useFirestore('completed-stories');
    // console.log(docs[0].url);
    console.log(docs[0]);
    let urlHolder = [];
    let currUrl = null;
    const example = (d) => {
        urlHolder.push(d.url);
        console.log(d.url)
    }
    const updateUrl = () => {
        currUrl = urlHolder[0];
    }
    return (
        <div style={{backgroundColor: '#C4C4C4'}}>
            <div style={{backgroundColor: 'Coral'}}>
                <Container>
                    {/* <Document file={docs.url}/> */}
                    {docs.map(doc => (
                        example(doc)
                    ))}
                    {updateUrl()}
                    {currUrl && <Document file="https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/ProjectPDFs%2FGuave%20F19%20Final%20Report.pdf?alt=media&token=de82b4d3-8b39-4d39-85a9-445aac1248b5">
                        <Page/>    
                    </Document>}
                </Container>
            </div>
        </div>
    )
}

export default ProjectInfo;


{/* <Container>
                    <p style={{textAlign: "center"}}>Completed</p>
                    { docs && docs.map(doc => (
                        <Container key={doc.id}>
                            <Link to='/projectInfo'>
                            <p href={doc.url}>
                                {doc.title}
                                {doc.synopsis}
                            </p>
                            </Link>
                        {/* <img src={doc.url} alt="pdf"/> */}
                //         </Container>
                //     ))}
                // </Container> */}