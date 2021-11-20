import { Icon } from "@iconify/react";
import React from "react";

const AboutMe = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{ display: "flex", textAlign: "start" }}>
        <code> About me </code>
      </h2>
      <code
        style={{
          maxWidth: "120vh",
          display: "flex",
          textAlign: "start",
          flexDirection: "column",
          fontSize: "2vh",
        }}
      >
        {" "}
        Hello, my name is Daniel Comas and I like to build software in general
        for living. My interest in software started when I was studying
        electronic engineeering back in Venezuela. By them, I had courses
        related to Algorithms and Computer Architecture. <br /> <br />
        Afterwards, I decided to do my master in Computer Science in Telecom
        SudParis where I learn many things about development and software
        architectures. Then I decided to start my professional career in Adomik
        as a backend software engineer in the Data Processing and Storage team.{" "}
        <br /> <br />
        Here are some technologies I have been working with in the last few
        years:
        <br />
      </code>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "2vh",
          }}
        >
          <Icon icon="mdi:language-ruby-on-rails" width="70" />
          <code style={{ fontSize: "1.5vh" }}> Ruby on Rails </code>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "2vh",
          }}
        >
          <Icon icon="logos:scala" width="40" />
          <code style={{ fontSize: "1.5vh", marginTop: "1vh" }}> Scala </code>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "2vh",
          }}
        >
          <Icon icon="cib:apache-spark" color="#ff6600" width="65" />
          <code style={{ fontSize: "1.5vh", marginTop: "1vh" }}> Spark </code>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "2vh",
          }}
        >
          <Icon icon="fontisto:aws" color="#ffff" width="65" />
          <code style={{ fontSize: "1.5vh", marginTop: "1vh" }}> AWS </code>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "2vh",
          }}
        >
          <Icon
            icon="vscode-icons:file-type-mongo"
            color="#ff0010"
            width="65"
          />
          <code style={{ fontSize: "1.5vh", marginTop: "1vh" }}> MongoDB </code>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "2vh",
          }}
        >
          <Icon icon="logos:postgresql" color="#ff0010" width="60" />
          <code style={{ fontSize: "1.5vh", marginTop: "1vh" }}>
            {" "}
            PostgreSQL{" "}
          </code>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
export default AboutMe;
