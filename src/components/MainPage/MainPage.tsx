import React from "react";
import AboutMe from "../AboutMe";
import Academic from "../Academic";
import ContactMe from "../ContactMe";
import Header from "../Header";
import Professional from "../Professional";
import Resume from "../Resume";

const MainPage = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Resume />
        <AboutMe />
        <Professional />
        <Academic />
        <ContactMe />
      </div>
    </>
  );
};

export default MainPage;
