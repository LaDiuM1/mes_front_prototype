import React from "react";
import {Pagination, Stack} from "@mui/material";

const AppPagination = () => {
    return (
        <Stack spacing={2}>
            <Pagination count={10} variant="outlined" color="primary" shape="rounded" showFirstButton showLastButton/>
        </Stack>
    );
}

export default AppPagination;