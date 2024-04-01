import React, { useState, useEffect } from "react";
import DesktopIcons from "../DesktopIcons/DesktopIcons";
import AboutMe from "../AboutMe/AboutMe";
import Notepad from "../Notepad/Notepad";

const Desktop = () => {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(true);
  const [isNotepadOpen, setIsNotepadOpen] = useState(false);

  const handleIconClick = (componentName) => {
    if (componentName === "About Me") {
      setIsAboutMeOpen(true);
    } else if (componentName === "My Resume") {
      setIsNotepadOpen(true);
    }
  };

  const handleAboutMeClose = () => {
    setIsAboutMeOpen(false);
  };

  const handleNotepadClose = () => {
    setIsNotepadOpen(false);
  };

  useEffect(() => {
    setIsAboutMeOpen(true);
  }, []);

  return (
    <>
      <DesktopIcons onIconClick={handleIconClick} />
      {isAboutMeOpen && <AboutMe onClose={handleAboutMeClose} />}
      {isNotepadOpen && <Notepad onClose={handleNotepadClose} />}
    </>
  );
};

export default Desktop;
