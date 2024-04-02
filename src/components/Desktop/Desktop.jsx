import React, { useState, useEffect, useCallback } from "react";
import DesktopIcons from "../DesktopIcons/DesktopIcons";
import AboutMe from "../AboutMe/AboutMe";
import Notepad from "../Notepad/Notepad";
import ContactMe from "../ContactMe/ContactMe";
import Media from "../Media/Media";
import Projects from "../Projects/Projects";

const Desktop = () => {
  const [openComponents, setOpenComponents] = useState([]);

  const handleIconClick = useCallback(
    (componentName) => {
      if (!openComponents.includes(componentName)) {
        setOpenComponents([...openComponents, componentName]);
      }
    },
    [openComponents]
  );

  const handleClose = useCallback(
    (componentName) => {
      setOpenComponents(
        openComponents.filter((name) => name !== componentName)
      );
    },
    [openComponents]
  );

  useEffect(() => {
    setOpenComponents(["About Me"]);
  }, []);

  return (
    <>
      <DesktopIcons onIconClick={handleIconClick} />
      <ContactMe
        isOpen={openComponents.includes("Contact Me")}
        onClose={() => handleClose("Contact Me")}
      />
      <AboutMe
        isOpen={openComponents.includes("About Me")}
        onClose={() => handleClose("About Me")}
      />
      <Notepad
        isOpen={openComponents.includes("My Resume")}
        onClose={() => handleClose("My Resume")}
      />
      <Media
        isOpen={openComponents.includes("Media")}
        onClose={() => handleClose("Media")}
      />
      <Projects
        isOpen={openComponents.includes("Projects")}
        onClose={() => handleClose("Projects")}
      />
    </>
  );
};

export default Desktop;
