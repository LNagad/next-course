import { NavBar, RickBG } from "@/components";
import { getCharacters } from "./information/characters/services";
import Image from "next/image";

const App = async () => {
   const data = await getCharacters({ page: 2 });
   
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
               <RickBG
                  fill="rgb(245, 245, 245)"
                  className="z-10 flex justify-center"
               />
            </div>

            <div className="bg-zinc-800 flex sm:flex-col sm:items-center sm:justify-center  md:flex-row md:items-center flex-wrap md:justify-center p-8 lg:gap-4 box-border">
               {data.map((character, index) => {
                  if ( index > 5 ) return;
                  return (
                     <div
                        key={character.id}
                        className="w-full md:flex lg:w-5/12 mb-6 rounded-2xl"
                        style={{ backgroundColor: "rgb(60, 62, 68)" }}
                     >
                        <div className="sm:w-full md:w-4/12 lg:w-6/12">
                           <Image
                              quality={100}
                              objectFit="cover"
                              unoptimized={true}
                              className="w-full rounded-t-2xl md:h-full"
                              src={character.image}
                              alt={character.name}
                              width={60}
                              height={60}
                           />
                        </div>
                        <div className="p-4 sm:w-full">
                           <div>
                              <p className="character-name leading-tight mb-2  tracking-tight text-gray-900 dark:text-white break-all">
                                 {character.name}
                              </p>
                              <div className="flex gap-2 items-center -mt-1 text-white">
                                 <span className="block bg-green-500 w-2 h-2 rounded-full"></span>
                                 <p className="text-sm font-medium ">
                                    {character.status ? "Alive" : "Dead"}
                                 </p>
                      -
                                 <p className="text-sm font-medium ">
                                    {character.species}
                                 </p>
                              </div>
                              <div className="flex flex-col text-white mt-4 font-normal">
                                 <p className="text-[0.975rem] text-zinc-400">
                        Last known location:
                                 </p>
                                 <p className="text-lg">{character.location.name}</p>
                              </div>
                              <div className="flex flex-col text-white mt-4 font-normal">
                                 <p className="text-[0.975rem] text-zinc-400">
                        First seen in:
                                 </p>
                                 <p className="text-lg">{character.location.name}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </main>
      </div>
   );
};

export default App;
