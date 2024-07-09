import axios from "axios";
import { useEffect, useMemo, useState } from "react";

import { Button } from "components";
import { REST_COUNTRIES_API_ALPHA_URL } from "consts";
import { DARK_THEME, LIGHT_THEME } from "environment";
import { Country } from "models";
import { useCountriesStore } from "store";

interface Props {
  code: string;
  onClick: () => void;
}

export function BorderCountry({ code, onClick }: Props) {
  const { countries, theme } = useCountriesStore();
  // Undefined if loading | null if an error occurs
  const [borderCountry, setBorderCountry] = useState<Country | null>();

  useEffect(() => {
    const controller = new AbortController();
    const { get, isCancel } = axios;
    const { signal } = controller;

    async function fetchCountryDetails() {
      try {
        const { data } = await get<Country[]>(
          `${REST_COUNTRIES_API_ALPHA_URL}/${code}`,
          {
            signal,
          }
        );
        setBorderCountry(data[0]);
      } catch (error) {
        if (isCancel(error)) {
          console.log({ cancelError: error });
        } else {
          console.log({ error });
        }

        setBorderCountry(null);
      }
    }

    if (countries.length === 0) {
      fetchCountryDetails();
    } else {
      const matchedBorderCountry = countries.find(
        ({ altSpellings, cca2, cca3, ccn3, cioc }) =>
          altSpellings.some((spelling) => spelling === code) ||
          cca2 === code ||
          cca3 === code ||
          ccn3 === code ||
          cioc === code
      );

      if (!matchedBorderCountry) {
        fetchCountryDetails();
        return;
      }

      setBorderCountry(matchedBorderCountry);
    }

    return () => controller.abort();
  }, [code, countries]);

  const currentTheme = useMemo(
    () => (theme === "DARK" ? DARK_THEME : LIGHT_THEME),
    [theme]
  );

  const backgroundColor: string = useMemo(
    () => currentTheme.colors.background.secondary,
    [currentTheme]
  );
  const backgroundColorHover: string = useMemo(
    () => currentTheme.colors.background.tertiary,
    [currentTheme]
  );
  const boxShadow = useMemo(
    () => `0 0 0.5rem ${currentTheme.colors.boxShadow.primary}`,
    [currentTheme]
  );
  const color: string = useMemo(() => currentTheme.colors.text, [currentTheme]);
  const fontSize = window.innerWidth >= 1440 ? "1.1vw" : "0.75rem";
  const padding = window.innerWidth >= 1440 ? "0.5vw 1.5vw" : "0.5rem 1.5rem";

  if (borderCountry === null) {
    return <></>;
  }

  const text =
    typeof borderCountry === "undefined"
      ? "Loading..."
      : borderCountry.name.common;

  return (
    <Button
      $backgroundColor={backgroundColor}
      $backgroundColorHover={backgroundColorHover}
      $boxShadow={boxShadow}
      $color={color}
      $fontSize={fontSize}
      $padding={padding}
      text={text}
      onClick={onClick}
    />
  );
}
