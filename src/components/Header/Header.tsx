import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="App-header">
      <div
        style={{ display: "flex", justifyContent: "flex-end", margin: "2vh" }}
      >
        <div
          style={{
            marginRight: "4vh",
            fontSize: "2.5vh",
            fontWeight: "bolder",
          }}
        >
          <HashLink
            smooth
            to="/daniel-comas-app#home"
            style={{ textDecoration: "none", color: "black" }}
          >
            Home
          </HashLink>
        </div>
        <div
          style={{
            marginRight: "4vh",
            fontSize: "2.5vh",
            fontWeight: "bolder",
          }}
        >
          <HashLink
            smooth
            to="/daniel-comas-app#aboutme"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            About me
          </HashLink>
        </div>
        <div
          style={{
            marginRight: "4vh",
            fontSize: "2.5vh",
            fontWeight: "bolder",
          }}
        >
          <HashLink
            smooth
            to="/daniel-comas-app#experience"
            style={{ textDecoration: "none", color: "black" }}
          >
            Experience
          </HashLink>
        </div>
        <div
          style={{
            marginRight: "4vh",
            fontSize: "2.5vh",
            fontWeight: "bolder",
          }}
        >
          <HashLink
            smooth
            to="/daniel-comas-app#academic"
            style={{ textDecoration: "none", color: "black" }}
          >
            Formation
          </HashLink>
        </div>
        <div
          style={{
            marginRight: "4vh",
            fontSize: "2.5vh",
            fontWeight: "bolder",
          }}
        >
          <HashLink
            smooth
            to="/daniel-comas-app#contactme"
            style={{ textDecoration: "none", color: "black" }}
          >
            Contact me
          </HashLink>
        </div>
        <div
          style={{
            marginRight: "4vh",
            fontSize: "2.5vh",
            fontWeight: "bolder",
          }}
        >
          <a
            href="https://drive.google.com/file/d/1T0ik5L-cFLNouviBgMJoQ6ZjEuvg8MQk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            Get my CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
