import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { useTheme } from "../hooks/useTheme";

interface IProps {
  children: React.ReactNode;
  fill?: boolean;
  normal?: boolean;
  noMoreInNext?: boolean;
  noMoreInPrevious?: boolean;
  link?: string;
}

function Button({
  children,
  fill,
  normal,
  link = "",
  noMoreInNext,
  noMoreInPrevious,
}: IProps) {
  const { isLightTheme } = useTheme();
  return (
    <Link href={link}>
      <a
        className={classNames(
          "font-medium py-1 px-6 rounded-sm",
          {
            "bg-emerald-400 text-white hover:bg-emerald-500": fill,
          },
          {
            [` ${
              isLightTheme
                ? "border border-white text-gray-500"
                : "border border-black text-white"
            }  hover:border-emerald-400`]: normal,
          },
          {
            "bg-emerald-200 cursor-not-allowed text-white":
              noMoreInNext || noMoreInPrevious,
          }
        )}
      >
        {children}
      </a>
    </Link>
  );
}

export default Button;
