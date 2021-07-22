import React, { useState } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useCollection = ({file, title, caption, placement}) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const storageRef = projectStorage.ref(file.name);
    const imagesRef = storageRef.child('images');
    const collectionRef = projectFirestore.collection('images');
    // const collectionRef = projectFirestore.collection(fCollection);

    const placeImage = () => {
        imagesRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url, createdAt, title, caption, placement});
            setUrl(url);
        })
    }

    return () => {
        placeImage();
    }
}

export default useCollection;