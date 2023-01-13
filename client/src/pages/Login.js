import React from "react";
import { Row, Col, Form, Button, Input } from "antd";
import { loginUser } from "../Redux/Actions/userActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function Login() {
  const dispatch = useDispatch();
  function validateAndRegister(values) {
    dispatch(loginUser(values));
  }
  return (
    <div className="login">
      <Row justify="center" className="flex align-items-center">
        <Col lg={5}>
          <h1 className="websiteNameHeading1" data-aos="slide-right">
            Job
          </h1>
        </Col>
        <Col lg={10} sm={24} className="boxShadow p-5 login-form">
          <h2>Login</h2>
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
            <Button htmlType="submit" className="mb-2">
              Login
            </Button>
            <br />
            <Link to="/register">Don't have an account? create one</Link>
          </Form>
        </Col>

        <Col lg={5}>
          <h1 className="websiteNameHeading2" data-aos="slide-left">
            Hunt
          </h1>
        </Col>
      </Row>
    </div>
  );
}
