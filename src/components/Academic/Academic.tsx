import React, { useState } from "react";

import { Link } from "react-router-dom";
import usbLogo from "./../../images/usb-logo.gif";
import tspLogo from "./../../images/tsp-logo.jpeg";

interface Selector {
  selector: String;
}

const Academic = () => {
  return (
    <div
      id={"academic"}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div
        className={"App-academic-title"}
        style={{
          fontSize: "4vh",
          fontWeight: "bolder",
        }}
      >
        <code> Academic Formation </code>
      </div>
      <br />
      <div style={{}}>
        <div
          style={{
            width: "100vh",
            fontSize: "2vh",
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            marginLeft: "4vh",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={tspLogo} className="Academic-logo-tsp" alt="logo" />
            <p style={{ margin: "0" }}>
              {" "}
              2017-2019 -{" "}
              <code style={{ fontWeight: "bolder" }}>
                MsC. Computer Science for Communication Networks{" "}
              </code>{" "}
              <br />
              <code>
                Telecom Sud Paris in Paris, France <br />
                Related Courses: Middleware for Distributed Applications,
                Virtualization
              </code>
            </p>
          </div>
          <br />
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={usbLogo} className="Academic-logo-usb" alt="logo" />
            <p style={{ margin: "0" }}>
              {" "}
              2012-2019 -{" "}
              <code style={{ fontWeight: "bolder" }}>
                Electronic Engineering (Cum Laude)
              </code>{" "}
              <br />
              <code>
                Universidad Simon Bolivar in Caracas, Venezuela <br />
                Related Courses: Control Systems, Computer Architecture,
                Electronic circuits
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
