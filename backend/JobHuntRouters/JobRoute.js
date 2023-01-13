const express = require("express");
const router = express.Router();
const Job = require("../JobHuntModels/JobModel");
const User = require("../JobHuntModels/UserModel");
const moment = require("moment");
router.get("/getalljobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.send(jobs);
  } catch (error) {
    return res.status(400).json(error);
  }
});
router.post("/postjob", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.send("Job Posted Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/editjob", async (req, res) => {
  try {
    await Job.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.send("Job Updated Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/applyjob", async (req, res) => {
  const { user, job } = req.body;
  try {
    const jobDetail = await Job.findOne({ _id: job._id });
    const candidateDetails = {
      userid: user._id,
      appliedDate: moment().format("MMM DD YYYY"),
    };
    jobDetail.appliedCandidates.push(candidateDetails);
    await jobDetail.save();

    const userDetails = await User.findOne({ _id: user._id });
    const jobApplied = {
      jobid: job._id,
      appliedDate: moment().format("MMM DD YYYY"),
    };
    userDetails.appliedJobs.push(jobApplied);
    await userDetails.save();

    res.send("Job Applied Successfully");
  } catch (error) {
    res.send(error);
  }
});

router.delete("/deletejob", async (req, res) => {
  const { id } = req.query;
  try {
    if (!id) {
      return res.status(404).send();
    }
    const deletedJob = await Job.findByIdAndDelete(id);
    res.send(deletedJob);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

module.exports = router;
