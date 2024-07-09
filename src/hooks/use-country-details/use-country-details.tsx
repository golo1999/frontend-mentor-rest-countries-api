import { useNavigate } from "react-router-dom";

import { BorderCountry } from "components";
import { Country } from "models";

import {
  type GetProcessedBorderCountriesResult,
  type GetProcessedCapitalsResult,
  type GetProcessedCurrenciesResult,
  type GetProcessedLanguagesResult,
  type GetProcessedNativeNamesResult,
  type GetProcessedTopLevelDomainsResult,
} from "./use-country-details.types";

export function useCountryDetails(country: Country | null | undefined) {
  const { borders, capital, currencies, languages, name, tld } = { ...country };
  const { nativeName } = { ...name };

  const navigate = useNavigate();

  function getProcessedBorderCountries(): GetProcessedBorderCountriesResult {
    if (!borders) {
      return { borderCountriesTitle: null, processedBorderCountries: [] };
    }

    const title = borders.length > 1 ? "Border Countries:" : "Border Country:";
    const processedBorderCountries = borders
      .sort((border1, border2) =>
        border1.toLowerCase().localeCompare(border2.toLowerCase())
      )
      .map((code, index) => {
        return (
          <BorderCountry
            key={index}
            code={code}
            onClick={() => navigate(`/country/${code}`)}
          />
        );
      });

    return { borderCountriesTitle: title, processedBorderCountries };
  }

  function getProcessedCapitals(): GetProcessedCapitalsResult {
    if (!capital) {
      return { capitalsTitle: null, processedCapitals: [] };
    }

    const title = capital.length > 1 ? "Capitals:" : "Capital:";
    const processedCapitals = capital
      .sort((capital1, capital2) =>
        capital1.toLowerCase().localeCompare(capital2.toLowerCase())
      )
      .map((capital, index, items) =>
        index < items.length - 1 ? `${capital}, ` : capital
      );

    return { capitalsTitle: title, processedCapitals };
  }

  function getProcessedCurrencies(): GetProcessedCurrenciesResult {
    if (!currencies) {
      return { currenciesTitle: null, processedCurrencies: [] };
    }

    const title =
      Object.keys(currencies).length > 1 ? "Currencies:" : "Currency:";
    const processedCurrencies = Object.values(currencies)
      .sort((currency1, currency2) =>
        currency1.name.toLowerCase().localeCompare(currency2.name.toLowerCase())
      )
      .map((currency, index, items) =>
        index < items.length - 1 ? `${currency.name}, ` : currency.name
      );

    return { currenciesTitle: title, processedCurrencies };
  }

  function getProcessedLanguages(): GetProcessedLanguagesResult {
    if (!languages) {
      return { languagesTitle: null, processedLanguages: [] };
    }

    const title =
      Object.keys(languages).length > 1 ? "Languages:" : "Language:";
    const processedLanguages = Object.values(languages)
      .sort((language1, language2) =>
        language1.toLowerCase().localeCompare(language2.toLowerCase())
      )
      .map((language, index, items) =>
        index < items.length - 1 ? `${language}, ` : language
      );

    return { languagesTitle: title, processedLanguages };
  }

  function getProcessedNativeNames(): GetProcessedNativeNamesResult {
    if (!nativeName) {
      return { nativeNamesTitle: null, processedNativeNames: [] };
    }

    const title =
      Object.keys(nativeName).length > 1 ? "Native Names:" : "Native Name:";
    const processedNativeNames = Array.from(
      new Set(Object.values(nativeName).map(({ common }) => common))
    )
      .sort((name1, name2) =>
        name1.toLowerCase().localeCompare(name2.toLowerCase())
      )
      .map((name, index, items) =>
        index < items.length - 1 ? `${name}, ` : name
      );

    return { nativeNamesTitle: title, processedNativeNames };
  }

  function getProcessedTopLevelDomains(): GetProcessedTopLevelDomainsResult {
    if (!tld) {
      return { processedTopLevelDomains: [], topLevelDomainsTitle: null };
    }

    const title = tld.length > 1 ? "Top Level Domains:" : "Top Level Domain:";
    const processedTopLevelDomains = tld
      .sort((domain1, domain2) =>
        domain1.toLowerCase().localeCompare(domain2.toLowerCase())
      )
      .map((domain, index, items) =>
        index < items.length - 1 ? `${domain}, ` : domain
      );

    return { processedTopLevelDomains, topLevelDomainsTitle: title };
  }

  return {
    getProcessedBorderCountries,
    getProcessedCapitals,
    getProcessedCurrencies,
    getProcessedLanguages,
    getProcessedNativeNames,
    getProcessedTopLevelDomains,
  };
}
