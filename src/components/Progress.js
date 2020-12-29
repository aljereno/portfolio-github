import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const Progress = ({file, setFile}) => {

    const { url, progress } = useStorage(file);
    console.log(progress, url);

    useEffect(() => {
        //If we ahve a valid value for Url
        if(url){
            setFile(null);
        }
    }, [url, setFile])
    return (
        <div className="progress-bar" style={{width: progress + '%'}}>
            Finished
        </div>
    )
}

export default Progress;