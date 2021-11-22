import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Resume = () => {
  const [iconOn, setIconOn] = useState({ on: "none" });
  return (
    <>
      <div className="App-resume" id="home">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              marginRight: "1vh",
              maxWidth: "60vh",
              display: "flex",
              textAlign: "start",
              flexDirection: "column",
            }}
          >
            <code className="App-resume-title">Hi, my name is Daniel</code>
            <br />
            <code className="App-resume-content">
              I am a software engineer specialized in backend development.
              Currently, my main interests are data pipeline design and
              distributed systems.
            </code>
          </p>
          <img
            src={
              "https://media-exp1.licdn.com/dms/image/C4D03AQGSe5jEb7uXxw/profile-displayphoto-shrink_800_800/0/1636461941772?e=1642636800&v=beta&t=BKics0Kwdd6wuRaUVlz4-qkh9Vc68Kkro1UqthN_goY"
            }
            className="App-logo"
            alt="logo"
          />
        </div>
        <div>
          <span style={{ marginRight: "3vh" }}>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/daniel-comas-aa9a5896/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseOver={() => setIconOn({ on: "linkedin" })}
              onMouseLeave={() => setIconOn({ on: "none" })}
            >
              <Icon
                icon="uil:linkedin"
                width="75"
                height="75"
                color={iconOn.on === "linkedin" ? "#c2c2d6" : "#ffff"}
              />
            </a>
          </span>
          <span>
            <a
              className="App-link"
              href="https://github.com/danielcomas25"
              target="_blank"
              rel="noopener noreferrer"
              onMouseOver={() => setIconOn({ on: "github" })}
              onMouseLeave={() => setIconOn({ on: "none" })}
            >
              <Icon
                icon="akar-icons:github-fill"
                width="75"
                height="75"
                color={iconOn.on === "github" ? "#c2c2d6" : "#ffff"}
              />
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Resume;
