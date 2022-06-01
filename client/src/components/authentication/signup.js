import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ThunkSignUp } from "../../store/reducers/authReducer";

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { message } = useSelector((state) => state.messageResponse);

  const submitMachine = (e) => {
    e.preventDefault();
    const [firstName, lastName, email, password, confirmPassword] =
      e.target.elements;

    let firstNameVal = document.querySelector("#f-error");
    let lastNameVal = document.querySelector("#l-error");
    let emailVal = document.querySelector("#e-error");
    let passwordVal = document.querySelector("#p-error");
    let confirmPasswordVal = document.querySelector("#cp-error");

    if (validate()) {
      dispatch(
        ThunkSignUp({
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value,
        })
      )
        .unwrap()
        .then((data) => {
          history.push("/");
          window.location.reload();
        })
        .catch((err) => {
          setShow(true);
        });
    }

    function validate() {
      if (firstName.value === "") {
        firstNameVal.style.display = "block";
      } else {
        firstNameVal.style.display = "none";
      }

      if (lastName.value === "") {
        lastNameVal.style.display = "block";
      } else {
        lastNameVal.style.display = "none";
      }

      if (email.value === "") {
        emailVal.style.display = "block";
      } else {
        emailVal.style.display = "none";
      }

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

      if (
        firstName.value !== "" &&
        lastName.value !== "" &&
        email.value !== "" &&
        password.value !== "" &&
        confirmPassword.value !== "" &&
        confirmPassword.value === password.value
      ) {
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
          <Form onSubmit={submitMachine} className="auth-form">
            <Form.Group className="mb-3" controlId="SignUp">
              <Form.Label>
                <h3>Sign Up</h3>
              </Form.Label>
            </Form.Group>

            {show ? (
              <Alert
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
              >
                <p className="form-alert-p">{message}</p>
              </Alert>
            ) : (
              ""
            )}

            <div className="colm">
              <Form.Group className="mb-3" controlId="firstname">
                <Form.Label>First Name</Form.Label>

                <Form.Control
                  className="sn-input"
                  type="text"
                  placeholder="Enter first name"
                />

                <Form.Text className="text-muted mt-2">
                  <small className="error mb-0" id="f-error">
                    Fill up your first Name{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </small>
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Last Name</Form.Label>

                <Form.Control
                  className="sn-input"
                  type="text"
                  placeholder="Enter last name"
                />

                <Form.Text className="text-muted mt-2">
                  <small className="error mb-0" id="l-error">
                    Fill up your Last Name{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </small>
                </Form.Text>
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="Email">
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

            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password</Form.Label>

              <Form.Control
                className="sn-input"
                type="password"
                placeholder="Password"
              />

              <Form.Text className="text-muted mt-2">
                <small className="error mb-0" id="p-error">
                  Fill up your password{" "}
                  <i className="fas fa-exclamation-circle"></i>
                </small>
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="conFirmPassword">
              <Form.Label>Confirm Password</Form.Label>

              <Form.Control
                className="sn-input"
                type="password"
                placeholder="Confirm password"
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

            <Form.Group className="mb-3 mt-3" controlId="link">
              <Form.Text className="text-white">
                Have have an account? <Link to="/SignIn">Sign In</Link>
              </Form.Text>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
