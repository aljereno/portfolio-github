import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageArea = ({ setSelectedImg }) => {

    //const { docs } = useFirestore('genshin-abyss-second');
    const { docs } = useFirestore('images');
    // console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                > 
                    {doc.url && <img src={doc.url} alt="uploaded pic"/>}
                </div>
            ))}
        </div>
    )
}

export default ImageArea;