import { useCallback } from "react";

import { CountryList, Dropdown, SearchBar } from "components";
import { useCountriesStore } from "store";

import { Container } from "./HomePage.style";

export function HomePage() {
  const {
    countries,
    filteringQuery,
    regions,
    selectedRegion,
    setFilteringQuery,
    setSelectedRegion,
  } = useCountriesStore();

  const handleDropdownItemSelected = useCallback(
    (region: string) => {
      if (region !== selectedRegion) {
        setSelectedRegion(region);
      }
    },
    [selectedRegion, setSelectedRegion]
  );

  return (
    <Container.Main>
      {countries.length > 0 && (
        <Container.Filtering>
          <SearchBar
            placeholder="Search for a country..."
            text={filteringQuery}
            onEndIconClick={() => setFilteringQuery("")}
            onTextChange={setFilteringQuery}
          />
          <Dropdown
            items={regions}
            selectedItem={selectedRegion}
            onItemSelected={handleDropdownItemSelected}
          />
        </Container.Filtering>
      )}
      <Container.List>
        <CountryList />
      </Container.List>
    </Container.Main>
  );
}
