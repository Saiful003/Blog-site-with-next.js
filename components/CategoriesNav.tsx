import classNames from "classnames";
import React from "react";
import { useTheme } from "../hooks/useTheme";
import CategoryList from "./CategoryList";
import Search from "./Search";

function CategoriesNav() {
  const { isLightTheme } = useTheme();
  return (
    <div
      className={classNames(
        "flex flex-col gap-4 lg:flex-row justify-between lg:border-b sticky top-[81px] z-30 pb-4 lg:pb-0 lg:mb-4",
        { "bg-white ": isLightTheme },
        { "bg-black": !isLightTheme }
      )}
    >
      <ul className="flex gap-5 border-b lg:border-none">
        <CategoryList slug="Recent" />
        <CategoryList slug="React" />
        <CategoryList slug="Node" />
        <CategoryList slug="Express" />
        <CategoryList slug="Next" />
        <CategoryList slug="MongoDB" />
      </ul>
      <Search />
    </div>
  );
}

export default CategoriesNav;
