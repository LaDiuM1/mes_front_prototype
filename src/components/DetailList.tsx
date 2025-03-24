import React from "react";
import {Box} from "@mui/material";
import {usePageSetup} from "@hooks/usePageSetup";
import HeaderDetails from "@components/detail-list/HeaderDetails";
import {DetailPageProps} from "src/types/commonPageTypes.ts";
import {useParams} from "react-router-dom";

const DetailList = ({pageHeader, headerDetails, apiUrl}: DetailPageProps) => {
    usePageSetup({pageHeader});
    const {id} = useParams();

    return (
        <>
            <HeaderDetails headerDetails={headerDetails} apiUrl={apiUrl} id={id} />

            {/* 리스트 영역 */}
            <Box marginTop="16px">
            </Box>
        </>
    );
};

export default DetailList;
