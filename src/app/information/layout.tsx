"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { NavBar } from "@/components";

interface layoutProps {
  children: React.ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
 
   /* Get the current route */
   const currentRoute = usePathname();

   return (
      <>
         <NavBar activeLink={ currentRoute } />
         <div className="w-full flex flex-row flex-wrap justify-center gap-12 bg-gray-800">
            { children }
         </div>
      </>
   );
};

export default Layout;
