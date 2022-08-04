import Link from "next/link";
import React from "react";

interface IProps {
  icon: React.ReactNode;
}

function SocialLink({ icon }: IProps) {
  return (
    <Link href="/">
      <a className="text-gray-500">{icon}</a>
    </Link>
  );
}

export default SocialLink;
