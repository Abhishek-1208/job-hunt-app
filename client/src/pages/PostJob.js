import { React, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch } from "react-redux";
import { postJob } from "../Redux/Actions/jobActions";
import { Row, Col, Tabs, Input, Form, Button, Select } from "antd";
const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;
function PostJob() {
  const [jobInfo, setJobInfo] = useState({});
  const [activeTab, setActiveTab] = useState("0");
  const dispatch = useDispatch();
  function onJobInformationFinish(values) {
    setJobInfo(values);
    setActiveTab("1");
    console.log(values);
  }
  function onPostJobClicked(values) {
    const newJob = { ...jobInfo, ...values };
    console.log(newJob);
    dispatch(postJob(newJob));
  }
  return (
    <div>
      <DefaultLayout>
        <Tabs defaultActiveKey="0" activeKey={activeTab}>
          <TabPane tab="Job Information" key="0">
            <Form layout="vertical" onFinish={onJobInformationFinish}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="title"
                    rules={[{ required: true }]}
                    label="Job Name: "
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="department"
                    rules={[{ required: true }]}
                    label="Department: "
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="experience"
                    rules={[{ required: true }]}
                    label="Experience: "
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="salaryFrom"
                    rules={[{ required: true }]}
                    label="Salary Range(Minimum): "
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="salaryTo"
                    rules={[{ required: true }]}
                    label="Salary Range(Maximum): "
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="skillsRequired"
                    rules={[{ required: true }]}
                    label="Skills Required: "
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="minimumQualification"
                    label="Minimum Qualification: "
                    rules={[{ required: true }]}
                  >
                    <Select
                      placeholder="Select"
                      autoFocus={true}
                      style={{ border: "1px solid" }}
                      bordered={false}
                    >
                      <Option value="HighSchool"> High School</Option>
                      <Option value="UnderGraduate"> Under Graduate</Option>
                      <Option value="PostGradudate"> Post Graduate</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col lg={16} sm={24}>
                  <Form.Item
                    name="smallDescription"
                    rules={[{ required: true }]}
                    label="Small Description About Job: "
                  >
                    <TextArea />
                  </Form.Item>
                </Col>
                <Col lg={16} sm={24}>
                  <Form.Item
                    name="fullDescription"
                    rules={[{ required: true }]}
                    label="Full Description About Job: "
                  >
                    <TextArea />
                  </Form.Item>
                </Col>
              </Row>
              <Button htmlType="submit">Next</Button>
            </Form>
          </TabPane>
          <TabPane tab="Company Information" key="1">
            <Form layout="vertical" onFinish={onPostJobClicked}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="company"
                    label="Company Name: "
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="email"
                    label="Company E-mail: "
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="phoneNumber"
                    label="Phone Number: "
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col lg={16} sm={24}>
                  <Form.Item
                    name="companyDescription"
                    label="Company Description: "
                    rules={[{ required: true }]}
                  >
                    <TextArea />
                  </Form.Item>
                </Col>
              </Row>
              <Button
                onClick={() => {
                  setActiveTab("0");
                }}
              >
                Previous
              </Button>
              <Button className="mx-2" htmlType="submit">
                Post Job
              </Button>
            </Form>
          </TabPane>
        </Tabs>
      </DefaultLayout>
    </div>
  );
}

export default PostJob;
