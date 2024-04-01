import { Modal, Frame } from "@react95/core";
import { Notepad1 } from "@react95/icons";
import NotepadContent from "./NotepadContent/NotepadContent";

const Notepad = ({ selectedIcon, onCloseNotepad }) => {
  const handleCloseModal = () => {
    onCloseNotepad();
  };
  const handleButtonClick = (e) => alert(e.currentTarget.value);

  return selectedIcon === "My Resume" ? (
    <Modal
      width={"500"}
      height={"500"}
      icon={<Notepad1 variant="16x16_4" />}
      title="My Resume"
      defaultPosition={{ x: 350, y: 20 }}
      closeModal={handleCloseModal}
      buttons={[
        { value: "Ok", onClick: handleButtonClick },
        { value: "Cancle", onClick: handleButtonClick },
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
        <NotepadContent selectedIcon={selectedIcon} />
      </Frame>
    </Modal>
  ) : null;
};

export default Notepad;
