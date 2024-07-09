import { useMemo } from "react";
import { HiMiniArrowLongLeft } from "react-icons/hi2";

import { Button } from "components";
import { DARK_THEME, LIGHT_THEME } from "environment";
import { useBackNavigation } from "hooks";
import { useCountriesStore } from "store";

import { Container, Text } from "./NoContent.style";

interface Props {
  isLoading?: boolean;
  message: string;
}

export function NoContent({ isLoading = false, message }: Props) {
  const handleBackNavigation = useBackNavigation();
  const { theme } = useCountriesStore();

  const currentTheme = useMemo(
    () => (theme === "DARK" ? DARK_THEME : LIGHT_THEME),
    [theme]
  );

  const backButtonBackgroundColor: string = useMemo(
    () => currentTheme.colors.background.secondary,
    [currentTheme]
  );
  const backButtonBoxShadow = useMemo(
    () => `0 0 0.5rem ${currentTheme.colors.boxShadow.primary}`,
    [currentTheme]
  );
  const backButtonBoxShadowHover = useMemo(
    () => `0 0 0.75rem ${currentTheme.colors.boxShadow.secondary}`,
    [currentTheme]
  );
  const backButtonColor: string = useMemo(
    () => currentTheme.colors.text,
    [currentTheme]
  );

  const buttonFontSize = window.innerWidth >= 1440 ? "1.1vw" : "0.875rem";
  const buttonGap = window.innerWidth >= 1440 ? "0.5vw" : "0.5rem";
  const buttonPadding = window.innerWidth >= 1440 ? "0.5vw 2vw" : "0.5rem 2rem";
  const buttonStartIconSize = window.innerWidth >= 1440 ? "1.1vw" : 20;

  return (
    <Container.Main>
      {!isLoading && (
        <Button
          $alignSelf="flex-start"
          $backgroundColor={backButtonBackgroundColor}
          $boxShadow={backButtonBoxShadow}
          $boxShadowHover={backButtonBoxShadowHover}
          $color={backButtonColor}
          $fontSize={buttonFontSize}
          $gap={buttonGap}
          $padding={buttonPadding}
          startIcon={<HiMiniArrowLongLeft size={buttonStartIconSize} />}
          text="Back"
          onClick={handleBackNavigation}
        />
      )}
      <Text.NoData>{message}</Text.NoData>
    </Container.Main>
  );
}
