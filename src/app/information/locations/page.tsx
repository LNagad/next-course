import { Metadata } from "next";
import { getLocations } from "./services";
import { Card } from "@/components";

export const metadata: Metadata = {
   title: "Locations",
};

interface pageProps {}

const fetchLocations = async () => {
   return await getLocations();
};

const page = async ({}) => {
   const locations = await fetchLocations();
   return (
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly p-8 gap-4">
         {locations.map((location) => {
            return <Card key={location.id} data={location} />;
         })}
      </div>
   );
};

export default page;
