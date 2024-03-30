import { GlobalStyle, ThemeProvider, TaskBar } from "@react95/core";
import { createGlobalStyle } from "styled-components";
import { Container } from "./styles";
import DesktopIcons from "../DesktopIcons/DesktopIcons";

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;

const Desktop = () => {
  return (
    <Container>
      <ThemeProvider>
        <GlobalStyle />
        <BodyFontSizeOverride />
        <DesktopIcons />
        <TaskBar />
      </ThemeProvider>
    </Container>
  );
};

export default Desktop;
