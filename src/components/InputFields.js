import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import useFirestore from '../hooks/useFirestore';

const InputField = ({firestore}) => {
    console.log(firestore);
    const { docs } = useFirestore(firestore);

    const findPlacement = () => {
        const tempNumber = [];
        docs.map((doc) => {
            tempNumber.push(doc.placement);
            return null;
        })
        return Math.max(...tempNumber) + 1;
    }
    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title"/>
                </Form.Group>

                <Form.Group controlId="formBasicUrl">
                    <Form.Label>URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title"/>
                    <Form.Text className="text-muted">
                        Get this URL from your firebase storage url.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicCaption">
                    <Form.Label>Caption</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title"/>
                    <Form.Text className="text-muted">
                        Write a caption, or don't; It doesn't really matter.
                    </Form.Text>
                </Form.Group>
                <Button variant="light" onClick={findPlacement}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default InputField;