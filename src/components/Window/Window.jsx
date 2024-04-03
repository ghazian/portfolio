import { GlobalStyle, ThemeProvider } from "@react95/core";
import { createGlobalStyle } from "styled-components";
import { TaskBar } from "@react95/core";
import Desktop from "../Desktop/Desktop";
import { Analytics } from "@vercel/analytics/react";

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
      <TaskBar />
      <Analytics />
    </ThemeProvider>
  );
};

export default Window;
