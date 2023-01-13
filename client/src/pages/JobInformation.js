import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { applyJob } from "../Redux/Actions/jobActions";
import { Button, Tag } from "antd";
import moment from "moment";
function JobInformation({ match }) {
  const { id } = useParams();
  const { jobs } = useSelector((state) => state.JobsReducer);
  const job = jobs.find((job) => job._id === id);
  const userId = JSON.parse(localStorage.getItem("user"))._id;

  const dispatch = useDispatch();

  const appliedCandidates = job.appliedCandidates;
  const alreadyApplied = appliedCandidates.find(
    (candidate) => candidate.userid === userId
  );

  function applyToJob() {
    dispatch(applyJob(job));
  }

  return (
    <div>
      <DefaultLayout>
        {job && (
          <div>
            <p>
              <b>Title: </b>
              {job.title}
            </p>
            <p>
              <b>Company: </b>
              {job.company}
            </p>
            <p>
              <b>Job Description: </b>
              {job.smallDescription}
              <br />
              {job.fullDescription}
            </p>
            <p>
              <b>Skills Required:</b> {job.skillsRequired}
            </p>
            <p>
              <b>Experience: </b> {job.experience}
            </p>
            <p>
              <b>Minimum Qualification: </b> {job.minimumQualification}
            </p>
            <hr />
            <p>
              <b>Salary Range: </b> {job.salaryFrom} - {job.salaryTo}
            </p>
            <p>
              <b>Department: </b> {job.department}
            </p>
            <p>
              <b>About Company: </b> {job.companyDescription}
            </p>
            <p>
              <b>Total Applied Candiate: </b> {job.appliedCandidates.length}
            </p>
            <hr />
            <div className="flex justify-content-between">
              {job.postedBy === userId ? (
                <Button>
                  <Link to={`/editjob/${job._id}`}>Edit Job</Link>
                </Button>
              ) : alreadyApplied ? (
                <Tag color="gold">Already Applied</Tag>
              ) : (
                <Button onClick={applyToJob}>Apply Now</Button>
              )}
              <p>
                <b>Posted on: </b>
                {moment(job.createdAt).format("MMM DD, YYYY")}
              </p>
            </div>
            <div className="flex justify-content-end">
              <p>
                <b>Last Date to Apply: </b>
                {moment(job.createdAt).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>
        )}
      </DefaultLayout>
    </div>
  );
}

export default JobInformation;
