import Head from "next/head";
import { getCharacters } from "./services";
import { Card } from "@/components";
import { Metadata } from "next";

interface pageProps {}

export const metadata: Metadata = {
  title: "Characters",
};

const fetchCharacters = async () => {
  return await getCharacters({});
};

const page = async ({}) => {
  const characters = await fetchCharacters();
  return (
    <>
      <Head>
        <title>Characters</title>
      </Head>
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
};

export default page;
