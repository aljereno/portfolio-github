import React from 'react';

const PlaceholderStatus = ({indicator, toShow}) => {

    return (
        <div className="miniVersion">
            {toShow && toShow}
        </div>
    )
}

export default PlaceholderStatus;