import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { useTheme } from "../hooks/useTheme";

function NavLink({
  children,
  inMobile,
}: {
  children: React.ReactNode;
  inMobile?: boolean;
}) {
  const { isLightTheme } = useTheme();

  return (
    <Link href="/">
      <a
        className={classNames(
          "text-md font-medium",
          {
            [`pl-2 border-l-[3px] border-l-emerald-500 text-gray-600`]:
              inMobile,
          },
          { "text-gray-600": isLightTheme },
          { "text-white": !isLightTheme }
        )}
      >
        {children}
      </a>
    </Link>
  );
}

export default NavLink;
