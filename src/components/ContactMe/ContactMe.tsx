import { Modal, Frame, TitleBar } from "@react95/core";
import { Awschd32402 } from "@react95/icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface ContactMeProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactMe = ({ isOpen, onClose }: ContactMeProps) => {
  return isOpen ? (
    <Modal
      w="500px"
      h="300px"
      icon={<Awschd32402 variant="16x16_4" />}
      title="Contact Me"
      titleBarOptions={<TitleBar.Close onClick={onClose} />}
      dragOptions={{ defaultPosition: { x: 150, y: 50 } }}
      menu={[
        { name: "File", list: <></> },
        { name: "Edit", list: <></> },
      ]}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Frame
          w="100%"
          h="200px"
          boxShadow="in"
          backgroundColor="white"
          p="0px 5px"
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
                href="https://www.linkedin.com/in/ghazian"
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
                Github
              </a>
            </div>
          </div>
        </Frame>
      </div>
    </Modal>
  ) : null;
};

export default ContactMe;
