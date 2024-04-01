import { Modal, Frame } from "@react95/core";
import { Notepad1 } from "@react95/icons";

const Notepad = ({ isOpen ,onClose }) => {
  return isOpen ? (
    <Modal
      width={"500"}
      height={"500"}
      icon={<Notepad1 variant="16x16_4" />}
      title="My Resume"
      defaultPosition={{ x: 250, y: 20 }}
      closeModal={onClose}
      buttons={[
        { value: "Ok", onClick: onClose },
        { value: "Cancel", onClick: onClose },
      ]}
      menu={[
        { name: "File", list: [] },
        { name: "Edit", list: [] },
      ]}
    >
      <Frame
        w={"100%"}
        h={400}
        boxShadow="in"
        bg="white"
        padding="0px 5px"
        style={{ overflowY: "auto" }}
      >
        <div>
          <h1>My Resume!</h1>
          This is the content for My Resume.
        </div>
      </Frame>
    </Modal>
  ): null;
};

export default Notepad;
