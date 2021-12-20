import React, { useState } from "react";
import { send } from "emailjs-com";
import { Icon } from "@iconify/react";
import logo from "./../../logo.svg";
import Modal from "react-modal";

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ContactMe = () => {
  const [iconOn, setIconOn] = useState({ on: "none" });
  const [emailMessage, setEmailMessage] = useState(
    "Successfully sent your email."
  );
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "danieljcomas@gmail.com",
    message: "",
    reply_to: "",
  });
  const closeModal = () => {
    setModalOpen(false);
    setEmailMessage("");
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailMessage("Successfully sent your email.");
    // send("service_0dbx922", "template_5cw3v1r", toSend, 'user_K9AjBuy0GgiXyBtz3BMX7')
    //   .then((response) => {
    //     console.log("SUCCESS!", response.status, response.text);
    //     setEmailMessage("Successfully sent your email.")
    //   })
    //   .catch((err) => {
    //     console.log("FAILED...", err);
    //     setEmailMessage("Upss.. Something went wrong, please send email to danieljcomas@gmail.com")
    //   });
    setModalOpen(true);
  };

  return (
    <div
      id="contactme"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={modalStyle}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1>
            <code>{emailMessage}</code>
          </h1>
          <button onClick={closeModal} style={{ fontSize: "4vh" }}>
            Close
          </button>
        </div>
      </Modal>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <h2>
          {" "}
          <code>Contact me</code>{" "}
        </h2>
        <form
          onSubmit={onSubmit}
          style={{ display: "flex", flexDirection: "column", width: "70vh" }}
        >
          <br />
          <input
            type="text"
            name="reply_to"
            placeholder="Email"
            value={toSend.reply_to}
            onChange={(event) =>
              setToSend({ ...toSend, [event.target.name]: event.target.value })
            }
            style={{
              height: "5vh",
              borderRadius: "5%",
              fontSize: "3vh",
              fontFamily: "Raleway,sans-serif",
              backgroundColor: "#c2c2d6",
            }}
          />
          <br />
          <input
            type="text"
            name="from_name"
            placeholder="Subject"
            value={toSend.from_name}
            onChange={(event) =>
              setToSend({ ...toSend, [event.target.name]: event.target.value })
            }
            style={{
              height: "5vh",
              borderRadius: "5%",
              fontSize: "3vh",
              fontFamily: "Raleway,sans-serif",
              backgroundColor: "#c2c2d6",
            }}
          />
          <br />
          <textarea
            name="message"
            placeholder="Message"
            value={toSend.message}
            onChange={(event) =>
              setToSend({ ...toSend, [event.target.name]: event.target.value })
            }
            style={{
              height: "30vh",
              borderRadius: "1%",
              fontSize: "3vh",
              fontFamily: "Raleway,sans-serif",
              backgroundColor: "#c2c2d6",
            }}
          />
          <br />
          <button
            type="submit"
            style={{
              height: "5vh",
              fontSize: "3vh",
              fontWeight: "bolder",
              fontFamily: "Raleway,sans-serif",
            }}
          >
            {" "}
            Send
          </button>
        </form>
      </div>
      <div style={{ marginLeft: "10vh" }}>
        <h3>
          {" "}
          <code>
            Build with
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} alt="logo" className="React-logo" />
            </a>
            by Daniel
          </code>{" "}
        </h3>
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
                color={iconOn.on === "linkedin" ? "#ffff" : "#c2c2d6"}
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
                color={iconOn.on === "github" ? "#ffff" : "#c2c2d6"}
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
