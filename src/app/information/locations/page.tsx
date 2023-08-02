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
    <>
      {locations.map((location) => {
        return <Card key={location.id} data={location} />;
      })}
    </>
  );
};

export default page;
