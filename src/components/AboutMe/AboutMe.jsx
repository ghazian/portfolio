import { Modal, Avatar, Frame } from "@react95/core";
import { Drvspace7 } from "@react95/icons";
import ProfilePicture from "../../asset/images/ProfilePicture.jpg";

const AboutMe = ({ isOpen, onClose }) => {
  return isOpen ? (
    <Modal
      width={"500"}
      height={"500"}
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
       h={400}
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
          <Avatar src={ProfilePicture} size={200} circle />
        </div>        
        <h1>Hey I'm Ghaz!</h1>
        <p>
          I'm enthusiastic, fast learner, and passionate
          <strong> Full Stack Web Developer</strong>. Eager to learn new
          technologies and skills and apply them in the real world. I love
          solving problems and finding creative solutions and am always up for
          new challenges
        </p>
        <h1>Soooo... What do I like to do?</h1>
        <p>
          Avid muncher, lover of all foods and destroyer of Medium Rare steaks! Aside from that, 
          I love hiking and been hiking since I was 14 yo!
        </p>
        
      </Frame>
    </Modal>
  ): null;
};

export default AboutMe;
