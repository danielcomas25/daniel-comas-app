import React from "react";
import adomikLogo from "./../../images/adomik.png";
import tspLogo from "./../../images/tsp-logo.jpeg";

const Professional = () => {
  return (
    <div
      id={"experience"}
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
        {" "}
        <code> Professional Experience </code>
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
              href="https://www.adomik.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={adomikLogo}
                className="Academic-logo-usb"
                alt="logo"
              />{" "}
            </a>
            <p style={{ margin: "0" }}>
              <code style={{ fontWeight: "bolder" }}>Software Engineer </code> |
              October 2019 - Present <br />
              <code>
                ● Design and develop automated algorithms for data collection,
                cleaning, processing and storage from different heterogeneous
                sources by using a micro-service architecture. <br /> ●
                Development of features for both intranet and front-end apps,
                using web development full-stack skills. <br /> ● Actively play
                a key role in the design, implementation, development,
                deployment, maintainability and monitoring of multiple projects
                written in Ruby, Scala and Javascript. <br />● Design automated
                algorithms for multiple data pipelines using Spark.
              </code>{" "}
              <br /> <br />
            </p>
          </div>
          <br />
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <a
              href="https://www.adomik.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={adomikLogo} className="Academic-logo-usb" alt="logo" />{" "}
            </a>
            <p style={{ margin: "0" }}>
              <code style={{ fontWeight: "bolder" }}>
                Data Processing Intern{" "}
              </code>{" "}
              | October 2019 - Present <br />
              <code>
                ● Development of a new data processing engine architecture for
                different analytic products. <br />
                ● Design and develop an interface for managing the new data
                engine architecture. <br />● Testing multiple data sources in
                the new data pipeline.
              </code>{" "}
              <br /> <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Professional;
