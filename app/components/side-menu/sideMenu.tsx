"use client";
import { useState } from "react";
import { SideMenuCollapsed } from "../sideMenu/sideMenuCollapsed";
import { SideMenuStanded } from "../sideMenu/sideMenuStanded";

export const SideMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  return (
    <div className=" items-center justify-center ">
      <button
        id="toggleSidebar"
        aria-expanded="true"
        aria-controls="sidebar"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className=" p-6  text-gray-600 rounded cursor-pointer  hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 "
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          {" "}
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h14M1 6h14M1 11h7"
          />{" "}
        </svg>
      </button>
      {isCollapsed ? <SideMenuCollapsed /> : <SideMenuStanded />}
    </div>
  );
};
