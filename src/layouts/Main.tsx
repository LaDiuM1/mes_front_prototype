import React from "react";
import { Box, Typography } from "@mui/material";
import ListTable from "@components/list/ListTable.tsx";
import AppPagination from "@components/AppPagination.tsx";
import { ButtonConfig, Column, SearchFieldConfig } from "@components/list/listConfigType.ts";
import ListButton from "@components/list/ListButton.tsx";
import ListControls from "@components/list/ListControls.tsx";

const styles = {
    listBox: {
        borderBottom: "1px solid #e8e8e8",
        boxShadow: "1px 0px 4px rgba(0, 0, 0, 0.1)",
        width: "100%",
        padding: "10px 20px",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexGrow: 1
    },
    listContent: {
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexGrow: 1
    },
    title: {
        fontSize: "20px",
        fontWeight: "bold"
    },
    totalText: {
        fontSize: "15px",
        fontWeight: "bold",
        ml: "5px"
    },
    tableContainer: {
        width: "100%",
        alignItems: "center",
        flexGrow: 35
    },
    mainContainer: {
        width: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        flexGrow: 40
    },
    paginationContainer: {
        position: "sticky",
        bottom: 0,
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        borderTop: "1px solid #e8e8e8",
        backgroundColor: "white",
        alignItems: "center"
    },
    buttonContainer: {
        display: "flex",
        gap: 1
    }
};

interface ListPageProps {
    title: string;
    apiUrl: string;
    buttons: ButtonConfig[];
    columns: Column[];
    searchFields: SearchFieldConfig[];
}

const Main = ({ title, columns, buttons, searchFields, apiUrl }: ListPageProps) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" height="100%">
            <Box sx={styles.listBox}>
                <Box>
                    <Typography sx={styles.title}>{title}</Typography>
                </Box>
                <Box sx={styles.buttonContainer}>
                    <ListButton buttons={buttons} />
                </Box>
            </Box>

            <Box sx={styles.mainContainer}>

            </Box>
        </Box>
    );
};

export default Main;