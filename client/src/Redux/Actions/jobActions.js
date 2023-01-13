import axios from "axios";
import { message } from "antd";
export const getAllJobs = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/jobs/getalljobs");
    dispatch({ type: "GET_ALL_JOBS", payload: response.data });
  } catch (error) {
    console.log("Error in dispatching" + error);
  }
  dispatch({ type: "LOADING", payload: false });
};

export const postJob = (values) => async (dispatch) => {
  values.postedBy = JSON.parse(localStorage.getItem("user"))._id;

  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/api/jobs/postjob", values);

    dispatch({ type: "LOADING", payload: false });
    message.success("Job Posted Successfully");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    message.error("Error while posting. Try again later");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const deleteJob = (job) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  const id = job._id;

  try {
    await axios.delete("api/jobs/deletejob", {
      params: { id },
    });

    message.success("Job Deleted Successfully");

    dispatch({ type: "LOADING", payload: false });

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    message.error("Error while deleting. Try again later");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editJob = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/api/jobs/editjob", values);

    dispatch({ type: "LOADING", payload: false });
    message.success("Job Updated Successfully");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    message.error("Error while posting. Try again later");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const applyJob = (job) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));

  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/api/jobs/applyjob", { job, user });

    dispatch({ type: "LOADING", payload: false });
    message.success("Job Applied Successfully");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    message.error("Error while Applying. Try again later");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const searchJobs = (key) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/jobs/getalljobs");
    const filteredJobs = response.data.filter((job) =>
      job.title.toLowerCase().includes(key.toLowerCase())
    );
    dispatch({ type: "GET_ALL_JOBS", payload: filteredJobs });
  } catch (error) {
    console.log("Error in dispatching" + error);
  }
  dispatch({ type: "LOADING", payload: false });
};

export const filterJobs = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/jobs/getalljobs");
    var filteredJobs = response.data;
    if (values.experience !== undefined) {
      filteredJobs = filteredJobs.filter(
        (job) => job.experience <= values.experience
      );
    }
    if (values.salary !== undefined) {
      filteredJobs = filteredJobs.filter(
        (job) => job.salaryFrom >= values.salary
      );
    }
    dispatch({ type: "GET_ALL_JOBS", payload: filteredJobs });
  } catch (error) {
    console.log("Error in dispatching" + error);
  }
  dispatch({ type: "LOADING", payload: false });
};
