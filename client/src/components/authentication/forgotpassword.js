import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"



const ForgotPassword = () => {

    const submitMachine = () => {};

    return (
        <>
        <div className="sign-mn-cont">

            <div className="sign-child-cont sn-2 p-2">
            <Form
                onSubmit={submitMachine}
                className = 'auth-form'
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><h3>Forgot Password</h3></Form.Label>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="sn-input" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted mt-2">
                        <small className="error mb-0" id="e-error">Fill up your email <i className="fas fa-exclamation-circle"></i></small>
                    
                    </Form.Text>
                </Form.Group>

            


                <Button className="sn-btn" variant="primary" type="submit">
                    Submit
                </Button>

                <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                <Form.Text className="text-white">
                    Do you remember now return back to? <Link to="/Signin">Sign In</Link>
                </Form.Text>
                </Form.Group>
            </Form>
            </div>

         
        </div>
    </>
    )


}



export default ForgotPassword