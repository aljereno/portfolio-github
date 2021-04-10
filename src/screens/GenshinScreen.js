import React, {useState} from 'react';
import ImageArea from '../components/ImageArea';
import UploadGenshin from '../components/UploadGenshin';
import GenshinModal from '../components/GenshinModal';
import '../styles/globalstyles.css';

const GenshinScreen = () => {

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div>
            <UploadGenshin/>
            <ImageArea setSelectedImg={setSelectedImg}/>
            { selectedImg && <GenshinModal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
        </div>
    )
}

export default GenshinScreen;