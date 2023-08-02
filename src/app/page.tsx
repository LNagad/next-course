import { CharacterCard, NavBar, RickBG } from "@/components";
import { getCharacters } from "./information/characters/services";

const App = async () => {
   const characters = await getCharacters({ page: 25 });   
   return (
      <div>
         <header>
            <NavBar activeLink={"/"} />
         </header>

         <main>
            <div className="text-white flex justify-center items-center h-[18rem] ">
               <div className="absolute z-50 text-center">
                  <p className="text-gray-800 lg:text-8xl text-6xl">
              The Rick and Morty API
                  </p>
               </div>
               <RickBG />
            </div>

            <div className="bg-zinc-800 flex sm:flex-col sm:items-center sm:justify-center  md:flex-row md:items-center flex-wrap md:justify-center p-8 lg:gap-4 box-border">
               { characters.map( (character, index) => {
                  if (index > 7) return ;
                  return (<CharacterCard key={ character.id } character={ character} />);
               })}
            </div>
         </main>
      </div>
   );
};

export default App;
