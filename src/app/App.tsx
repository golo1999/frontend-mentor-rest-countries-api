import { ThemeProvider } from "styled-components";

import { DARK_THEME, LIGHT_THEME } from "environment";
import { Router } from "router";
import { useCountriesStore } from "store";

export function App() {
  const { theme } = useCountriesStore();
  const currentTheme = theme === "LIGHT" ? LIGHT_THEME : DARK_THEME;

  return (
    <ThemeProvider theme={currentTheme}>
      <Router />
    </ThemeProvider>
  );
}
