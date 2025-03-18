import React from "react";
import {Box, Typography} from "@mui/material";
import ListTable from "@components/list/ListTable.tsx";
import AppPagination from "@components/AppPagination.tsx";
import {ButtonConfig, Column, SearchFieldConfig} from "@components/list/listConfigType.ts";
import ListButton from "@components/list/ListButton.tsx";
import ListControls from "@components/list/ListControls.tsx";

const listBoxStyle = {
    border: "1px solid #e8e8e8",
    width: "100%",
    margin: "4px 0",
    boxShadow: "1px 0px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    padding: "10px",
    alignItems: "center"
};

const listContentStyle = {
    width: "100%",
    alignItems: "center"
};

const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold"
};

const totalTextStyle = {
    fontSize: "15px",
    fontWeight: "bold",
    ml: "5px"
};

const tableContainerStyle = {
    ...listContentStyle,
};

const paginationContainerStyle = {
    position: "sticky",
    bottom: 0,
    width: "100%",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    borderTop: "1px solid #e8e8e8",
    backgroundColor: "white"
};

interface ListPageProps {
    title: string;
    apiUrl: string;
    buttons: ButtonConfig[];
    columns: Column[];
    searchFields: SearchFieldConfig[];
}

const ListPage = ({title, columns, buttons, searchFields, apiUrl}: ListPageProps) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" height="100%">
            <Box flexGrow={1} display="flex" justifyContent="space-between" sx={listBoxStyle}>
                <Box>
                    <Typography sx={titleStyle}>{title}</Typography>
                </Box>
                <Box display="flex" gap={1}>
                    <ListButton buttons={buttons} />
                </Box>
            </Box>

            <Box display="flex" flexDirection="column" gap={1} flexGrow={40} sx={{...listBoxStyle, padding: "10px"}}>
                <Box display="flex" justifyContent="space-between" alignItems="center" flexGrow={1}
                     sx={listContentStyle}>
                    <Typography sx={totalTextStyle}>Total : 10건</Typography>
                    <Box display="flex" gap={1}>
                        <ListControls searchFields={searchFields} />
                    </Box>
                </Box>

                <Box flexGrow={35} sx={tableContainerStyle}>
                    <ListTable columns={columns}/>
                </Box>

                <Box sx={paginationContainerStyle}>
                    <Box display="flex" alignItems="center">
                        <AppPagination />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ListPage;