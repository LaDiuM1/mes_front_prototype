import React from "react";
import {Box, Typography} from "@mui/material";
import {usePageSetup} from "@hooks/usePageSetup";
import HeaderDetails from "@components/detail-list/HeaderDetails";
import {DetailPageProps} from "src/types/commonPageTypes.ts";
import {useParams} from "react-router-dom";
import ListTable from "@components/list/ListTable.tsx";

const DetailList = ({pageHeader, table, headerDetails, apiUrl}: DetailPageProps) => {
    usePageSetup({pageHeader});
    const {id} = useParams();

    return (
        <>
            <HeaderDetails headerDetails={headerDetails} apiUrl={apiUrl} id={id} />

            {/* 리스트 영역 */}
            <Box padding="10px">
                {/*<Box borderBottom="1px solid #e8e8e8" marginBottom="10px" paddingBottom="5px">*/}
                {/*    <Typography variant="subtitle1" fontWeight="bold">발주 제품</Typography>*/}
                {/*</Box>*/}

                {/*<ListTable table={table} apiUrl={apiUrl} />*/}
            </Box>
        </>
    );
};

export default DetailList;
