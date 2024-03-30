import { GlobalStyle, ThemeProvider, TaskBar } from "@react95/core";
import { createGlobalStyle } from "styled-components";
import { Container } from "./styles";
import Desktop from "../Desktop/Desktop";
import { useState } from "react";

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;

const Window = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  return (
    <Container>
      <ThemeProvider>
        <GlobalStyle />
        <BodyFontSizeOverride />
        <Desktop selectedIcon={selectedIcon} onIconClick={handleIconClick} />
        <TaskBar />
      </ThemeProvider>
    </Container>
  );
};

export default Window;
