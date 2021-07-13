import React, {useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { auth } from '../firebase/config';

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
        setLoggedIn(true);
        auth.signInWithEmailAndPassword(email, pass).then(cred => {
            console.log(cred.user)
        }).catch(error => alert("Incorrect email and/or password"))
    }
    const onLoggedOff = () => {
        setLoggedIn(false)
        auth.signOut().then(() => {console.log("user signed out")})
    }
    return (
        <Container>
            {loggedIn ?
            <div>
                <h1> Already Logged In </h1>
                <Button variant="primary" type="submit" onClick={onLoggedOff}>
                    Log Out
                </Button> 
            </div>
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
            <Button variant="primary" type="submit" onClick={onSubmit}>
                Submit
            </Button>
            </Form>
            }
        </Container>
    )
}

export default Login;

