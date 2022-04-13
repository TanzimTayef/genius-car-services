import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef('');
  
  const passwordRef = useRef('');


  const navigateRegister = () => {
    navigate("/register")
}

    const formHandleSubmit = e => {
      e.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      console.log(email, password)
    }

  return (
    <div className="w-50 m-3 border p-3 mx-auto">
      <Form onSubmit={formHandleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>New To Car <Link to="/register" onClick={navigateRegister} className="text-danger text-decoration-none">Please Register</Link>
      </p>
    </div>
  );
};

export default Login;
