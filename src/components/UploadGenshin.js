import React, { useState } from 'react';
import '../styles/globalstyles.css';
import Progress from '../components/Progress';

const UploadGenshin = () => {
    const [file, setFile] = useState(null);
    // const [error, setError] = useState(null);

    // const types = ['image/png', 'image/jpeg'];

    // const changeHandler = (e) => {
    //     let selected = e.target.files[0];
    //     if(selected && types.includes(selected.type)){
    //         setFile(selected);
    //         setError('');
    //     } else {
    //         setFile(null);
    //         setError('Please select a viable image');
    //     }
    //     console.log(selected);
    // }

    return (
        <div>
            {/* <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label> */}
            <p>Showcasing the stats, weapons and units that help me beat Floor 12.</p>
            <div className="output">
                {/* { error && <div className="error">{ error } </div>} */}
                { file && <div> {file.name} </div>}
                { file && <Progress file={file} setFile={setFile}/>}
            </div>
        </div>
    )
}

export default UploadGenshin;