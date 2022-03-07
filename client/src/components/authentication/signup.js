import { useReducer, useState } from "react"
import { Link } from "react-router-dom"
import { Form, Button, Row } from "react-bootstrap"
import  authReducer  from "../../store/reducer/authReducer"
import { useHistory } from 'react-router-dom'
import { signUpAction } from '../../store/action/authAction'


const SignUp = () => {
    const history = useHistory();
    const [state, dispatch] = useReducer(authReducer, {});


    const submitMachine = (e) => {
        e.preventDefault();
        const [email, password] = e.target.elements;

        let emailVal = document.querySelector("#e-error");
        let passwordVal = document.querySelector("#p-error");

        if(validate()){
            signUpAction({ email: email.value, password: password.value})
            //history.push('/');
        }


           function validate() {
                if(email.value === ""){
                    emailVal.style.display = 'block';
                }else {
                    emailVal.style.display = 'none';
                }
                
                if(password.value === ""){
                    passwordVal.style.display = 'block';
                }else{
                    passwordVal.style.display = 'none';
                }

                if(email.value !== "" && password.value !== ""){
                    return true;
                }else {
                    return false;
                }
           }
            
            


    }

    return (
        <>
            <div className="sign-mn-cont">

                <div className="sign-child-cont sn-2 p-2">
                <Form
                    onSubmit={submitMachine}
                    className = 'auth-form'
                >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><h3>Sign Up</h3></Form.Label>
                    </Form.Group>

                    <Row className="row">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>

                            <Form.Control 
                            className="sn-input" 
                            type="text" 
                            placeholder="Enter first name" 
                            />

                            <Form.Text className="text-muted mt-2">
                            <small className="error mb-0" id="e-error">Fill up your First Name <i className="fas fa-exclamation-circle"></i></small>
                            </Form.Text>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>

                            <Form.Control 
                            className="sn-input" 
                            type="text" 
                            placeholder="Enter last name" 
                            />

                            <Form.Text className="text-muted mt-2">
                            <small className="error mb-0" id="e-error">Fill up your Last Name <i className="fas fa-exclamation-circle"></i></small>
                            </Form.Text>
                        </Form.Group>
                    </Row>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>

                        <Form.Control 
                           className="sn-input" 
                           type="email" 
                           placeholder="Enter email" 
                        />

                        <Form.Text className="text-muted mt-2">
                        <small className="error mb-0" id="e-error">Fill up your email <i className="fas fa-exclamation-circle"></i></small>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>

                        <Form.Control 
                        className="sn-input" 
                        type="password" 
                        placeholder="Password" 
                        />

                        <Form.Text className="text-muted mt-2">
                        <small className="error mb-0" id="p-error">Fill up your password <i className="fas fa-exclamation-circle"></i></small>
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