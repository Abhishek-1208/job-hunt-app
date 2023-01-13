const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    //for authentication
    userName: { type: String, required: true },
    password: { type: String, required: true },

    //personal information
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, default: "" },
    mobileNumber: { type: String, default: "" },
    portfolio: { type: String, default: "" },
    about: { type: String, default: "" },
    address: { type: String, default: "" },

    //skills and other
    education: { type: [], default: [""] },
    skills: { type: [], default: [""] },
    projects: { type: [], default: [""] },
    experience: { type: [], default: [""] },

    appliedJobs: [],
  },
  { timestamp: true }
);

const userModel = new mongoose.model("users", userSchema);
module.exports = userModel;
