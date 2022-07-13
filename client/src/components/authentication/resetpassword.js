import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ThunkResetPassword } from "../../store/reducers/authReducer";


const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [paramsToken, setParamsToken] = useState("");
  const { message } = useSelector((state) => state.messageResponse);

  
  useEffect(()=> {
    const url = window.location.pathname;
    const params = url.split('/')[2];
      setParamsToken(params)
  }, [setParamsToken])



  if(message.success === true) {
    setTimeout(() => {
        history.push('/signin')
        window.location.reload();
    }, 3000);
}


  const submitMachine = (e) => {
    e.preventDefault();
    const [password, confirmPassword] = e.target.elements;
    let passwordVal = document.querySelector("#p-error");
    let confirmPasswordVal = document.querySelector("#cp-error");
    

    if (validate()) {
      dispatch(
        ThunkResetPassword({
          token: paramsToken,
          password: password.value
        })
      )
    }

    function validate() {
      if (password.value === "") {
        passwordVal.style.display = "block";
      } else {
        passwordVal.style.display = "none";
      }


      if (
        confirmPassword.value === "" ||
        confirmPassword.value !== password.value
      ) {
        confirmPasswordVal.style.display = "block";
      } else {
        confirmPasswordVal.style.display = "none";
      }


      if (password.value !== "" && confirmPassword.value === password.value) {
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
              <div className="message_frame">
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                  <h1>{!message.response?'':message.response}</h1>
              </div>
            :
            (
              <Form onSubmit={submitMachine} className="auth-form">
              <Form.Group className="mb-3" controlId="passwordtitle">
                <Form.Label>
                  <h3>New Password</h3>
                </Form.Label>
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  className="sn-input"
                  type="password"
                  autoComplete="on"
                  placeholder="Password"
                />
                <Form.Text className="text-muted mt-2">
                  <small className="error mb-0" id="p-error">
                    Fill up your password{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </small>
                </Form.Text>
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  className="sn-input"
                  type="password"
                  autoComplete="on"
                  placeholder="Password"
                />
                <Form.Text className="text-muted mt-2">
                  <small className="error mb-0" id="cp-error">
                    Confirm your password{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </small>
                </Form.Text>
              </Form.Group>
  
              <Button className="sn-btn" variant="primary" type="submit">
                Submit
              </Button>


              <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
              <Form.Text className="text-white">
                Remembered your password? <Link to="/Signin">Sign In</Link>
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

export default ResetPassword;
