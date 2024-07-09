import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CountryCard } from "components";
import { REST_COUNTRIES_API_ALL_URL } from "consts";
import { Country } from "models";
import { useCountriesStore } from "store";

import { List } from "./CountryList.style";

export function CountryList() {
  const {
    countries,
    filteringQuery,
    regions,
    selectedRegion,
    setCountries,
    setRegions,
  } = useCountriesStore();
  const navigate = useNavigate();
  const [filteredCountries, setFilteredCountries] =
    useState<Country[]>(countries);

  useEffect(() => {
    const controller = new AbortController();
    const { get } = axios;
    const { signal } = controller;

    async function getCountryList() {
      try {
        const { data } = await get<Country[]>(REST_COUNTRIES_API_ALL_URL, {
          signal,
        });
        return data;
      } catch (error) {
        // Fetching data from the JSON file is an error occurs
        const { data } = await get<Country[]>("countries.json", {
          signal,
        });
        return data;
      }
    }

    async function processData() {
      const fetchedCountries = await getCountryList();
      const sortedCountries = fetchedCountries.sort(
        (
          { name: { common: firstCommonName } },
          { name: { common: secondCommonName } }
        ) => firstCommonName.localeCompare(secondCommonName)
      );
      const processedRegions = sortedCountries
        .map(({ region }) => region)
        .sort((region1, region2) =>
          region1.toLowerCase().localeCompare(region2.toLowerCase())
        );
      const fetchedRegions = Array.from(
        new Set(["All regions", ...processedRegions])
      );

      setCountries(sortedCountries);
      setRegions(fetchedRegions);
    }

    if (countries.length === 0) {
      processData();
    }

    return () => controller.abort();
  }, [countries, setCountries, setRegions]);

  useEffect(() => {
    const isAllRegionsSelected = selectedRegion === regions[0];
    const trimmedFilteringQuery = filteringQuery.trim();

    if (trimmedFilteringQuery.length === 0) {
      const items = isAllRegionsSelected
        ? countries
        : countries.filter(({ region }) => region === selectedRegion);

      setFilteredCountries(items);
    } else {
      const items = countries.filter(
        ({ name: { common: commonName }, region }) => {
          const isMatchingName = commonName
            .toLowerCase()
            .includes(trimmedFilteringQuery.toLowerCase());

          if (isAllRegionsSelected) {
            return isMatchingName;
          }

          const isMatchingRegion = region === selectedRegion;
          return isMatchingName && isMatchingRegion;
        }
      );

      setFilteredCountries(items);
    }
  }, [countries, filteringQuery, regions, selectedRegion]);

  return (
    <List>
      {filteredCountries.map((country, index) => {
        const { altSpellings, cca2 } = country;

        function handleClick() {
          const code =
            altSpellings.find(
              (spelling) => spelling === spelling.toUpperCase()
            ) || cca2;
          navigate(`/country/${code}`);
        }

        return (
          <CountryCard key={index} country={country} onClick={handleClick} />
        );
      })}
    </List>
  );
}
