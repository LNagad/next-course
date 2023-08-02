import { Metadata } from "next";
import { getCharacters } from "./services";
import { CharacterCard } from "@/components";


export const metadata: Metadata = {
   title: "Characters",
};

const fetchCharacters = async () => {
   return await getCharacters({});
};

const page = async ({}) => {
   const characters = await fetchCharacters();
   
   return (
      <div className="bg-zinc-800 flex sm:flex-col sm:items-center sm:justify-center  md:flex-row md:items-center flex-wrap md:justify-center p-8 lg:gap-4 box-border">
         { characters.map( character => (<CharacterCard key={ character.id } character={ character} />))}
      </div>
   );
};

export default page;
