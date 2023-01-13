import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function UserInfo() {
  const { id } = useParams();
  const allUsers = useSelector((state) => state.UsersReducer).users;
  const user = allUsers.find((user) => user._id === id);
  return (
    <div>
      <DefaultLayout>
        {user && (
          <div>
            <details>
              <summary>
                <b style={{ fontSize: 24 }}>Personal Information</b>
              </summary>
              <p>
                <b>First Name: </b> {user.firstName}
              </p>
              <p>
                <b>Last Name: </b> {user.lastName}
              </p>

              <p>
                <b>E-mail: </b> {user.email}
              </p>

              <p>
                <b>Contact: </b> {user.mobileNumber}
              </p>

              <p>
                <b>Address: </b> {user.address}
              </p>
            </details>

            {/* <hr /> */}
            <details>
              <summary>
                <b style={{ fontSize: 24 }}>Skills</b>
              </summary>

              {user.skills.map((skill) => {
                return <li>{skill}</li>;
              })}
            </details>

            {/* <hr /> */}
            <details>
              <summary>
                <b style={{ fontSize: 24 }}>Experience</b>
              </summary>
              {user.experience.map((experience) => {
                return <li>{experience}</li>;
              })}
            </details>
            {/* <hr /> */}
            <details>
              <summary>
                <b style={{ fontSize: 24 }}>Education</b>
              </summary>
              {user.education.map((education) => {
                return <li>{education}</li>;
              })}
            </details>
            {/* <hr /> */}
            <details>
              <summary>
                <b style={{ fontSize: 24 }}>Projects</b>
              </summary>
              {user.projects.map((project) => {
                return <li>{project}</li>;
              })}
            </details>
          </div>
        )}
      </DefaultLayout>
    </div>
  );
}

export default UserInfo;
