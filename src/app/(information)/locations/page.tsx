import { Metadata } from "next";
import Image from "next/image";
import { getLocations } from "./services";
import { Card } from "@/components";
import { genericBlur } from "@/models";

export const metadata: Metadata = {
   title: "Locations",
};

import { Suspense } from "react";

interface pageProps {}

const fetchLocations = async () => {
   return await getLocations();
};

const page = async ({}) => {
   const locations = await fetchLocations();
   return (
      <div className="block">
         <div className="ring-2 ring-white flex flex-col md:flex-row md:flex-wrap md:justify-evenly p-8 gap-4">
            { locations.map((location) => {
               return <Card key={location.id} data={location} />;
            })}
         </div>
       
         <div className="w-100 flex justify-center">
            <div className="relative w-[20rem] h-[20rem]">
               <Suspense fallback={<div>Loading..</div>}>
                  <Image 
                     fill
                     className="object-cover"
                     // src="/images/gojo.jpg"
                     src={ "https://i.pinimg.com/originals/d2/8e/99/d28e99a809f6eb5aa4a1fe93ce37aa61.png" }
                     priority
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     blurDataURL={ genericBlur }
                     placeholder="blur"
                     alt="Gojo image" 
                  />
               </Suspense>
            </div>
         </div>
      </div>
   );
};

export default page;
