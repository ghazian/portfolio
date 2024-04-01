import { Modal, Avatar } from "@react95/core";
import { Drvspace7 } from "@react95/icons";
import ProfilePicture from "../../asset/images/ProfilePicture.jpg";

const AboutMe = ({ onClose }) => {
  return (
    <Modal
      width={"500"}
      height={"500"}
      icon={<Drvspace7 variant="32x32_4" />}
      title="My Resume"
      closeModal={onClose}
      defaultPosition={{ x: 350, y: 20 }}
      menu={[
        { name: "File", list: [] },
        { name: "Edit", list: [] },
      ]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Avatar src={ProfilePicture} size={200} circle />
        <h1>Hey I'm G!</h1>
        <p>
          I'm enthusiastic, fast learner, and passionate{" "}
          <strong>Full Stack Web Developer</strong>. Eager to learn new
          technologies and skills and apply them in the real world. I love
          solving problems and finding creative solutions and am always up for
          new challenges
        </p>
      </div>
    </Modal>
  );
};

export default AboutMe;