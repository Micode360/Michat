import { useReducer, useState } from "react"
import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import  authReducer  from "../../store/reducer/authReducer"
import { signInAction } from "../../store/action/authAction"
//import { useHistory } from 'react-router-dom'





const SignIn = () => {
   // const history = useHistory();
    const [state, dispatch] = useReducer(authReducer, []);

    const submitMachine = (e) => {
        e.preventDefault();
        const [email, password] = e.target.elements;
        let emailVal = document.querySelector("#e-error");
        let passwordVal = document.querySelector("#p-error");

        if(validate()){
            signInAction({type: 'SIGNIN_SUCCESS', state: { email: email.value, password: password.value}})
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
                        <Form.Label><h3>Sign In</h3></Form.Label>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="sn-input" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted mt-2">
                            <small className="error mb-0" id="e-error">Fill up your email <i className="fas fa-exclamation-circle"></i></small>
                        
                        </Form.Text>
                    </Form.Group>

                

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="sn-input" type="password" autoComplete="on" placeholder="Password" />
                        <Form.Text className="text-muted mt-2">
                            <small className="error mb-0" id="p-error">Fill up your password <i className="fas fa-exclamation-circle"></i></small>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Text className="text-muted">
                       <Link to="/Sign Up">Forgot password</Link>
                    </Form.Text>
                    </Form.Group>

                    <Button className="sn-btn" variant="primary" type="submit">
                        Submit
                    </Button>

                    <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                    <Form.Text className="text-white">
                        Don't have an account? <Link to="/SignUp">Sign Up</Link>
                    </Form.Text>
                    </Form.Group>
                </Form>
                </div>

             
            </div>
        </>
    )
}


export default SignIn