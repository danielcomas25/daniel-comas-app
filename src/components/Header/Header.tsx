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
          <HashLink smooth to="/#home">
            {" "}
            <code> Home </code>
          </HashLink>
        </div>
        <div
          style={{ marginRight: "2vh", fontSize: "2vh", fontWeight: "bold" }}
        >
          <HashLink smooth to="/#aboutme">
            {" "}
            <code> About me </code>
          </HashLink>
        </div>
        <div
          style={{ marginRight: "2vh", fontSize: "2vh", fontWeight: "bold" }}
        >
          <HashLink smooth to="/#experience">
            {" "}
            <code> Experience </code>
          </HashLink>
        </div>
        <div
          style={{ marginRight: "2vh", fontSize: "2vh", fontWeight: "bold" }}
        >
          <HashLink smooth to="/#academic">
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
