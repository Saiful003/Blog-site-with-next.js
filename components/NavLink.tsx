import Link from "next/link";
import React from "react";

function NavLink({
  children,
  inMobile,
}: {
  children: React.ReactNode;
  inMobile?: boolean;
}) {
  return (
    <li
      className={`list-none ${
        inMobile && "pl-2 border-l-[3px] border-l-emerald-500"
      } `}
    >
      <a className="text-md font-medium text-gray-600" href="#">
        {children}
      </a>
    </li>
  );
}

export default NavLink;
