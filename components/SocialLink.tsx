import React from "react";

interface IProps {
  icon: React.ReactNode;
}

function SocialLink({ icon }: IProps) {
  return (
    <a className="text-gray-500" href="#">
      {icon}
    </a>
  );
}

export default SocialLink;
