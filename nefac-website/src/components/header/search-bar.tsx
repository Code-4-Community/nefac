import { TextField } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <div className="flex items-center w-[399px] h-[36px] space-x-2 rounded-lg border border-gray-300 bg-gray-75 px-3.5 py-2">
      <MoreVert className="h-4 w-4 text-nefacblue" />
      <TextField
        type="search"
        placeholder="Search Anything"
        size="small"
        variant="standard"
        fullWidth
        InputProps={{
          disableUnderline: true,
          style: { fontSize: '14px', color: '#2F5C9F' }
        }}
        sx={{
          '& .MuiInputBase-root': {
            height: '32px',
          }
        }}
      />
      <Search className="h-4 w-4 text-nefacblue" />
    </div>
  );
};
export default SearchBar;
