import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <div className="flex items-center gap-2">
      <div>
        <BsSearch size={15} className="text-gray-500" />
      </div>
      <input
        className="focus:outline-none text-gray-600 font-medium"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
