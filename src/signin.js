import { useReducer } from "react"
import { Form, Button } from "react-bootstrap"



const authReducer = (state, action) => {

    switch(action.type){
        case 'REGISTER_USER': 
        console.log(state, 'reducer');
        return [...action.state];
        default:
            return state;
    }
}



const SignIn = () => {
    const [state, dispatch] = useReducer(authReducer, []);

    const submitMachine = (e) => {
        e.preventDefault();
        const [email, password] = e.target.elements;

        dispatch({type: 'REGISTER_USER', state: [...state, { email: email.value, password: password.value}]})

    }
    return (
        <>
            <Form
                onSubmit={submitMachine}
                style={{
                    width:'30%',
                    border:'1px solid #3333',
                    borderRadius: '6px',
                    padding: '20px 15px'
                }}
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