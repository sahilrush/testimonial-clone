"use client"
import Link from "next/link";

import {Home,Tag,Info} from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper";

const Sidebar = () => {
  return (
    // <MaxWidthWrapper className="max-w-xs">
      <div className="sidebar h-screen text-white">
        <ul className="space-y-6 p-6">
          <li className="flex items-center space-x-3">
            <Home className="h-6 w-6" />
            <Link href="/dashboard">
              Dashboard
            </Link>
          </li>

          <li className="flex items-center space-x-3">
            <Tag className="h-6 w-6" />
            <Link href="/price">
              Pricing
            </Link>
          </li>

          <li className="flex items-center space-x-3">
            <Info className="h-6 w-6" />
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    // </MaxWidthWrapper>
  );
};

export default Sidebar;