import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"



const NewPassword = () => {


    const submitMachine = () => {};

    return(
<>
            <div className="sign-mn-cont">

                <div className="sign-child-cont sn-2 p-2">
                <Form
                    onSubmit={submitMachine}
                    className = 'auth-form'
                >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><h3>New Password</h3></Form.Label>
                    </Form.Group>
            


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control className="sn-input" type="password" autoComplete="on" placeholder="Password" />
                        <Form.Text className="text-muted mt-2">
                            <small className="error mb-0" id="p-error">Fill up your password <i className="fas fa-exclamation-circle"></i></small>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control className="sn-input" type="password" autoComplete="on" placeholder="Password" />
                        <Form.Text className="text-muted mt-2">
                            <small className="error mb-0" id="p-error">Fill up your password <i className="fas fa-exclamation-circle"></i></small>
                        </Form.Text>
                    </Form.Group>

                    <Button className="sn-btn" variant="primary" type="submit">
                        Submit
                    </Button>
                    
                </Form>
                </div>

             
            </div>
        </>
    );

}


export default NewPassword;