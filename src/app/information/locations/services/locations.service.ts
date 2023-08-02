import { Locations } from "../models";

export const getLocations = async (id?: string): Promise<Locations[]> => {
  const url = "https://rickandmortyapi.com/api/location";
  //    const urlWithId = `${url}/${id}`;
  const resp = await fetch(url);
  const data = await resp.json();

  return data.results;
};
