import React from "react";
import {Box, Typography} from "@mui/material";
import ListTable from "@components/list/ListTable.tsx";
import ListPagination from "@components/list/ListPagination.tsx";
import ListControls from "@components/list/ListControls.tsx";
import {usePageSetup} from "@hooks/usePageSetup.ts";
import {ListPageProps} from "src/types/commonPageTypes.ts"; // @types는 node와 출돌하여 절대경로로 지정
import styles from "@components/list/listStyle.ts";


const List = ({title, columns, buttons, searchFields, apiUrl}: ListPageProps) => {
    usePageSetup({ title, buttons });

    return (<>
        <Box sx={styles.listContainer}>
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
                <ListPagination />
            </Box>
        </Box>
    </>);
};

export default List;