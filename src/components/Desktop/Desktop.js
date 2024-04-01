import { useState } from "react";
import Notepad from "../Notepad/Notepad";
import { Icon, IconContainer } from "./styles";
import { Awschd32402, Drvspace7, FileText, MediaCd } from "@react95/icons";
import AboutMe from "../AboutMe/AboutMe";

const Desktop = () => {
  const [selectedIcon, setSelectedIcon] = useState("");

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const handleClose = () => {
    setSelectedIcon(null);
  };

  return (
    <>
      <IconContainer>
        <Icon onClick={() => handleIconClick("My Resume")}>
          <FileText className="pointer" variant="32x32_4" />
          <div>My Resume</div>
        </Icon>
        <Icon onClick={() => handleIconClick("Media")}>
          <MediaCd className="pointer" variant="32x32_4" />
          <div>Media</div>
        </Icon>
        <Icon onClick={() => handleIconClick("About Me")}>
          <Drvspace7 className="pointer" variant="32x32_4" />
          <div>About Me</div>
        </Icon>
        <Icon onClick={() => handleIconClick("Contact Me")}>
          <Awschd32402 className="pointer" variant="32x32_4" />
          <div>Contact me</div>
        </Icon>
      </IconContainer>
      {selectedIcon === "My Resume" && (
        <Notepad selectedIcon={selectedIcon} onCloseNotepad={handleClose} />
      )}
      {selectedIcon === "About Me" && <AboutMe onClose={handleClose} />}
    </>
  );
};

export default Desktop;
