import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { ThunkForgotPassword } from "../../store/reducers/authReducer";



const ForgotPassword = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const { message } = useSelector((state) => state.messageResponse);

  const submitMachine = (e) => {
    e.preventDefault();
    const [email] = e.target.elements;
    let emailVal = document.querySelector("#e-error");

    if (validate()) {
      dispatch(
        ThunkForgotPassword({
          email: email.value,
        })
      )
    }


    function validate() {
      if (email.value === "") {
        emailVal.style.display = "block";
      } else {
        emailVal.style.display = "none";
      }

      if (email.value !== "") {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <>
      <div className="sign-mn-cont">
        <div className="sign-child-cont sn-2 p-2">
         {
          message.success === true?
          (
            <div className="message_frame">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <h1>{!message.response?'':message.response}</h1>
              <p>Please check your mail for the link to reset your password.</p>
            </div>
          )
          :
          (
            <Form onSubmit={submitMachine} className="auth-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <h3>Forgot Password</h3>
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="sn-input"
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted mt-2">
                <small className="error mb-0" id="e-error">
                  Fill up your email{" "}
                  <i className="fas fa-exclamation-circle"></i>
                </small>
              </Form.Text>
            </Form.Group>

            <Button className="sn-btn" variant="primary" type="submit">
              Submit
            </Button>

            <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
              <Form.Text className="text-white">
                Do you remember your password? got to{" "}
                <Link to="/Signin">Sign In</Link>
              </Form.Text>
            </Form.Group>
          </Form>
          )
         }
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
