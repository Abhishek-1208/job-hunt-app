import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import { Table } from "antd";
function AppliedJobs() {
  const { jobs } = useSelector((state) => state.JobsReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  const userAppliedJobs = [];
  for (var job of jobs) {
    var appliedCandidates = job.appliedCandidates;
    var findCandidate = appliedCandidates.find(
      (candidate) => candidate.userid === user._id
    );
    if (findCandidate) {
      console.log("Found" + job.company);
      var format = {
        title: job.title,
        company: job.company,
        appliedDate: findCandidate.appliedDate,
      };
      userAppliedJobs.push(format);
    } else {
      console.log("not found");
    }
  }

  const columns = [
    {
      title: "Job Title",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Date Applied",
      dataIndex: "appliedDate",
    },
  ];

  return (
    <div>
      <DefaultLayout>
        <Table columns={columns} dataSource={userAppliedJobs} scroll={{ x: 800, y: 300 }}></Table>
      </DefaultLayout>
    </div>
  );
}

export default AppliedJobs;
