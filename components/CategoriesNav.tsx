import React from "react";
import CategoryList from "./CategoryList";
import Search from "./Search";

function CategoriesNav() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row justify-between lg:border-b">
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
