import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";
import HomePage from "./HomePage/HomePage";
import Facebook from "./FacebookPage/FacebookPage";
import Twitter from "./TwitterPage/TwitterPage";
import Instagram from "./InstagramPage/InstagramPage";
import Linkedin from "./LinkedInPage/LinkedInPage";
import Spotify from "./SpotifyPage/SpotifyPage";
import AppleMusic from "./AppleMusicPage/AppleMusicPage";

function WebPage() {
  const currentPath = window.location.pathname;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact></Route>
        <Route path="/login/facebook" element={<Facebook />}></Route>
        <Route path="/login/twitter" element={<Twitter />}></Route>
        <Route path="/login/instagram" element={<Instagram />}></Route>
        <Route path="/login/linkedin" element={<Linkedin />}></Route>
        <Route path="/login/spotify" element={<Spotify />}></Route>
        <Route path="/login/apple" element={<AppleMusic />}></Route>
      </Routes>
    </Router>
  );
}
export default WebPage;
