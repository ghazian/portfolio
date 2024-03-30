import { MediaCd, Drvspace7, FileText, Awschd32402 } from "@react95/icons";
import { Icon, IconContainer } from "./styles";

const DesktopIcons = () => {
  return (
    <IconContainer>
      <Icon>
        <FileText className="pointer" variant="32x32_4" />
        <div>My Resume</div>
      </Icon>
      <Icon>
        <MediaCd className="pointer" variant="32x32_4" />
        <div>Media</div>
      </Icon>
      <Icon>
        <Drvspace7 className="pointer" variant="32x32_4" />
        <div>About Me</div>
      </Icon>
      <Icon>
        <Awschd32402 className="pointer" variant="32x32_4" />
        <div>Contact me</div>
      </Icon>
    </IconContainer>
  );
};

export default DesktopIcons;
