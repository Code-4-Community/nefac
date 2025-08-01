import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="flex items-center w-full max-w-[399px] h-[36px] space-x-2 rounded-lg px-3.5 py-2 text-gray-600 border border-gray-300">
      <FontAwesomeIcon icon={faSearch} className="h-4 w-4" />
      <Input
        type="search"
        placeholder="Search"
        className="w-full border-0 h-8"
      />
      <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
    </div>
  );
};
export default SearchBar;