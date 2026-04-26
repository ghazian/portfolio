import type { ReactElement } from "react";
import { IconContainer, Icon } from "./styles";
import {
  Awschd32402,
  Drvspace7,
  FileText,
  MediaCd,
  Explorer100,
} from "@react95/icons";

interface IconEntry {
  name: string;
  renderIcon: (onClick: () => void) => ReactElement;
}

interface DesktopIconsProps {
  onIconClick: (name: string) => void;
}

const icons: IconEntry[] = [
  {
    name: "My Resume",
    renderIcon: (onClick) => (
      <FileText className="pointer" variant="32x32_4" onClick={onClick} />
    ),
  },
  {
    name: "Media",
    renderIcon: (onClick) => (
      <MediaCd className="pointer" variant="32x32_4" onClick={onClick} />
    ),
  },
  {
    name: "About Me",
    renderIcon: (onClick) => (
      <Drvspace7 className="pointer" variant="32x32_4" onClick={onClick} />
    ),
  },
  {
    name: "Contact Me",
    renderIcon: (onClick) => (
      <Awschd32402 className="pointer" variant="32x32_4" onClick={onClick} />
    ),
  },
  {
    name: "Projects",
    renderIcon: (onClick) => (
      <Explorer100 className="pointer" variant="32x32_4" onClick={onClick} />
    ),
  },
];

const DesktopIcons = ({ onIconClick }: DesktopIconsProps) => {
  return (
    <IconContainer>
      {icons.map(({ name, renderIcon }) => (
        <Icon key={name}>
          {renderIcon(() => onIconClick(name))}
          <div>{name}</div>
        </Icon>
      ))}
    </IconContainer>
  );
};

export default DesktopIcons;
