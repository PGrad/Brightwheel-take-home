// Named imports are slower than
// default imports, but I don't
// consider this to be a problem
// at the moment.
import { Box, TextField } from "@mui/material";

type ValueChangeFunc = (value: string) => void;

export default function Search({
    onValueChange,
    placeholderText
}: {
    onValueChange: ValueChangeFunc,
    placeholderText?: string
}) {
    return (
        <Box
            sx={{ display: "flex", gap: ".5em" }}
        >
            <TextField
                type="search"
                onChange={(e) => onValueChange(e.target.value)}
                variant="outlined"
                placeholder={placeholderText || "Search"}
                sx={{ width: "20em" }}
            />
        </Box>
    );
};