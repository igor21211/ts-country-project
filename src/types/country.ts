import { Region } from "@/types";

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export type Country = {
  name: string;
  nativeName: string;
  flag: string;
  flags: [{ svg: string }, { png: string }];
  region: Region;
  subregion: string;
  capital: string;
  population: number;
  topLevelDomain: string[];
  borders: string[];
  currencies: Currency[];
  languages: Language[];
};

type Info = {
  title: string;
  description: string;
};

export type CountryInfo = {
  img: string;
  name: string;
  info: Info[];
};
