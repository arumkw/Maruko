import React from 'react'
import {HashRouter } from "react-router-dom";
import '../../App.css';

const NavBar = () => {
    return (
        <HashRouter>
          <div className="navbar">
                    <div className="navbar-left">
                            <a href="Main">MARUKO</a>
                            <a href="CreateMeetup">Create Meetup</a>
                            <a href="Explore">Explore</a>
                    </div>
                    <div className="navbar-right">
                        <a href="Login">Login</a>
                    </div>
          </div>
        </HashRouter>
      );
}

export default NavBar;