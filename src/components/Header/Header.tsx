import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

interface On {
  home: boolean;
  aboutMe: boolean;
  experience: boolean;
  academic: boolean;
  contactMe: boolean;
  getMyCv: boolean;
}

const Header = () => {
  const [on, setOn] = useState<On>({
    home: true,
    aboutMe: false,
    experience: false,
    academic: false,
    contactMe: false,
    getMyCv: false,
  });

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
          onMouseOver={() => setOn({ ...on, home: true })}
        >
          <HashLink
            smooth
            to="/daniel-comas-app#home"
            style={{
              textDecoration: "none",
              color: on.home ? "#ffff" : "black",
            }}
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
          onMouseOver={() => setOn({ ...on, aboutMe: true })}
          onMouseOut={() => setOn({ ...on, aboutMe: false })}
        >
          <HashLink
            smooth
            to="/daniel-comas-app#aboutme"
            style={{
              textDecoration: "none",
              color: on.aboutMe ? "#ffff" : "black",
            }}
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
          onMouseOver={() => setOn({ ...on, experience: true })}
          onMouseOut={() => setOn({ ...on, experience: false })}
        >
          <HashLink
            smooth
            to="/daniel-comas-app#experience"
            style={{
              textDecoration: "none",
              color: on.experience ? "#ffff" : "black",
            }}
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
          onMouseOver={() => setOn({ ...on, academic: true })}
          onMouseOut={() => setOn({ ...on, academic: false })}
        >
          <HashLink
            smooth
            to="/daniel-comas-app#academic"
            style={{
              textDecoration: "none",
              color: on.academic ? "#ffff" : "black",
            }}
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
          onMouseOver={() => setOn({ ...on, contactMe: true })}
          onMouseOut={() => setOn({ ...on, contactMe: false })}
        >
          <HashLink
            smooth
            to="/daniel-comas-app#contactme"
            style={{
              textDecoration: "none",
              color: on.contactMe ? "#ffff" : "black",
            }}
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
          onMouseOver={() => setOn({ ...on, getMyCv: true })}
          onMouseOut={() => setOn({ ...on, getMyCv: false })}
        >
          <a
            href="https://drive.google.com/file/d/1T0ik5L-cFLNouviBgMJoQ6ZjEuvg8MQk/view"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: on.getMyCv ? "#ffff" : "black",
            }}
          >
            <Icon
              icon="fa-solid:download"
              color={on.getMyCv ? "#ffff" : "black"}
              width="22"
            />{" "}
            Get my CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
