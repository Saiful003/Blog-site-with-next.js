import classNames from "classnames";
import { useState } from "react";
import { BsSearch, BsX } from "react-icons/bs";
import { useTheme } from "../hooks/useTheme";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const { isLightTheme } = useTheme();

  // functions
  const clearInputField = () => setInputValue("");

  return (
    <div className="flex items-center gap-2">
      <div>
        <BsSearch size={15} className="text-gray-500" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className={classNames(
            "focus:outline-none font-medium bg-transparent",
            { "text-gray-600": isLightTheme },
            { "text-white": !isLightTheme }
          )}
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="hidden" />
      </form>
      <div>
        <BsX
          onClick={clearInputField}
          className={classNames(
            "cursor-pointer text-2xl",
            {
              "opacity-0": inputValue === "",
            },
            { "text-gray-500": isLightTheme },
            { "text-white": !isLightTheme }
          )}
        />
      </div>
    </div>
  );
}

export default Search;
