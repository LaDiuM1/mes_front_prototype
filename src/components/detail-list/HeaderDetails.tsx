import React, { useEffect, useState } from "react";
import { Box, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { HeaderDetailsProps } from "src/types/commonPageTypes.ts";
import styles from "@components/detail-list/headerDetailsStyle.ts";
import { DetailColumn } from "src/types/configTypes.ts";

const orderDetailMockData = {
    orderNumber: 'OR-20240305',
    orderDate: '2024-03-05',
    deliveryRequestDate: '2024-03-15',
    status: '생산중',
    manager: '정진호',
    description: '납품 출발 시 연락 요청',
    customerName: '신화',
    contact: '01234-5678',
    email: 'hong@example.com',
    address: '서울특별시 강남구 역삼동 천호빌딩 386호',
};

const HeaderDetails = ({ detailColumns, apiUrl, id }: HeaderDetailsProps) => {
    const [detailData, setDetailData] = useState<any>({});
    useEffect(() => {
        let mockData = {};
        switch (apiUrl) {
            case `/users/${id}`:
                mockData = orderDetailMockData;
                break;
        }
        setDetailData(mockData);
    }, []);

    useEffect(() => {
        setDetailData(orderDetailMockData);
    }, []);

    return (
        <Box sx={styles.container}>
            {detailColumns.map((section, sectionIndex) => (
                <Box key={sectionIndex} sx={styles.sectionRow}>
                    <Box sx={styles.leftBox}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            {section.header}
                        </Typography>
                    </Box>

                    {/* 오른쪽 상세 테이블 */}
                    <Box sx={styles.tableRight}>
                        <Table size="small" sx={styles.tableBorderTop}>
                            <TableBody>
                                {buildTableRows(section.columns).map((rowCols, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        {rowCols.map((col, colIndex) => {
                                            const mergedCells = col.colSpan ? col.colSpan * 2 - 1 : 1;
                                            return (
                                                <React.Fragment key={colIndex}>
                                                    {/* label 셀 */}
                                                    <TableCell
                                                        variant="head"
                                                        sx={{
                                                            ...styles.labelCell,
                                                            width: section.headerWidth,
                                                        }}
                                                    >
                                                        {col.headerName}
                                                    </TableCell>

                                                    {/* data 셀 */}
                                                    <TableCell
                                                        align="left"
                                                        colSpan={mergedCells}
                                                        sx={{
                                                            ...styles.dataCell,
                                                            width: col.width || 'auto',
                                                        }}
                                                    >
                                                        {detailData[col.field] ?? '-'}
                                                    </TableCell>
                                                </React.Fragment>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

/** 섹션별 테이블의 행 변경 및 병합 함수 */
function buildTableRows(columns: DetailColumn[]) {
    const rows: DetailColumn[][] = [];
    let currentRow: DetailColumn[] = [];
    let currentColSpan = 0;
    const maxColumnsPerRow = 4;

    columns.forEach((col, idx) => {
        const colSpan = col.colSpan || 1;
        if (currentColSpan + colSpan > maxColumnsPerRow) {
            rows.push(currentRow);
            currentRow = [col];
            currentColSpan = colSpan;
        } else {
            currentRow.push(col);
            currentColSpan += colSpan;
        }
        if (col.nextRow || idx === columns.length - 1) {
            rows.push(currentRow);
            currentRow = [];
            currentColSpan = 0;
        }
    });

    return rows;
}

export default HeaderDetails;
