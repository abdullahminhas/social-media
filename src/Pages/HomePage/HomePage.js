import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBarComponent/NavBarComponent";
import Sidebar from "../../Components/SidebarComponent/SidebarComponent";

const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div
            className="d-flex flex-row justify-content-center align-items-center"
            style={{ height: "90vh" }}
          >
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Social Media
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link to={"/login/facebook"} className="dropdown-item">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to={"/login/twitter"} className="dropdown-item">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to={"/login/instagram"} className="dropdown-item">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to={"/login/vk"} className="dropdown-item">
                    VK
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default HomePage;
