import React from "react";
import classes from "./Facebook.module.css";
import NavBar from "../../Components/NavBarComponent/NavBarComponent";
import Sidebar from "../../Components/SidebarComponent/SidebarComponent";

const Facebook = () => {
  const currentPath = window.location.pathname;

  return (
    <React.Fragment>
      <NavBar />
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="container">
            <div
              className="d-flex flex-row justify-content-center align-items-center"
              style={{ height: "90vh" }}
            >
              <div className="card w-50">
                <h2 className={classes.cardHeading}>Facebook</h2>
                <div className="card-body">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="profLink" className="form-label">
                      Profile Link
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="profLink"
                      placeholder="Profile Link"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-success ms-auto d-block"
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Facebook;
