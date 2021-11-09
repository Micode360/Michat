import { useReducer, useState } from "react"
import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import  authReducer  from "./store/reducer/authReducer"
import { useHistory } from 'react-router-dom'
import { signInAction } from './store/action/authAction'


const SignUp = () => {
    const history = useHistory();
    const [state, dispatch] = useReducer(authReducer, {});
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const submitMachine = (e) => {
        e.preventDefault();
        const [email, password] = e.target.elements;

        if(email.value === ""){
            setEmailError("Fill up your email");
            return;
        }else if(password.value === ""){
            setPasswordError("Fill up your password");
            return;
        }else{
            dispatch(signInAction({type: 'SIGNUP_SUCCESS', state: { email: email.value, password: password.value}}))
            history.push('/')
        }

    }
    return (
        <>
            <div className="sign-mn-cont">


            <div className="sign-child-cont sn-1 p-2">
                    <div className="text-center">
                    <i className="fas fa-map-marker-alt"></i>
                        <p>
                            Reach out to dozens of people around the globe.
                        </p>
                    </div>
                </div>

                <div className="sign-child-cont sn-2 p-2">
                <Form
                    onSubmit={submitMachine}
                    className = 'auth-form'
                >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><h3>Sign Up</h3></Form.Label>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="sn-input" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted mt-2">
                            <p className="mb-0">{ emailError }</p>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="sn-input" type="password" placeholder="Password" />
                        <Form.Text className="text-muted mt-2">
                            <p className="mb-0">{ passwordError }</p>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    </Form.Group>

                    <Button className="sn-btn" variant="primary" type="submit">
                        Submit
                    </Button>

                    <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                    <Form.Text className="text-white">
                        Have have an account? <Link to="/SignIn">Sign In</Link>
                    </Form.Text>
                    </Form.Group>
                </Form>
                </div>
             
            </div>
        </>
    )
}


export default SignUp