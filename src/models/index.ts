export type Country = {
  altSpellings: string[];
  borders: string[] | null;
  capital: string[] | null;
  cca2: string;
  cca3: string;
  ccn3: string | null;
  cioc: string | null;
  continents: string[];
  currencies: Record<string, Currency> | null;
  flags: Record<string, string>;
  languages: Record<string, string> | null;
  name: Name;
  population: number;
  region: string;
  subregion: string | null;
  tld: string[] | null;
};

interface Currency {
  name: string;
  symbol: string | null;
}

interface Name {
  common: string;
  nativeName: Record<string, Name> | null;
  official: string;
}

export type Theme = "DARK" | "LIGHT";
