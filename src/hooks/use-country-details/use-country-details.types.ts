export type GetProcessedBorderCountriesResult = {
  borderCountriesTitle: string | null;
  processedBorderCountries: JSX.Element[];
};

export type GetProcessedCapitalsResult = {
  capitalsTitle: string | null;
  processedCapitals: string[];
};

export type GetProcessedCurrenciesResult = {
  currenciesTitle: string | null;
  processedCurrencies: string[];
};

export type GetProcessedLanguagesResult = {
  languagesTitle: string | null;
  processedLanguages: string[];
};

export type GetProcessedNativeNamesResult = {
  nativeNamesTitle: string | null;
  processedNativeNames: string[];
};

export type GetProcessedTopLevelDomainsResult = {
  processedTopLevelDomains: string[];
  topLevelDomainsTitle: string | null;
};
