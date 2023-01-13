import "./App.css";
import { React, useEffect } from "react";
import "antd/dist/antd.css";
import HomePage from "./pages/HomePage";
import AppliedJobs from "./pages/AppliedJobs";
import Profile from "./pages/Profile";
import PostJob from "./pages/PostJob";
import JobInformation from "./pages/JobInformation";
import UserInfo from "./pages/UserInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "./Redux/Actions/jobActions";
import { getAllUsers } from "./Redux/Actions/userActions";
import LoaderComponent from "./components/LoaderComponent";
import AuthenticateRoute from "./components/AuthenticateRoute";
import PostedJobs from "./pages/PostedJobs";
import Login from "./pages/Login";
import EditJob from "./pages/EditJob";
import Register from "./pages/Register";
function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="App">
      {loader && <LoaderComponent />}

      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<AuthenticateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/appliedjobs" element={<AppliedJobs />} />
            <Route path="/postjob" element={<PostJob />} />
            <Route path="/posted" element={<PostedJobs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/jobinformation/:id" element={<JobInformation />} />
            <Route path="/editjob/:id" element={<EditJob />} />
            <Route path="/users/:id" element={<UserInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
