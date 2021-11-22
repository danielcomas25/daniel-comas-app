import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="App-header">
      <div
        style={{ display: "flex", justifyContent: "flex-end", margin: "0.5vh" }}
      >
        <div
          style={{ marginRight: "2vh", fontSize: "2vh", fontWeight: "bold" }}
        >
          <HashLink smooth to="/daniel-comas-app#home">
            {" "}
            <code> Home </code>
          </HashLink>
        </div>
        <div
          style={{ marginRight: "2vh", fontSize: "2vh", fontWeight: "bold" }}
        >
          <HashLink smooth to="/daniel-comas-app#aboutme">
            {" "}
            <code> About me </code>
          </HashLink>
        </div>
        <div
          style={{ marginRight: "2vh", fontSize: "2vh", fontWeight: "bold" }}
        >
          <HashLink smooth to="/daniel-comas-app#experience">
            {" "}
            <code> Experience </code>
          </HashLink>
        </div>
        <div
          style={{ marginRight: "2vh", fontSize: "2vh", fontWeight: "bold" }}
        >
          <HashLink smooth to="/daniel-comas-app#academic">
            {" "}
            <code> Formation </code>
          </HashLink>
        </div>
        <div
          style={{ marginRight: "2vh", fontSize: "2vh", fontWeight: "bold" }}
        >
          <code> Contact me </code>
        </div>
      </div>
    </div>
  );
};

export default Header;
