import React from 'react';
import Container from 'react-bootstrap/Container';
import UploadGenshin from '../components/UploadGenshin';
import '../styles/globalstyles.css';

const GenshinScreen = () => {

    return (
        <div>
            <Container>
                <p>Place to put your text</p>
            </Container>
            <UploadGenshin/>
        </div>
    )
}

export default GenshinScreen;