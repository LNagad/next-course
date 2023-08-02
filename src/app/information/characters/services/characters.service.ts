import { ApiResponse, Character } from "../models";

interface Props {
  page?: number;
}

export const getCharacters = async ({ page }: Props): Promise<Character[]> => {
   const url = `https://rickandmortyapi.com/api/character${
      page ? `/?page=${page}` : ""
   }`;
   //    const urlWithId = `${url}/${id}`;
   const resp = await fetch(url);
   const data: ApiResponse = await resp.json();

   return data.results;
};
