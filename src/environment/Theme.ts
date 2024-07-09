import { DefaultTheme } from "styled-components";

export const DARK_THEME: DefaultTheme = {
  colors: {
    background: {
      primary: "#202D36",
      secondary: "#2B3743",
      tertiary: "#384957",
    },
    boxShadow: { primary: "#181F25", secondary: "#080A0C" },
    text: "#FFFFFF",
  },
};

export const LIGHT_THEME: DefaultTheme = {
  colors: {
    background: {
      primary: "#FAFAFA",
      secondary: "#FFFFFF",
      tertiary: "#DCE0D9",
    },
    boxShadow: { primary: "#C0C0C0", secondary: "#A9A9A9" },
    text: "#000000",
  },
};
