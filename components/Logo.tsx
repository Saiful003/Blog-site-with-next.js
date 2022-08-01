import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo.png";

interface IProps {
  inHeader?: boolean;
  inFooter?: boolean;
}
function Logo({ inHeader, inFooter }: IProps) {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-10">
          <Image src={logo} layout="responsive" alt="logo" />
        </div>
        <span
          className={`text-medium font-bold ${inHeader && "text-emerald-400"} ${
            inFooter && "text-gray-600"
          }`}
        >
          Coder&apos;s Blog
        </span>
      </div>
    </Link>
  );
}

export default Logo;
