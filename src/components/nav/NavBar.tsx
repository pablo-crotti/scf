"use client";
import { usePathname } from "next/navigation";

import NavLink from "./NavLink";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="w-full px-4 py-4 border-b bg-zinc-100 dark:bg-zinc-950 border-zinc-300 dark:border-zinc-800">
      <div className="flex flex-wrap items-center mx-auto">
        <div className="w-full flex justify-end">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-200 focus:outline-none dark:text-gray-400 dark:hover:bg-zinc-900 duration-300"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="hidden w-full md:block md:w-auto " id="navbar-default">
          <ul className="font-medium flex flex-col gap-2 p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <NavLink path="/" isActive={pathname == "/"}>
                Overvew
              </NavLink>
            </li>
            <li>
              <NavLink
                path="/transactions"
                isActive={pathname == "/transactions"}
              >
                Transactions
              </NavLink>
            </li>
            <li>
              <NavLink path="/players" isActive={pathname == "/players"}>
                Players
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
