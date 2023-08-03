import { Banner, CharacterCard, NavBar, RickBG } from "@/components";
import { getCharacters } from "./information/characters/services";

const App = async () => {
   const characters = await getCharacters({ page: 25 });   
   return (
      <>
         <NavBar activeLink={"/"} />

         <main>
            <Banner />

            <article className="container-character">
               { characters.map( (character, index) => {
                  if (index > 7) return ;
                  return (<CharacterCard key={ character.id } character={ character} />);
               })}
            </article>
         </main>
      </>
   );
};

export default App;
