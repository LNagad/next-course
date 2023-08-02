import { Routes } from "@/app/models";
import Link from "next/link";
import { NavBarProps } from "./NavBar";

const NavLink = ({ activeLink }: NavBarProps) => {
   const pathNames = [
      {
         path: Routes.HOME,
         name: "Home",
      },
      {
         path: Routes.CHARACTERS,
         name: "Characters",
      },
      {
         path: Routes.LOCATIONS,
         name: "Locations",
      },
   ];

   return (
      <>
         {pathNames.map((link) => {
            const isActive = activeLink === link.path;

            const linkClass = isActive
               ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
               : "block py-2 pl-3 pr-4  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";

            return (
               <Link
                  key={link.path}
                  href={link.path}
                  className={`font-bold text-[1.18rem] ${linkClass}`}
               >
                  {link.name}
               </Link>
            );
         })}
      </>
   );
};

export default NavLink;
