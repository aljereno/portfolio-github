import React from "react";
import useFirestore from "../hooks/useFirestore";

const MiniGallery = ({document}) => {
    
    const {docs} = useFirestore(`${document}`)
    return (
        <div>
            {docs && docs.map((doc, index) => (
                <div key={index}>
                    <img  style={{width: '50%', height: '50%', margin: "auto", display: "block"}} src={`${doc.url}`} alt="gallery"/>
                    <h4 style={{paddingTop: "0.5rem", textAlign: "center", fontWeight: "bold"}}>{doc.title}</h4>
                    <p style={{textAlign: "center"}}>{doc.caption && doc.caption}</p>
                </div>
            ))}
        </div>
    )
}

export default MiniGallery;