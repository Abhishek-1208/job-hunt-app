import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../Redux/Actions/userActions";
import DefaultLayout from "../components/DefaultLayout";
import { Row, Col, Tabs, Input, Form, Button } from "antd";
const { TabPane } = Tabs;
const { TextArea } = Input;
function Profile() {
  const [personalInfo, setPersonalInfo] = useState();
  const [activeTab, setActiveTab] = useState("1");
  const dispatch = useDispatch();
  function personalInfoSubmit(values) {
    setPersonalInfo(values);
    console.log(values);
    setActiveTab("2");
  }
  function updateInformation(values) {
    const finalObj = { ...personalInfo, ...values };
    console.log(finalObj);
    dispatch(updateUser(finalObj));
  }
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <DefaultLayout>
        <Tabs defaultActiveKey="1" activeKey={activeTab}>
          <TabPane tab="Personal Information" key="1">
            <Form
              layout="vertical"
              onFinish={personalInfoSubmit}
              initialValues={user}
            >
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    label="First Name: "
                    required
                    rules={[{ required: true }]}
                    name="firstName"
                  >
                    <Input></Input>
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item label="Last Name: " name="lastName">
                    <Input></Input>
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    label="Email: "
                    required
                    rules={[{ required: true }]}
                    name="email"
                  >
                    <Input></Input>
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    label="Mobile Number: "
                    required
                    rules={[{ required: true }]}
                    name="mobileNumber"
                  >
                    <Input></Input>
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item label="Portfolio: " name="portfolio">
                    <Input></Input>
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item label="Address: " name="address">
                    <Input></Input>
                  </Form.Item>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.Item label="About: " name="about">
                    <TextArea rows={3}></TextArea>
                  </Form.Item>
                </Col>
              </Row>
              <Button htmlType="submit">Next</Button>
            </Form>
          </TabPane>
          <TabPane tab="Skills And Education" key="2">
            <Form
              initialValues={user}
              layout="vertical"
              onFinish={updateInformation}
            >
              <Row>
                <Col lg={24} sm={24}>
                  <Form.List name="education">
                    {(education, { add, remove }) => (
                      <div>
                        {education.map((field, index) => (
                          <div className="flex">
                            <Form.Item
                              required
                              {...field}
                              label="Education: "
                              rules={[{ required: true }]}
                              style={{ width: "80%" }}
                            >
                              <TextArea rows="3"></TextArea>
                            </Form.Item>
                            <Button
                              className="mx-2"
                              onClick={() => {
                                add();
                              }}
                            >
                              Add
                            </Button>
                            {index !== 0 && (
                              <Button
                                onClick={() => {
                                  remove(index);
                                }}
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </Form.List>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.List name="skills">
                    {(skills, { add, remove }) => (
                      <div>
                        {skills.map((field, index) => (
                          <div className="flex">
                            <Form.Item
                              required
                              {...field}
                              label="Skills: "
                              rules={[{ required: true }]}
                              style={{ width: "80%" }}
                            >
                              <TextArea rows="3"></TextArea>
                            </Form.Item>
                            <Button
                              className="mx-2"
                              onClick={() => {
                                add();
                              }}
                            >
                              Add
                            </Button>
                            {index !== 0 && (
                              <Button
                                onClick={() => {
                                  remove(index);
                                }}
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </Form.List>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.List name="projects">
                    {(projects, { add, remove }) => (
                      <div>
                        {projects.map((field, index) => (
                          <div className="flex">
                            <Form.Item
                              required
                              {...field}
                              label="Projects: "
                              rules={[{ required: true }]}
                              style={{ width: "80%" }}
                            >
                              <TextArea rows="3"></TextArea>
                            </Form.Item>
                            <Button
                              className="mx-2"
                              onClick={() => {
                                add();
                              }}
                            >
                              Add
                            </Button>
                            {index !== 0 && (
                              <Button
                                onClick={() => {
                                  remove(index);
                                }}
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </Form.List>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.List name="experience">
                    {(experience, { add, remove }) => (
                      <div>
                        {experience.map((field, index) => (
                          <div className="flex">
                            <Form.Item
                              required
                              {...field}
                              label="Experience: "
                              rules={[{ required: true }]}
                              style={{ width: "80%" }}
                            >
                              <TextArea rows="3"></TextArea>
                            </Form.Item>
                            <Button
                              className="mx-2"
                              onClick={() => {
                                add();
                              }}
                            >
                              Add
                            </Button>
                            {index !== 0 && (
                              <Button
                                onClick={() => {
                                  remove(index);
                                }}
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </Form.List>
                </Col>
              </Row>

              <Button
                onClick={() => {
                  setActiveTab("1");
                }}
              >
                Previous
              </Button>
              <Button className="mx-2" htmlType="submit">
                Save
              </Button>
            </Form>
          </TabPane>
        </Tabs>
      </DefaultLayout>
    </div>
  );
}

export default Profile;
