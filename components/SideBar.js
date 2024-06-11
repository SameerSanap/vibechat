"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRightEndOnRectangleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import { usePathname } from "next/navigation";
import SignOutButton from "./SignnOutButton";
import { Group } from "@mui/icons-material";

function SideBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  const pathName = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    {
      name: "Contacts",
      href: "/contacts",
      icon: <Group className="h-5 w-5 mr-3" />,
    },
    {
      name: "Search Chats",
      href: "/chats",
      icon: <MagnifyingGlassIcon className="h-5 w-5 mr-3 " />,
    },
  ];

  return (
    <nav className="border-r-4 border-white bg-indigo-400 text-white rounded-2xl h-[400px] mt-20 ml-4">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="text-lg font-semibold">Menu</div>
        <button
          className="block text-emerald-600 hover:text-emerald-400 focus:text-emerald-400 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <ul className="flex flex-col gap-2 h-full text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`flex items-center py-3 px-5 hover:bg-slate-400 hover:text-slate-100 transition-colors font-semibold pl-2 ${
                  pathName === link.href ? "bg-slate-600 rounded-r-3xl" : ""
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
          <div className="mt-4 mb-4 px-2  hover:cursor-pointer flex ">
            <ArrowRightEndOnRectangleIcon className="h-5 w-5 mr-3 " />
            <SignOutButton />
          </div>
        </ul>
      )}
    </nav>
  );
}

export default SideBar;
