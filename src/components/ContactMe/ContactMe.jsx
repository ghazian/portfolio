import { Modal, Frame } from "@react95/core";
import { Awschd32402 } from "@react95/icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactMe = ({ isOpen, onClose }) => {
  return isOpen ? (
    <Modal
      width={"500"}
      height={"300"}
      icon={<Awschd32402 variant="16x16_4" />}
      title="Contact Me"
      closeModal={onClose}
      defaultPosition={{ x: 150, y: 50 }}
      menu={[
        { name: "File", list: [] },
        { name: "Edit", list: [] },
      ]}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Frame
          w={"100%"}
          h={200}
          boxShadow="in"
          bg="white"
          padding="0px 5px"
          style={{ overflowY: "auto" }}
        >
          <div>
            <h1>Contact Me!</h1>
            If you'd like to know more about what I do, please contact me at my
            email on: <strong>azfar.ghazian@gmail.com</strong>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
              >
                <FaLinkedin style={{ marginRight: "5px" }} />
                LinkedIn
              </a>
              <a
                href="https://www.github.com/ghazian"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
              >
                <FaGithub style={{ marginRight: "5px" }} />
                Personal Github
              </a>
              <a
                href="https://www.github.com/gazfar"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <FaGithub style={{ marginRight: "5px" }} />
                Work Github
              </a>
            </div>
          </div>
        </Frame>
      </div>
    </Modal>
  ) : null;
};

export default ContactMe;
