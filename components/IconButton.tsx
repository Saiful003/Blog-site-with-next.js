import React from "react";
import { useTheme } from "../hooks/useTheme";

interface IProps {
  icon: React.ReactNode;
  isRightIcon?: boolean;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

function IconButton({ icon, isRightIcon, text, onClick }: IProps) {
  return (
    <a
      onClick={onClick}
      className={`flex select-none items-center gap-2 border px-2 py-1 rounded-md cursor-pointer bg-white hover:bg-neutral-100 ${
        isRightIcon && "flex-row-reverse"
      }`}
    >
      <div> {icon} </div>
      <div> {text} </div>
    </a>
  );
}

export default IconButton;
