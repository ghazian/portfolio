import React from "react";
import { Icon, IconContainer } from "./styles";
import {
  Awschd32402,
  Drvspace7,
  FileText,
  MediaCd,
  Explorer100,
} from "@react95/icons";

const DesktopIcons = ({ onIconClick }) => {
  const icons = [
    { name: "My Resume", icon: FileText },
    { name: "Media", icon: MediaCd },
    { name: "About Me", icon: Drvspace7 },
    { name: "Contact Me", icon: Awschd32402 },
    { name: "Projects", icon: Explorer100 },
  ];

  return (
    <IconContainer>
      {icons.map(({ name, icon: IconComponent }) => (
        <Icon key={name}>
          <IconComponent
            className="pointer"
            variant="32x32_4"
            onClick={() => onIconClick(name)}
          />
          <div>{name}</div>
        </Icon>
      ))}
    </IconContainer>
  );
};

export default DesktopIcons;
