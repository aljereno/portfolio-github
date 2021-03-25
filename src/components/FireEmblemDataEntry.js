import React from 'react';
import useFireDataentry from '../hooks/useFireDataentry';

const FireEmblemDataEntry = () => {
    //const { docs } = useFirestore('carousel-images');
    
    return (
        <div>
            <form>
                <h1>Fire Emblem Blazing Sword</h1>
                <h2>Register Your Unit</h2>
                <h3> Base Stats </h3>
                <label> HP: </label>
                <input/>
                <h3> Growth Rates </h3>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FireEmblemDataEntry;
