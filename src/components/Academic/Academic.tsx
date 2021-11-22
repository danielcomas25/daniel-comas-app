import React, { useState } from "react";
import usbLogo from "./../../images/usb-logo.gif";
import tspLogo from "./../../images/tsp-logo.jpeg";
import { Icon } from "@iconify/react";

const Academic = () => {
  const [onMasterDiploma, setOnMasterDiploma] = useState<boolean>(false);
  const [onBachelorDiploma, setOnBachelorDiploma] = useState<boolean>(false);

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
            <a
              href="https://www.telecom-sudparis.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={tspLogo}
                className="Academic-logo-tsp"
                alt="logo"
              />{" "}
            </a>
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
              </code>{" "}
              <br /> <br />
              <a
                onMouseOver={() => setOnMasterDiploma(true)}
                onMouseOut={() => setOnMasterDiploma(false)}
                href="https://drive.google.com/file/d/1wB8uH6bYg357e7PhcndtGg9inqDIh2hE/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: onMasterDiploma ? "#ffff" : "#c2c2d6",
                }}
              >
                {" "}
                <Icon
                  icon="fa-solid:download"
                  color={onMasterDiploma ? "#ffff" : "#c2c2d6"}
                  width="20"
                />
                <code> Master Diploma </code>
              </a>
            </p>
          </div>
          <br />
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <a
              href="http://www.usb.ve/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={usbLogo} className="Academic-logo-usb" alt="logo" />{" "}
            </a>
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
              </code>{" "}
              <br /> <br />
              <a
                onMouseOver={() => setOnBachelorDiploma(true)}
                onMouseOut={() => setOnBachelorDiploma(false)}
                href="https://drive.google.com/file/d/1uW3eqhaJdyIuBl7HX4f7Xp1HIIOESfJY/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: onBachelorDiploma ? "#ffff" : "#c2c2d6",
                }}
              >
                {" "}
                <Icon
                  icon="fa-solid:download"
                  color={onBachelorDiploma ? "#ffff" : "#c2c2d6"}
                  width="20"
                />
                <code> Engineering Diploma </code>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
