import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LoginForm({ setCurrentUser }) {
  function handleLoginSubmit(e) {
    e.preventDefault();
    console.log(e);

    const user_object = {
      username: e.target[0].value,
      password: e.target[1].value,
    };

    fetch('http://localhost:3000/login', {
      //hits the "login" endpoint aka "session#create"
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user_object),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  }

  return (
    <>
      <Container>
        <Row>
          <Col>LOGIN FORM</Col>
          <Col xs={6}>
            <Form onSubmit={(e) => handleLoginSubmit(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Log in
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginForm;
