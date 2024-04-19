// Named imports are slower than
// default imports, but I don't
// consider this to be a problem
// at the moment.
import { forwardRef } from "react";
import { Box, TextField } from "@mui/material";

type ValueChangeFunc = (value: string) => void;

export default forwardRef(function Search(props:
    {
        onValueChange: ValueChangeFunc;
    },
    ref
) {
    const { onValueChange } = props;
    return (
        <Box
            sx={{ display: "flex", gap: ".5em" }}
            ref={ref}
        >
            <TextField
                type="search"
                onChange={(e) => onValueChange(e.target.value)}
                variant="outlined"
                placeholder="Search for a company..."
                sx={{ width: "20em" }}
            />
        </Box>
    );
});