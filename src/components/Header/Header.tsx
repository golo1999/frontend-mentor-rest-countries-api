import { useCountriesStore } from "store";

import { Container, Icon, Text } from "./Header.style";

export function Header() {
  const { theme, changeTheme } = useCountriesStore();

  const themeIconSize = window.innerWidth >= 1440 ? "1vw" : 16;
  const themeText = theme === "DARK" ? "Dark Mode" : "Light Mode";

  return (
    <Container.Main>
      <Text.Title>Where in the world?</Text.Title>
      <Container.Theme onClick={changeTheme}>
        <Icon size={themeIconSize} />
        <Text.Theme>{themeText}</Text.Theme>
      </Container.Theme>
    </Container.Main>
  );
}
