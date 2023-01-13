import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
function HomePage() {
  const jobsData = useSelector((state) => state.JobsReducer);
  const jobs = jobsData.jobs;

  return (
    <div>
      <DefaultLayout>
        <Row gutter={16}>
          {jobs.map((job) => {
            return (
              <Col lg={12} sm={24}>
                {/* lg is the columns taken by each job for large devices and sm
                for small devices */}
                <div className="job-div boxShadow m-2 p-2">
                  <h4>{job.title}</h4>
                  <p>{job.company}</p>

                  <hr />

                  <p>{job.smallDescription}</p>
                  <div className="flex justify-content-between">
                    <p>
                      Salary :
                      <b>
                        {" "}
                        {job.salaryFrom} - {job.salaryTo}
                      </b>
                    </p>
                    <p>
                      Experience : <b>{" " + job.experience} Years</b>
                    </p>
                  </div>
                  <hr />

                  <div className="flex justify-content-between">
                    <Link to={`/jobinformation/${job._id}`}>
                      <Button className="viewJobButtons">View</Button>
                    </Link>

                    <p>
                      Posted on : {moment(job.createdAt).format("MMM DD, YYYY")}
                    </p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </DefaultLayout>
    </div>
  );
}

export default HomePage;
