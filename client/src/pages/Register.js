import React from "react";
import { Row, Col, Form, Button, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../Redux/Actions/userActions";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function Register() {
  const dispatch = useDispatch();

  function validateAndRegister(values) {
    if (values.password !== values.confirmPassword) {
      message.error("Passwords Not Matched");
    } else {
      dispatch(registerUser(values));
    }
  }

  return (
    <div className="register">
      <Row justify="center" className="flex align-items-center">
        <Col lg={5}>
          <h1 className="websiteNameHeading1" data-aos="slide-left">
            Job
          </h1>
        </Col>
        <Col lg={10} sm={24} className="boxShadow p-4 register-form">
          <h2>Register</h2>
          <hr />
          <Form layout="vertical" onFinish={validateAndRegister}>
            <Form.Item
              label="Username"
              name="userName"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>
            <Button htmlType="submit" className="mb-2">
              Register
            </Button>
            <br />
            <Link to="/login">Already have an account ? Log In Here</Link>
          </Form>
        </Col>
        <Col lg={5}>
          <h1 className="websiteNameHeading2" data-aos="slide-right">
            Hunt
          </h1>
        </Col>
      </Row>
    </div>
  );
}
