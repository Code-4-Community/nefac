import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="flex items-center w-[399px] h-[48px] space-x-2 rounded-lg border border-gray-300 bg-gray-75 dark:bg-gray-900 px-3.5 py-2">
      <img src={"/icons/3-dots.svg"} alt="3 dots" className="h-4 w-4" />
      <Input
        type="search"
        placeholder="Search Anything"
        className="w-full border-0 h-8"
      />
      <img
        src={"/icons/magnifying-glass.svg"}
        alt="magnifying glass"
        className="h-4 w-4"
      />
    </div>
  );
};
export default SearchBar;
