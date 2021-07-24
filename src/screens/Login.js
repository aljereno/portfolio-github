import React, {useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { auth } from '../firebase/config';
import { Link } from 'react-router-dom';

const Login = ({loggedIn, setLoggedIn}) => {
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }
    const onSubmit = () => {
        if(email !== null && pass !== null){
            auth.signInWithEmailAndPassword(email, pass).then(cred => {
                setLoggedIn(true);
            }).catch(error => {alert(error.message)})
        } else {
            alert("Missing Username or Password");
        }
    }

    return (
        <Container>
            {loggedIn ?
            <Container>
                <h1> Logged In Successfully </h1>
                <Link to="/entertainment">
                    <Button>Go to form page</Button>
                </Link> 
            </Container>
            :
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => {handleEmail(e)}}/>
                <Form.Text className="text-muted">
                    Not Lui? Send info to <b>fake@email.com</b>
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => {handlePass(e)}}/>
            </Form.Group>
            <Form.Group>
            <Button style={{marginTop: "1rem"}}variant="primary" onClick={onSubmit}>
                Submit
            </Button>
            </Form.Group>
            </Form>
            }
        </Container>
    )
}

export default Login;

