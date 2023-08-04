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
      <div className="container-character">
         { characters.map( character => (<CharacterCard key={ character.id } character={ character} />))}
      </div> 
   );
};

export default page;
