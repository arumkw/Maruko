import React from 'react'
import {HashRouter } from "react-router-dom";
// import CreateMeetup from "../createMeetup.jsx";
// import Explore from "../explore.jsx";
// import Login from "../login.jsx";
// import Main from "../main.jsx";
import '../../App.css';

const NavBar = () => {
    return (
        <HashRouter>
          <div className="navbar">
                            <a href="Main">MARUKO</a>
                            <a href="CreateMeetup">Create Meetup</a>
                            <a href="Explore">Explore</a>
                    <div className="navbar-right">
                        <a href="Login">Login</a>
                    </div>
          </div>
        </HashRouter>
      );
}

export default NavBar;