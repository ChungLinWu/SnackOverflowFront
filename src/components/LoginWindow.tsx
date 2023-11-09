import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faFacebook,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import requestManager from "../apiUtils/RequestUtil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface showProps {
  isShowLoginWindow: boolean;
}

const LoginWindow = (props: showProps) => {
  const [show, setShow] = useState(false);

  const loginHandler = () => {
    const data = requestManager
      .get("http://shibe.online/api/shibes?count=1")
      .then((response) => {
        console.log(response);
        toast("🙌 Welcome xxx !");
      });
    setShow(false);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(props.isShowLoginWindow);
  };
  return (
    <div>
      <ToastContainer />
      <Button variant="outline-dark" size="sm" onClick={handleShow}>
        login
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <h4 className="text-center">Sign In</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={loginHandler}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
        <Row className="justify-content-md-center">
          <Col xs lg="1">
            <FontAwesomeIcon icon={faFacebook} style={{ cursor: "pointer" }} />
          </Col>
          <Col xs lg="1">
            <FontAwesomeIcon icon={faGoogle} style={{ cursor: "pointer" }} />
          </Col>
          <Col xs lg="1">
            <FontAwesomeIcon icon={faLinkedin} style={{ cursor: "pointer" }} />
          </Col>
          <Col xs lg="1">
            <FontAwesomeIcon icon={faApple} style={{ cursor: "pointer" }} />
          </Col>
        </Row>
        <div className="text-center">
          Don't have an account yet?
          <span className="text-primary">Create Account</span>
        </div>
        <div className="text-center text-primary">Forgot your password?</div>
      </Modal>
    </div>
  );
};

export default LoginWindow;
