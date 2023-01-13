import axios from "axios";
import { message } from "antd";
export const registerUser = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/api/users/register", values);
    message.success("User Registered Sucessfully", 1);
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  } catch (error) {
    message.error("Something Went Wrong! Please Try Again Later");
  }
  dispatch({ type: "LOADING", payload: false });
};

export const loginUser = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const loggedInUser = await axios.post("/api/users/login", values);
    message.success("Logged In Sucessfully", 1);
    localStorage.setItem("user", JSON.stringify(loggedInUser.data)); // storing the user in the pc so that on changing or refreshing user need not to login again
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    message.error("Invalid Credential");
  }
  dispatch({ type: "LOADING", payload: false });
};

export const updateUser = (values) => async (dispatch) => {
  //since we have only form values in values attribute but in backend we are updating by checking the _id attribute and
  //so that's why we are appending the _id from local storage to value variable to get access of it.
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  values._id = userid;

  dispatch({ type: "LOADING", payload: true });
  try {
    const updatedUser = await axios.post("/api/users/update", values);
    message.success("Saved Sucessfully", 1);
    localStorage.setItem("user", JSON.stringify(updatedUser.data)); // storing the user in the pc so that on changing or refreshing user need not to login again
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    message.error("Something went wrong!. Please try again later");
  }
  dispatch({ type: "LOADING", payload: false });
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/users/getallusers");
    dispatch({ type: "GET_ALL_USERS", payload: response.data });
  } catch (error) {
    console.log("Error in dispatching" + error);
  }
  dispatch({ type: "LOADING", payload: false });
};
