import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    //add 'desc' if you want a descending order to the database
    //not adding that means that ascending is the default
    useEffect(() => {
        const unsub = projectFirestore.collection(collection).orderBy('createdAt').onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id}) 
            });
            setDocs(documents);
        })

        return () => unsub();
    }, [collection])
    return { docs };
}

export default useFirestore;