import React from "react";
import { Box, Typography } from "@mui/material";
import ListTable from "@components/list/ListTable.tsx";
import AppPagination from "@components/AppPagination.tsx";
import { ButtonConfig, Column, SearchFieldConfig } from "@components/list/listConfigType.ts";
import ListButton from "@components/list/ListButton.tsx";
import ListControls from "@components/list/ListControls.tsx";

const styles = {
    listBox: {
        border: "1px solid #e8e8e8",
        width: "100%",
        margin: "4px 0",
        boxShadow: "1px 0px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        padding: "10px 10px",
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
    middleContainer: {
        border: "1px solid #e8e8e8",
        width: "100%",
        margin: "4px 0",
        boxShadow: "1px 0px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        flexGrow: 40
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

const ListPage = ({ title, columns, buttons, searchFields, apiUrl }: ListPageProps) => {
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

            <Box sx={styles.middleContainer}>
                <Box sx={styles.listContent}>
                    <Typography sx={styles.totalText}>Total : 10건</Typography>
                    <Box sx={styles.buttonContainer}>
                        <ListControls searchFields={searchFields} />
                    </Box>
                </Box>

                <Box sx={styles.tableContainer}>
                    <ListTable columns={columns} apiUrl={apiUrl} />
                </Box>

                <Box sx={styles.paginationContainer}>
                    <AppPagination />
                </Box>
            </Box>
        </Box>
    );
};

export default ListPage;