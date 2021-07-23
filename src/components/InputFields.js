import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import useFirestore from '../hooks/useFirestore';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const InputField = ({firestore, Current}) => {
    const { docs } = useFirestore(firestore);
    const [eTitle, setETitle] = useState(null);
    const [eUrl, setEUrl] = useState(null);
    const [eCaption, setECaption] = useState(null);
    const [ePlacement, setEPlacement] = useState(null);
    

    const findPlacement = () => {
        const tempNumber = [];
        docs.map((doc) => {
            tempNumber.push(doc.placement);
            return doc.placement;
        })
        setEPlacement(Math.max(...tempNumber) + 1);
    }

    const types = ['image/png', 'image/jpeg'];

    const onInputFile = (e) => {
        findPlacement();
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setEUrl(e.target.files[0])
        } else {
            setEUrl(null);
        }
        console.log(selected)
    }

    // const placeImage = () => {
    //     const imagesRef = projectStorage.ref().child(`${firestore}/${eUrl.name}`);

    //     // imagesRef.put(eUrl).on('state_changed', (snapshot) => {
    //     //     console.log(`Inserted ${eUrl.name}`);
    //     //     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     //     console.log(progress);  
    //     // }, async () => {
    //     //     console.log('awaiting things');
    //     //     const url = await imagesRef.getDownloadURL();
    //     //     const createdAt = timestamp();
    //     //     console.log(`${url}, ${createdAt}, ${eTitle}, ${eCaption}, ${ePlacement}`)
    //     //     collectionRef.add({url, createdAt, placement: ePlacement, title: eTitle, caption: eCaption})
    //     // });
    //     imagesRef.put(eUrl).on('state_changed', (snapshot) => {
    //         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         console.log(progress);  
    //     });
    // }

    const getUrl = async () => {
        const imagesRef = projectStorage.ref().child(`${firestore}/${eUrl.name}`);
        const metaData = {
            contentType: eUrl.type
        };

        return new Promise((resolve, reject) => {
            const task = imagesRef.put(eUrl, metaData);
            task.then(snapshot => snapshot.ref.getDownloadURL())
                .then(url => {
                    resolve(url);
                })
                .catch(err => {
                    console.error(err);
                    reject(err);
                })
        })
    }
    const furtherPlace = async () => {
        //const storageRef = projectStorage.ref();
        //const imagesRef = storageRef.child(`${firestore}/${eUrl.name}`);
        const collectionRef = projectFirestore.collection(`${firestore}`);
        const picUrl = await getUrl();
        const createdAt = timestamp();
        // imagesRef.getDownloadURL().then((url) => {
        //     collectionRef.add({url, createdAt, placement: ePlacement, title: eTitle, caption: eCaption})
        // })
        collectionRef.add({url: picUrl, createdAt, placement: ePlacement, title: eTitle, caption: eCaption})

    }

    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" onChange={e => {setETitle(e.target.value)}} />
                </Form.Group>

                <Form.Group controlId="formBasicUrl">
                    <Form.Label>URL</Form.Label>
                    <Form.Control type="file" placeholder="Choose Image File" onChange={onInputFile} />
                    <Form.Text className="text-muted">
                        Get this URL from your firebase storage url.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicCaption">
                    <Form.Label>Caption</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" onChange={e => {setECaption(e.target.value)}}/>
                    <Form.Text className="text-muted">
                        Write a caption, or don't; It doesn't really matter.
                    </Form.Text>
                </Form.Group>
                <Button variant="light" onClick={furtherPlace}>
                    Submit Entertainment
                </Button>
            </Form>
        </Container>
    )
}

export default InputField;