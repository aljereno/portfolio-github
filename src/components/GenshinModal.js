import React from 'react';

const GenshinModal = ({selectedImg, setSelectedImg}) => {


    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }
    return (
        <div className="backdrop" onClick={handleClick}
        >
            <img src={selectedImg} alt="enlarged"
                //offset for the vertical 
                //Starts it high up then comes down
                //bouncy effect
            />
        </div>
    )
}

export default GenshinModal;