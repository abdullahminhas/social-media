import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const currentPath = window.location.pathname;

  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to={"/"} className="text-decoration-none">
            <span className="navbar-brand mb-0 h1">
              {currentPath === "/login/facebook"
                ? "Facebook App"
                : currentPath === "/login/twitter"
                ? "Twitter App"
                : currentPath === "/login/instagram"
                ? "Instagram App"
                : currentPath === "/login/vk"
                ? "VK App"
                : "Social Apps"}
            </span>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
