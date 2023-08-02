"use client";

import { NavBar } from "@/components";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Routes } from "../models";
interface layoutProps {
  children: React.ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
   {
      /* Get the current route */
   }
   let currentRoute = usePathname();

   return (
      <>
         <NavBar activeLink={currentRoute} />
         <div className="w-full flex flex-row flex-wrap justify-center gap-12 p-4 bg-gray-800">
            {children}
         </div>
      </>
   );
};

export default Layout;
