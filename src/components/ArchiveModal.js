import React from 'react';

const ArchiveModal = ({modalImg, setModalImg}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setModalImg(null);
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={modalImg} alt="enlarged"/>
        </div>
    )
}

export default ArchiveModal;