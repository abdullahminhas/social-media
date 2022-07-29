import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div
        className="flex-shrink-0 p-3 bg-light h-100"
        style={{ width: "100%" }}
      >
        {/* <a
          href="/"
          className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
        >
          <svg className="bi me-2" width="30" height="24">
            <use xlink:href="#bootstrap" />
          </svg>
          <span className="fs-5 fw-semibold">Collapsible</span>
        </a> */}
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              Home
            </button>
            <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Upload Image
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Delete Images
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="true"
            >
              Social Media
            </button>
            <div className="collapse show" id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link to={"/login/facebook"} className="link-dark rounded">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to={"/login/instagram"} className="link-dark rounded">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to={"/login/twitter"} className="link-dark rounded">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to={"/login/Linkedin"} className="link-dark rounded">
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link to={"/login/spotify"} className="link-dark rounded">
                    Spotify
                  </Link>
                </li>
                <li>
                  <Link to={"/login/apple"} className="link-dark rounded">
                    Apple Music
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Orders
            </button>
            <div className="collapse" id="orders-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded">
                    New
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Processed
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Shipped
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Returned
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3"></li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              Account
            </button>
            <div className="collapse" id="account-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded">
                    New...
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
