import { useReducer } from "react"
import { Form, Button } from "react-bootstrap"
import  authReducer  from "./store/reducer/authReducer"




import { useHistory } from 'react-router-dom'


const SignIn = () => {
    const history = useHistory();
    const [state, dispatch] = useReducer(authReducer, []);

    const submitMachine = (e) => {
        e.preventDefault();
        const [email, password] = e.target.elements;

        dispatch({type: 'REGISTER_USER', state: [...state, { email: email.value, password: password.value}]})
        
        history.push('/')
    }
    return (
        <>
            <Form
                onSubmit={submitMachine}
                className = 'auth-form'
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}


export default SignIn