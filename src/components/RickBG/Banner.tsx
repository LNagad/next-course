import { RickBG } from "..";

const Banner = () => {
   return (
      <article className="text-white flex justify-center items-center h-[18rem] ">
         <div className="absolute z-50 text-center">
            <p className="text-gray-800 lg:text-8xl text-6xl">The Rick and Morty API</p>
         </div>
         <RickBG />
      </article>
   );
};

export default Banner;