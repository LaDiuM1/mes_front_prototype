import React, { useEffect, useState } from "react";
import { Box, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { HeaderDetailsProps } from "src/types/commonPageTypes.ts";
import { DetailColumnConfig } from "src/types/configTypes.ts";

const styles = {
    container: {
        borderBottom: "1px solid #e8e8e8",
        boxShadow: "1px 0px 2px rgba(0, 0, 0, 0.1)",
        padding: "10px 10px 0 10px",
    },
    sectionRow: {
        display: "flex",
        marginBottom: "16px",
    },
    leftBox: {
        display: "flex",
        width: "150px",
        border: "1px solid #e0e0e0",
        borderRight: "none",
        justifyContent: "center",
        alignItems: "center",
    },
    tableRight: {
        flex: 1,
    },
    tableBorderTop: {
        borderTop: "1px solid #e0e0e0",
    },
    labelCell: {
        backgroundColor: "#f7f7f7",
        fontWeight: "bold",
        whiteSpace: "nowrap",
        border: "1px solid #e8e8e8",
    },
    dataCell: {
        border: "1px solid #e8e8e8",
        whiteSpace: "nowrap",
        overflow: "hidden",
    },
};

// 목업 데이터 예시
const orderDetailMockData = {
    orderNumber: "OR-20240305",
    orderDate: "2024-03-05",
    deliveryRequestDate: "2024-03-15",
    status: "생산중",
    manager: "정진호",
    description: "납품 출발 시 연락 요청",
    customerName: "신화",
    contact: "01234-5678",
    email: "hong@example.com",
    address: "서울특별시 강남구 역삼동 천호빌딩 386호",
};

const HeaderDetails = ({ headerDetails, apiUrl, id }: HeaderDetailsProps) => {
    const [detailData, setDetailData] = useState<any>({});

    useEffect(() => {
        let mockData = {};
        switch (apiUrl) {
            case `/users/${id}`:
                mockData = orderDetailMockData;
                break;
            default:
                mockData = orderDetailMockData;
                break;
        }
        setDetailData(mockData);
    }, [apiUrl, id]);

    return (
        <Box sx={styles.container}>
            {headerDetails.map((section, sectionIndex) => (
                <Box key={sectionIndex} sx={styles.sectionRow}>
                    {/* 왼쪽 섹션 제목 영역 */}
                    <Box sx={styles.leftBox}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            {section.header}
                        </Typography>
                    </Box>

                    {/* 오른쪽 상세 테이블 영역 */}
                    <Box sx={styles.tableRight}>
                        <Table size="small" sx={styles.tableBorderTop}>
                            <TableBody>
                                {buildTableRows(section.detailColumns).map((rowCols, rowIndex) => (
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
                                                            width: col.width || "auto",
                                                        }}
                                                    >
                                                        {detailData[col.field] ?? "-"}
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

/** 섹션 내 컬럼들을 행(row) 단위로 재구성 */
function buildTableRows(columns: DetailColumnConfig[]): DetailColumnConfig[][] {
    const rows: DetailColumnConfig[][] = [];
    let currentRow: DetailColumnConfig[] = [];
    let currentColSpan = 0;
    const maxColumnsPerRow = 4;

    columns.forEach((col, idx) => {
        const colSpan = col.colSpan || 1;
        // 현재 행에 추가했을 때, maxColumnsPerRow(4) 초과하면 새 행에 배치
        if (currentColSpan + colSpan > maxColumnsPerRow) {
            rows.push(currentRow);
            currentRow = [col];
            currentColSpan = colSpan;
        } else {
            currentRow.push(col);
            currentColSpan += colSpan;
        }
        // nextRow가 true이거나 마지막 컬럼이면 행 종료
        if (col.nextRow || idx === columns.length - 1) {
            rows.push(currentRow);
            currentRow = [];
            currentColSpan = 0;
        }
    });

    return rows;
}

export default HeaderDetails;
