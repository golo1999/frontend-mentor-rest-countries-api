import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { useParams } from "react-router-dom";

import { Button, NoContent } from "components";
import { REST_COUNTRIES_API_ALPHA_URL } from "consts";
import { DARK_THEME, LIGHT_THEME } from "environment";
import { useBackNavigation, useCountryDetails } from "hooks";
import { Country } from "models";
import { useCountriesStore } from "store";

import { Container, Flag, Text } from "./CountryDetailsPage.style";

export function CountryDetailsPage() {
  const handleBackNavigation = useBackNavigation();
  const { countries, theme } = useCountriesStore();
  const { code } = useParams<{ code: string }>();
  const [country, setCountry] = useState<Country | null>();
  const [isLoading, setIsLoading] = useState(true);
  const {
    getProcessedBorderCountries,
    getProcessedCapitals,
    getProcessedCurrencies,
    getProcessedLanguages,
    getProcessedNativeNames,
    getProcessedTopLevelDomains,
  } = useCountryDetails(country);

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
        setCountry(data[0]);
      } catch (error) {
        if (isCancel(error)) {
          console.log({ cancelError: error });
        } else {
          console.log({ error });
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (countries.length === 0) {
      fetchCountryDetails();
    } else {
      const matchedCountry = countries.find(
        ({ altSpellings, cca2, cca3, ccn3, cioc }) =>
          altSpellings.some((spelling) => spelling === code) ||
          cca2 === code ||
          cca3 === code ||
          ccn3 === code ||
          cioc === code
      );

      if (!matchedCountry) {
        fetchCountryDetails();
        return;
      }

      setCountry(matchedCountry);
      setIsLoading(false);
    }

    return () => controller.abort();
  }, [code, countries]);

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

  if (!country || isLoading) {
    return (
      <NoContent
        isLoading={isLoading}
        message={isLoading ? "Loading..." : "The country couldn't be found..."}
      />
    );
  }

  const { borderCountriesTitle, processedBorderCountries } =
    getProcessedBorderCountries();
  const { capitalsTitle, processedCapitals } = getProcessedCapitals();
  const { currenciesTitle, processedCurrencies } = getProcessedCurrencies();
  const { languagesTitle, processedLanguages } = getProcessedLanguages();
  const { nativeNamesTitle, processedNativeNames } = getProcessedNativeNames();
  const { processedTopLevelDomains, topLevelDomainsTitle } =
    getProcessedTopLevelDomains();

  const {
    flags,
    name: { common: commonName },
    population,
    region,
    subregion,
  } = country;

  const buttonFontSize = window.innerWidth >= 1440 ? "1.1vw" : "0.875rem";
  const buttonGap = window.innerWidth >= 1440 ? "0.5vw" : "0.5rem";
  const buttonPadding = window.innerWidth >= 1440 ? "0.5vw 2vw" : "0.5rem 2rem";
  const buttonStartIconSize = window.innerWidth >= 1440 ? "1.1vw" : 20;

  return (
    <Container.Main>
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
      <Container.Content>
        <Flag alt={commonName} src={flags["svg"]} />
        <Container.Details.Outer>
          <Text.Title>{commonName}</Text.Title>
          <Container.Details.Inner.Main>
            <Container.Details.Inner.Column>
              {nativeNamesTitle && (
                <Text.Bolder>
                  {nativeNamesTitle}
                  <Text.Normal>
                    &nbsp;
                    {processedNativeNames}
                  </Text.Normal>
                </Text.Bolder>
              )}
              <Text.Bolder>
                Population:
                <Text.Normal>
                  &nbsp;{population.toLocaleString("en-US")}
                </Text.Normal>
              </Text.Bolder>
              <Text.Bolder>
                Region:
                <Text.Normal>&nbsp;{region}</Text.Normal>
              </Text.Bolder>
              {subregion && (
                <Text.Bolder>
                  Sub Region:
                  <Text.Normal>&nbsp;{subregion}</Text.Normal>
                </Text.Bolder>
              )}
              {capitalsTitle && (
                <Text.Bolder>
                  {capitalsTitle}
                  <Text.Normal>
                    &nbsp;
                    {processedCapitals}
                  </Text.Normal>
                </Text.Bolder>
              )}
            </Container.Details.Inner.Column>
            <Container.Details.Inner.Column>
              {topLevelDomainsTitle && (
                <Text.Bolder>
                  {topLevelDomainsTitle}
                  <Text.Normal>
                    &nbsp;
                    {processedTopLevelDomains}
                  </Text.Normal>
                </Text.Bolder>
              )}
              {currenciesTitle && (
                <Text.Bolder>
                  {currenciesTitle}
                  <Text.Normal>
                    &nbsp;
                    {processedCurrencies}
                  </Text.Normal>
                </Text.Bolder>
              )}
              {languagesTitle && (
                <Text.Bolder>
                  {languagesTitle}
                  <Text.Normal>
                    &nbsp;
                    {processedLanguages}
                  </Text.Normal>
                </Text.Bolder>
              )}
            </Container.Details.Inner.Column>
          </Container.Details.Inner.Main>
          {borderCountriesTitle && (
            <Container.Borders.Main>
              <Text.Bolder>{borderCountriesTitle}</Text.Bolder>
              <Container.Borders.Content>
                {processedBorderCountries}
              </Container.Borders.Content>
            </Container.Borders.Main>
          )}
        </Container.Details.Outer>
      </Container.Content>
    </Container.Main>
  );
}
