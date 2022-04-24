import datas from "../data.json";
import { createContext, useContext } from "react";

export interface AppContextList {
  title: string;
  menu: string[];
  works: Works[];
  contact: string;
  copyright: string;
  cv: ArtistName[] | Biograph[];
}
export interface Works {
  title: string;
  imgUrl: string;
  text?: string;
  material: string;
  size: string;
  year: number;
}

type ArtistName = {
  artistName: string;
  name: string;
  bio: string;
};
type Biograph = {
  title: string;
  list: BioList[];
};

type BioList = {
  year: string;
  title: string;
};


export const AppContext = createContext<AppContextList | null>(null);

export function UseApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within appProvider");
  }
  return context;
}
