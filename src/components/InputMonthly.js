import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import useFirestore from '../hooks/useFirestore';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { projectFirestore, timestamp } from '../firebase/config';

const InputMonthly = () => {
    const tempCollection = 'june-collection-stories';
    const { docs } = useFirestore(tempCollection);
    const [title, setTitle] = useState(null);
    const [placement, setPlacement] = useState(null);
    const [caption, setCaption] = useState(null);
    const findPlacement = () => {
        const tempNumber = [];
        docs.map((doc) => {
            tempNumber.push(doc.placement);
            return doc.placement;
        })
        console.log(Math.max(...tempNumber) + 1);
        setPlacement(Math.max(...tempNumber) + 1);
    }

    const onSubmit = () => {
        const collectionRef = projectFirestore.collection('june-collection-stories');
        const createdAt = timestamp();
        collectionRef.add({placement, createdAt, caption, title});
    }

    const changeMonth = (month) => {
        const val = month === "Current" ? 'june-collection-stories' : 'july-collection-stories';
        console.log(val);
    }
    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicTitle">
                     <Form.Label>Title</Form.Label>
                     <Form.Control type="text" placeholder="Enter Title" onChange={e => {setTitle(e.target.value)}} />
                 </Form.Group>
                 <Form.Group controlId="formBasicCaption">
                     <Form.Label>Caption</Form.Label>
                     <Form.Control as="textarea" rows={3} placeholder="Enter description" onChange={e => {setCaption(e.target.value)}}/>
                     <Form.Text className="text-muted">
                         Write a caption, or don't; It doesn't really matter.
                     </Form.Text>
                 </Form.Group>
                <Row className="g-2">
                    {/* <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Email address">
                        <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col> */}
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="Select Month">
                        <Form.Select aria-label="Floating label select example" onChange={e => console.log(e.target.value)}>
                            <option value="Current">Current</option>
                            <option value="Next">Next</option>
                        </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <Button>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default InputMonthly;