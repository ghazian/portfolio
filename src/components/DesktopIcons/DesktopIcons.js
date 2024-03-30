import { MediaCd, Drvspace7, FileText, Awschd32402 } from "@react95/icons";
import { Icon, IconContainer } from "./styles";

const DesktopIcons = ({ onIconClick }) => {
  const handleIconClick = (iconName) => {
    onIconClick(iconName);
  };
  return (
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
  );
};

export default DesktopIcons;
