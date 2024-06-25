import React, { useEffect, useState } from "react";
import utilStyles from "../styles/theme.util.module.css";
import { useTheme, ThemeProvider } from "next-themes";
import userInfo from "../public/user/userInfo.json";

export default function FaceImage() {
  var userInfoJSON = JSON.parse(JSON.stringify(userInfo));
  return (
    <ThemeProvider>
      <img
        src={userInfoJSON["mainFaceLink"]}
        className={`${utilStyles.mainFace} ${utilStyles.imageRendering} ${utilStyles.mainFaceBorder}`}
        alt={userInfoJSON["mainFace"]}
      ></img>
    </ThemeProvider>
  );
}
