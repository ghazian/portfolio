import "@react95/core/GlobalStyle";
import "@react95/core/themes/win95.css";
import { createGlobalStyle } from "styled-components";
import Desktop from "../Desktop/Desktop";
import { Analytics } from "@vercel/analytics/react";
import Taskbar from "../TaskBar/TaskBar";

const BodyFontSizeOverride = createGlobalStyle`
  body {
    font-size: 15px;
    background-color: rgb(28, 168, 168);
  }
`;

const Window = () => {
  return (
    <>
      <BodyFontSizeOverride />
      <Desktop />
      <Taskbar />
      <Analytics />
    </>
  );
};

export default Window;
