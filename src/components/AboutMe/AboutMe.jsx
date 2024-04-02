import { Modal, Avatar, Frame } from "@react95/core";
import { Drvspace7 } from "@react95/icons";
import ProfilePicture4 from "../../asset/images/ProfilePicture4.jpg";

const AboutMe = ({ isOpen, onClose }) => {
  return isOpen ? (
    <Modal
      width={"500"}
      height={"730"}
      icon={<Drvspace7 variant="32x32_4" />}
      title="About Me"
      closeModal={onClose}
      defaultPosition={{ x: 350, y: 50 }}
      menu={[
        { name: "File", list: [] },
        { name: "Edit", list: [] },
      ]}
    >
      <Frame
        w={"100%"}
        h={650}
        boxShadow="in"
        padding="0px 5px"
        style={{
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "20px" }}>
          <Avatar src={ProfilePicture4} size={200} circle />
        </div>
        <h1>Hey I'm Ghaz!</h1>
        <p>
          I'm a<strong> Software Engineer</strong>, professional SE for 2+ years
          and a hobbiest for 14+ years! I've grown my love for tech since middle
          school when I broke my very first laptop... I looked into the
          components and that got me into hardware, but later discovered the
          software side and fell in love with it! I've made a Computer Club way
          back in secondary education (age 13) and got people including my
          friends into programming!
        </p>
        <p>
          Aside from that, I love hiking (beat Ben Nevis!), I can speak 4
          languages, 🇬🇧 English and 🇮🇩 Indonesian as a native language and 🇮🇹
          Italian and 🇫🇷 France as a professional literacy. I'm also an avid
          cook! I love cooking dishes from around the world, I've explored
          Asian, British, and Italian cuisines, and currently exploring Eastern
          European!
        </p>
      </Frame>
    </Modal>
  ) : null;
};

export default AboutMe;
