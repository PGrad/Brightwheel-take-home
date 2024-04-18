// Named imports are slower than
// default imports, but I don't
// consider this to be a problem
// at the moment.
import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

type ValueChangeFunc = (value: string) => void;
type SearchFunc = () => void;

export default function Search({
    onValueChange,
    onSearch
}: {
    onValueChange: ValueChangeFunc;
    onSearch: SearchFunc;
}) {
    return (
        <Box sx={{ display: "flex", gap: ".5em" }}>
            <TextField
                type="search"
                onChange={(e) => onValueChange(e.target.value)}
                variant="outlined"
            />
            <IconButton onClick={onSearch}>
                <SearchIcon />
            </IconButton>
        </Box>
    );
}