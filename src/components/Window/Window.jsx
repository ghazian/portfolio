import { GlobalStyle, ThemeProvider } from "@react95/core";
import { createGlobalStyle } from "styled-components";
import Desktop from "../Desktop/Desktop";
import { Analytics } from "@vercel/analytics/react";
import Taskbar from "../TaskBar/TaskBar";

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;

const Window = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <BodyFontSizeOverride />
      <Desktop />
      <Taskbar />
      <Analytics />
    </ThemeProvider>
  );
};

export default Window;
