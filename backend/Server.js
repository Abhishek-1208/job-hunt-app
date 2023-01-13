const express = require("express");
const app = express();

const db = require("./database.js");

const jobsRoute = require("./JobHuntRouters/JobRoute");
const userRoute = require("./JobHuntRouters/UserRoute");

app.use(express.json());

app.use("/api/jobs/", jobsRoute);

app.use("/api/users/", userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
