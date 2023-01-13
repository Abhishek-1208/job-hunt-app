import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Table, Modal, Tooltip } from "antd";
import { deleteJob } from "../Redux/Actions/jobActions";
import {
  EditOutlined,
  UnorderedListOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
function PostedJobs() {
  const dispatch = useDispatch();
  const allJobs = useSelector((state) => state.JobsReducer).jobs;
  const allUsers = useSelector((state) => state.UsersReducer).users;
  const userId = JSON.parse(localStorage.getItem("user"))._id;
  const userPostedJobs = allJobs.filter((job) => job.postedBy === userId);
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedJob, setSeletecedJob] = useState(false);

  const showModal = (job) => {
    setIsModalVisible(true);
    setSeletecedJob(job);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function deleteSelectedJob(job) {
    dispatch(deleteJob(job));
  }

  function CandidatesList() {
    const candidateColumns = [
      {
        title: "Candidate Id",
        dataIndex: "candidateId",
        render: (text, data) => {
          return (
            <Link to={`/users/${data.candidateId}`}>{data.candidateId}</Link>
          );
        },
      },
      {
        title: "Candidate Name",
        dataIndex: "candidateName",
      },
      {
        title: "Date Applied",
        dataIndex: "appliedDate",
      },
    ];
    var candidatesDataSource = [];
    for (var candidate of selectedJob.appliedCandidates) {
      var user = allUsers.find((user) => user._id === candidate.userid);
      var obj = {
        candidateId: user._id,
        candidateName: user.firstName + " " + user.lastName,
        appliedDate: candidate.appliedDate,
      };
      candidatesDataSource.push(obj);
    }

    return (
      <Table columns={candidateColumns} dataSource={candidatesDataSource} scroll={{ x: 800, y: 300 }}/>
    );
  }

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Posted On",
      dataIndex: "postedOn",
    },
    {
      title: "Applied Candiates",
      dataIndex: "appliedCandidates",
    },
    {
      title: "Actions",
      render: (text, data) => {
        return (
          <div className="flex">
            <Tooltip placement="top" title="Edit Job">
              <EditOutlined
                style={{ marginRight: "16px", fontSize: "15px" }}
                onClick={() => {
                  navigate(`/editjob/${data.completeJobData._id}`);
                }}
              />
            </Tooltip>
            <Tooltip placement="top" title="Applied Candidates">
              <UnorderedListOutlined
                style={{ marginRight: "16px", fontSize: "15px" }}
                onClick={() => {
                  showModal(data.completeJobData);
                }}
              />
            </Tooltip>

            <Tooltip placement="top" title="Delete Job">
              <DeleteOutlined
                style={{ fontSize: "16px" }}
                onClick={() => {
                  deleteSelectedJob(data.completeJobData);
                }}
              />
            </Tooltip>
          </div>
        );
      },
    },
  ];
  const dataSource = [];
  for (var job of userPostedJobs) {
    var obj = {
      title: job.title,
      company: job.company,
      appliedCandidates: job.appliedCandidates.length,
      postedOn: moment(job.createdAt).format("MMM DD yyyy"),
      completeJobData: job,
    };
    dataSource.push(obj);
  }

  return (
    <div>
      <DefaultLayout>
        <Table columns={columns} dataSource={dataSource} scroll={{ x: 800, y: 300 }}></Table>
        <Modal
          title="List Of Candidates"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          width={800}
        >
          <CandidatesList />
        </Modal>
      </DefaultLayout>
    </div>
  );
}

export default PostedJobs;
