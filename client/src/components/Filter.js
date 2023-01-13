import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Modal, Select, Form, Button, Tooltip } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { filterJobs, searchJobs } from "../Redux/Actions/jobActions";
const { Search } = Input;
const { Option } = Select;
function Filter() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function findFilteredJobs(values) {
    dispatch(filterJobs(values));
    setIsModalVisible(false);
  }

  return (
    <div className="flex">
      <Tooltip placement="bottom" title="Filter">
        <FilterOutlined className="mr-2" onClick={showModal} />
      </Tooltip>
      <Modal
        title="Filter Jobs"
        visible={isModalVisible}
        footer={false}
        onCancel={handleCancel}
      >
        <Form layout="vertical" onFinish={findFilteredJobs}>
          <Form.Item name="experience" label="Experience">
            <Select>
              <Option value={0}> Fresher</Option>
              <Option value={1}> 1 Year</Option>
              <Option value={2}> 2 Years</Option>
              <Option value={3}> 3 Years</Option>
              <Option value={4}> 4 Years</Option>
              <Option value={5}> 5+ Years</Option>
            </Select>
          </Form.Item>
          <Form.Item name="salary" label="Salary">
            <Select>
              <Option value={10000}> 10000+ </Option>
              <Option value={50000}> 50000+ </Option>
              <Option value={100000}> 1Lakh +</Option>
              <Option value={500000}> 5Lakh +</Option>
              <Option value={1000000}>10Lakhs +</Option>
            </Select>
          </Form.Item>
          <Button htmlType="submit">Filter</Button>
        </Form>
      </Modal>
      <Search
        placeholder="Enter Job Title"
        allowClear
        enterButton="Search"
        size="medium"
        id="searchBar"
        onSearch={(value) => {
          dispatch(searchJobs(value));
        }}
      />
    </div>
  );
}

export default Filter;
