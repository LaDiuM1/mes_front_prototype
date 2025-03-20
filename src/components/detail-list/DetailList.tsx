import React, {useEffect, useState} from "react";
import {Box, Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import {usePageSetup} from "@hooks/usePageSetup.ts";

const orderDetailListConfig = {
    title: '수주 상세보기',
    detailColumns: [
        {
            header: '발주 정보',
            columns: [
                {field: 'orderNumber', headerName: '발주 번호', width: '150px'},
                {field: 'orderDate', headerName: '발주일', width: '150px'},
                {field: 'deliveryRequestDate', headerName: '배송 요청일', width: '150px'},
                {field: 'status', headerName: '상태', width: '100px', nextRow: true},
                {field: 'manager', headerName: '담당자', width: '100px'},
            ],
        },
        {
            header: '거래처 정보',
            columns: [
                {field: 'customerName', headerName: '거래처명', width: '150px'},
                {field: 'contact', headerName: '연락처', width: '150px'},
                {field: 'email', headerName: '이메일', width: '150px'},
                {field: 'address', headerName: '주소', width: '200px',},
                {field: 'extraCustomerInfo', width: '200px', headerName: '추가 고객정보', nextRow: true},
            ],
        },
    ],
    columns: [  // 리스트 컬럼 설정 (아직 구현하지 않음)
        {field: 'id', headerName: 'NO'},
        {field: 'code', headerName: '수주 코드'},
        {field: 'receivedDate', headerName: '수주 접수일'},
        {field: 'deliveryRequestDate', headerName: '납품 요청일'},
        {field: 'orderStatus', headerName: '수주 상태'},
    ],
    buttons: [
        { type: 'edit', url: '/orders/edit' },
        { type: 'back', url: '/orders' },
    ],
    searchFields: [
        {name: 'orderType', label: '수주상태', type: 'select', options: ['생산 지시 대기', '생산중', '생산완료']},
        {name: 'code', label: '수주 코드', type: 'text'},
        {name: 'account', label: '거래처', type: 'text'},
    ],
    apiUrl: '/orders',
};


const mockDetailData = {
    orderNumber: 'OR-20240305',
    orderDate: '2024-03-05',
    deliveryRequestDate: '2024-03-15',
    status: '생산중',
    extraInfo1: '추가 정보 값 1',
    extraInfo2: '추가 정보 값 2',
    extraInfo3: '추가 정보 값 3',
    customerName: '신화',
    contact: '010-1234-5678',
    email: 'hong@example.com',
    address: '서울특별시 강남구',
    extraCustomerInfo: '기타 고객 정보',
    manager: '정진호',
};

const DetailList = () => {
    const {title, buttons, detailColumns} = orderDetailListConfig;
    usePageSetup({title, buttons});

    const [detailData, setDetailData] = useState<any>({});

    useEffect(() => {
        // 목 데이터 로딩 예시 (추후 서버 호출로 변경 가능)
        setDetailData(mockDetailData);
    }, []);

    const renderDetailRows = (columns: any[]) => {
        const rows: any[][] = [];
        let currentRow: any[] = [];

        columns.forEach((col, idx) => {
            currentRow.push(col);
            if (col.nextRow || idx === columns.length - 1) {
                rows.push(currentRow);
                currentRow = [];
            }
        });

        return rows;
    };

    return (
        <>
            <Box borderBottom="1px solid #e8e8e8" boxShadow="1px 0px 2px rgba(0, 0, 0, 0.1)" padding="10px 10px 0 10px">
                {detailColumns.map((section, idx) => (
                    <Box key={idx} display="flex" marginBottom="16px">
                        {/* 왼쪽 헤더 */}
                        <Box display="flex" width="150px" border="1px solid #e0e0e0" justifyContent="center" alignItems="center">
                            <Typography variant="subtitle1" fontWeight="bold" alignItems="center">
                                {section.header}
                            </Typography>
                        </Box>

                        {/* 오른쪽 상세 테이블 */}
                        <Box flex={1}>
                            <Table size="small" sx={{borderTop:"1px solid #e0e0e0"}}>
                                <TableBody>
                                    {renderDetailRows(section.columns).map((row, rowIdx) => (
                                        <TableRow key={rowIdx} >
                                            {row.map((col, colIdx) => (
                                                <React.Fragment key={colIdx}>
                                                    <TableCell
                                                        variant="head"
                                                        sx={{
                                                            backgroundColor: "#f7f7f7",
                                                            fontWeight: "bold",
                                                            width: col.width || 'auto',
                                                            whiteSpace: "nowrap",
                                                        }}
                                                    >
                                                        {col.headerName}
                                                    </TableCell>
                                                    <TableCell align="left" sx={{width: col.width || 'auto', border: "1px solid #e8e8e8"}}>
                                                        {detailData[col.field] || '-'}
                                                    </TableCell>
                                                </React.Fragment>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* 리스트 영역 (아직 구현하지 않음) */}
            <Box marginTop="16px">
                {/* 리스트 컴포넌트가 들어갈 자리 */}
            </Box>
        </>
    );
};

export default DetailList;