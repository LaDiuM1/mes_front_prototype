import React, {useEffect} from "react";
import {Box, Typography} from "@mui/material";
import ListTable from "@components/list/ListTable.tsx";
import AppPagination from "@components/AppPagination.tsx";
import {ButtonConfig, Column, SearchFieldConfig} from "@components/list/listConfigType.ts";
import ListControls from "@components/list/ListControls.tsx";
import useTitle from "@hooks/main-header/useTitle.ts";
import useButtons from "@hooks/main-header/useBottons.ts";
import {usePageSetup} from "@hooks/usePageSetup.ts";

const styles = {
    listContent: {
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexGrow: 1
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

const ListPage = ({title, columns, buttons, searchFields, apiUrl}: ListPageProps) => {
    usePageSetup({ title, buttons });

    return (<>
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
    </>);
};

export default ListPage;