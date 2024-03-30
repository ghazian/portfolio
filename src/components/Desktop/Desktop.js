import DesktopIcons from "../DesktopIcons/DesktopIcons";
import Notepad from "../Notepad/Notepad";

const Desktop = ({ selectedIcon, onIconClick }) => {
  return (
    <>
      <DesktopIcons onIconClick={onIconClick} />
      <Notepad selectedIcon={selectedIcon} />
    </>
  );
};

export default Desktop;
