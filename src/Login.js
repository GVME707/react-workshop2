import { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRemember = (event) => {
    setRemember(event.target.checked);
  };  

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
        doLogin();
    }

    setValidated(true);
  };

  const doLogin = async () => {
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    const data = await response.json();
    console.log(data);

    if(data.result){
        alert("hehe correct")
    }else{
        alert("hehe wrong")
    }
  };

  return (
    <>
      <Container fluid className="flex-direction: column">
        <Row>
          <Col sm>
            <div className="Login-label">
              <h1>Login Page</h1>
              <p>
                Welcome to our website! Please sign in to access your account.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  please enter username
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  We'll never share your information with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {""}
                  please enter password
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  checked={remember}
                  onChange={handleRemember}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="login-button"
              >
                Login
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col sm>
            <div
              id="block-container"
              className="d-flex justify-content-center flex-row bd-highlight mb-3"
            >
              <div id="bloc1" class="p-2 bd-highlight">
                Don't have an account ?
              </div>
              <div id="bloc2" class="p-2 bd-highlight">
                <a href="register.html">Register</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <p className="d-flex justify-content-center flex-row">Username is {username}</p>
      <p className="d-flex justify-content-center flex-row">Password is {password}</p>
    </>
  );
}

export default Login;
