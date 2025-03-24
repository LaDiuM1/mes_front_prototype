import React from 'react';
import { Box, Typography } from '@mui/material';
import ListTable from '@components/list/ListTable.tsx';
import ListPagination from '@components/list/ListPagination.tsx';
import ListControls from '@components/list/ListControls.tsx';
import { usePageSetup } from '@hooks/usePageSetup.ts';
import { ListPageProps } from 'src/types/commonPageTypes.ts';

const List = ({ pageHeader, searchFields, table, apiUrl }: ListPageProps) => {
    usePageSetup({ pageHeader });

    return (
        <Box sx={styles.listContainer}>
            <Box sx={styles.listContent}>
                <Typography sx={styles.totalText}>Total : 10건</Typography>
                <Box sx={styles.buttonContainer}>
                    <ListControls searchFields={searchFields} />
                </Box>
            </Box>

            <Box sx={styles.tableContainer}>
                <ListTable table={table} apiUrl={apiUrl} />
            </Box>

            <Box sx={styles.paginationContainer}>
                <ListPagination />
            </Box>
        </Box>
    );
};

export default List;

const styles = {
    listContainer: {
        padding: '15px 20px',
    },
    listContent: {
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1,
    },
    totalText: {
        fontSize: '15px',
        fontWeight: 'bold',
        marginLeft: '5px',
    },
    tableContainer: {
        width: '100%',
        alignItems: 'center',
        height: '635px',
        flexGrow: 35,
    },
    paginationContainer: {
        position: 'sticky',
        bottom: 0,
        width: '100%',
        height: '12%',
        display: 'flex',
        justifyContent: 'center',
        borderTop: '1px solid #e8e8e8',
        backgroundColor: 'white',
        alignItems: 'center',
        flexGrow: 1,
    },
    buttonContainer: {
        display: 'flex',
        gap: 1,
    },
};
