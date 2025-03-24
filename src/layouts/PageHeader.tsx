import {Box, Typography} from "@mui/material";
import Buttons from "@components/items/Buttons.tsx";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@app/store.ts";

const PageHeader = () => {
    const title = useSelector((state: RootState) => state.title.title);

    return (<>
        <Box>
            <Typography fontSize="20px"
                        fontWeight="bold">
                {title}
            </Typography>
        </Box>
        <Box display="flex" gap={1.5}>
            <Buttons />
        </Box>
    </>)
}

export default PageHeader;