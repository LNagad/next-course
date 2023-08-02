const capitalizeFirstLetter = (str: string) => {
   return str.charAt(0).toUpperCase() + str.slice(1);
};

const CharacterStatus = ({ status }: { status: string | "Alive" | "Dead" | "Unknown" }) => {
   
   const capitalizedStatus = capitalizeFirstLetter(status);

   
   const statusClassMap: Record<string, string> = {
      Alive: "bg-green-500",
      Dead: "bg-red-500",
      Unknown: "bg-gray-500",
   };
  
   const statusClass = statusClassMap[capitalizedStatus] || "bg-gray-500";
  
   return (
      <>
         <span className={`block ${statusClass} w-2.5 h-2.5 rounded-full`}></span>
         <p className="text-[1rem] font-medium ">{capitalizedStatus}</p>
      </>
   );
};
  
export default CharacterStatus;
  