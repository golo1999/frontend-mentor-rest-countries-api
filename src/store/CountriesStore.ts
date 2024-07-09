import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Country, Theme } from "models";

type StoreState = {
  countries: Country[];
  filteringQuery: string;
  regions: string[];
  selectedRegion: string;
  theme: Theme;
  changeTheme: () => void;
  setFilteringQuery: (query: string) => void;
  setCountries: (countries: Country[]) => void;
  setRegions: (regions: string[]) => void;
  setSelectedRegion: (region: string) => void;
};

export const useCountriesStore = create<StoreState>()(
  persist(
    (set) => ({
      countries: [],
      filteringQuery: "",
      regions: ["All regions"],
      selectedRegion: "All regions",
      theme: "LIGHT",
      changeTheme() {
        const { theme } = useCountriesStore.getState();
        const newTheme: Theme = theme === "DARK" ? "LIGHT" : "DARK";

        set((state) => ({ ...state, theme: newTheme }));
      },
      setFilteringQuery(newQuery) {
        const { filteringQuery } = useCountriesStore.getState();

        if (newQuery !== filteringQuery) {
          set((state) => ({ ...state, filteringQuery: newQuery }));
        }
      },
      setCountries(countries) {
        set((state) => ({ ...state, countries }));
      },
      setRegions(regions) {
        set((state) => ({ ...state, regions }));
      },
      setSelectedRegion(newRegion) {
        const { regions, selectedRegion } = useCountriesStore.getState();

        if (
          newRegion !== selectedRegion &&
          regions.some((region) => region === newRegion)
        ) {
          set((state) => ({ ...state, selectedRegion: newRegion }));
        }
      },
    }),
    {
      name: "rest-countries-api-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
