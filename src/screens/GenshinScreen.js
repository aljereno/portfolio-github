import React, {useState} from 'react';
import ImageArea from '../components/ImageArea';
// import UploadGenshin from '../components/UploadGenshin';
import GenshinModal from '../components/GenshinModal';
import { Container } from 'react-bootstrap';
import '../styles/globalstyles.css';

const GenshinScreen = () => {

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <Container>
            {/* <UploadGenshin/> */}
            <ImageArea setSelectedImg={setSelectedImg}/>
            { selectedImg && <GenshinModal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
        </Container>
    )
}

export default GenshinScreen;