import * as React from 'react';
import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Checkbox} from "@mui/material";
import {Column} from './listConfigType';
import {useNavigate} from "react-router-dom";

const styles = {
    tableContainer: {
        maxHeight: "610px"
    },
    table: {
        minWidth: 800,
    },
    tableRow: {
        cursor: 'pointer',
        '&:last-child td, &:last-child th': {border: 0}
    },
    checkboxCell: {
        align: "center",
        padding: "checkbox",
        width: "50px"
    }
};

const userListMockData = [
    { id: 1, userId: 'user01', username: '김철수', phoneNumber: '010-1234-5678', email: 'user01@example.com', address: '서울특별시 강남구', department: '개발팀', position: '팀장' },
    { id: 2, userId: 'user02', username: '이영희', phoneNumber: '010-2345-6789', email: 'user02@example.com', address: '서울특별시 서초구', department: '디자인팀', position: '팀원' },
    { id: 3, userId: 'user03', username: '박지성', phoneNumber: '010-3456-7890', email: 'user03@example.com', address: '경기도 성남시', department: '마케팅팀', position: '팀장' },
    { id: 4, userId: 'user04', username: '손흥민', phoneNumber: '010-4567-8901', email: 'user04@example.com', address: '부산광역시 해운대구', department: '개발팀', position: '팀원' },
    { id: 5, userId: 'user05', username: '정우영', phoneNumber: '010-5678-9012', email: 'user05@example.com', address: '대구광역시 중구', department: '영업팀', position: '매니저' },
    { id: 6, userId: 'user06', username: '김민재', phoneNumber: '010-6789-0123', email: 'user06@example.com', address: '광주광역시 서구', department: '개발팀', position: '팀장' },
    { id: 7, userId: 'user07', username: '이강인', phoneNumber: '010-7890-1234', email: 'user07@example.com', address: '인천광역시 남동구', department: '디자인팀', position: '팀원' },
    { id: 8, userId: 'user08', username: '차범근', phoneNumber: '010-8901-2345', email: 'user08@example.com', address: '경기도 수원시', department: '마케팅팀', position: '매니저' },
    { id: 9, userId: 'user09', username: '박주영', phoneNumber: '010-9012-3456', email: 'user09@example.com', address: '대전광역시 서구', department: '영업팀', position: '팀장' },
    { id: 10, userId: 'user10', username: '조현우', phoneNumber: '010-0123-4567', email: 'user10@example.com', address: '울산광역시 남구', department: '개발팀', position: '팀원' }
];

const roleListMockData = [
    { id: 1, code: 'RO-0112', roleName: '관리자' },
    { id: 2, code: 'RO-0113', roleName: '운영자' },
    { id: 3, code: 'RO-0114', roleName: '생산 담당자' },
    { id: 4, code: 'RO-0115', roleName: '품질 관리' },
    { id: 5, code: 'RO-0116', roleName: '설비 관리자' },
    { id: 6, code: 'RO-0117', roleName: '물류 담당자' },
    { id: 7, code: 'RO-0118', roleName: '공정 엔지니어' },
    { id: 8, code: 'RO-0119', roleName: '보안 관리자' },
    { id: 9, code: 'RO-0120', roleName: '데이터 분석가' },
    { id: 10, code: 'RO-0121', roleName: '외부 감사자' },
];

const orderListMockData = [
    { id: 1, code: 'OR-20240301', receivedDate: '2024-03-01', deliveryRequestDate: '2024-03-10', orderStatus: '생산 지시 대기' },
    { id: 2, code: 'OR-20240302', receivedDate: '2024-03-02', deliveryRequestDate: '2024-03-12', orderStatus: '생산중' },
    { id: 3, code: 'OR-20240303', receivedDate: '2024-03-03', deliveryRequestDate: '2024-03-15', orderStatus: '생산완료' },
    { id: 4, code: 'OR-20240304', receivedDate: '2024-03-04', deliveryRequestDate: '2024-03-18', orderStatus: '생산중' },
    { id: 5, code: 'OR-20240305', receivedDate: '2024-03-05', deliveryRequestDate: '2024-03-20', orderStatus: '생산 지시 대기' },
    { id: 6, code: 'OR-20240306', receivedDate: '2024-03-06', deliveryRequestDate: '2024-03-22', orderStatus: '생산완료' },
    { id: 7, code: 'OR-20240307', receivedDate: '2024-03-07', deliveryRequestDate: '2024-03-25', orderStatus: '생산 지시 대기' },
    { id: 8, code: 'OR-20240308', receivedDate: '2024-03-08', deliveryRequestDate: '2024-03-28', orderStatus: '생산중' },
    { id: 9, code: 'OR-20240309', receivedDate: '2024-03-09', deliveryRequestDate: '2024-03-30', orderStatus: '생산 지시 대기' },
    { id: 10, code: 'OR-20240310', receivedDate: '2024-03-10', deliveryRequestDate: '2024-04-02', orderStatus: '생산완료' },
];


interface ListTableProps {
    columns: Column[];
    apiUrl: string;
}

const ListTable = ({columns, apiUrl}: ListTableProps) => {
    const navigate = useNavigate();
    const [data, setData] = useState<any[]>([]);
    const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

    useEffect(() => {
        let mockData = [{}];
        switch (apiUrl) {
            case '/users': mockData = userListMockData; break;
            case '/roles': mockData = roleListMockData; break;
            case '/orders': mockData = orderListMockData; break;
        }
        setData(mockData);
    }, []);

    const isAllChecked = data.length > 0 && selectedIds.size === data.length;

    const toggleSelectAll = () => {
        if (selectedIds.size === data.length) {
            setSelectedIds(new Set());
        } else {
            setSelectedIds(new Set(data.map((item) => item.id)));
        }
    };

    const toggleSelect = (id: number) => {
        setSelectedIds((prev) => {
            const newSet = new Set(prev);
            newSet.has(id) ? newSet.delete(id) : newSet.add(id);
            return newSet;
        });
    };

    // 상세 조회 페이지 이동
    const enterDetailPage = (id: number) => {
        navigate(`${apiUrl}/${id}`);
    };

    return (
        <TableContainer sx={styles.tableContainer}>
            <Table sx={styles.table} stickyHeader size="small">
                <TableHead>
                    <TableRow>
                        <TableCell sx={styles.checkboxCell}>
                            <Checkbox checked={isAllChecked}
                                      indeterminate={!isAllChecked && selectedIds.size > 0}
                                      onChange={toggleSelectAll} />
                        </TableCell>
                        {columns.map(col => (
                            <TableCell key={col.field} align="left">{col.headerName}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}
                                  sx={styles.tableRow}
                                  onClick={(e) =>{
                                      const target = e.target as HTMLElement;
                                      // 체크박스 열은 페이지 이동 제외
                                      if (!target.closest('input[type="checkbox"]')) {
                                          enterDetailPage(row.id)
                                      }
                                  }}
                                  hover>
                            <TableCell sx={styles.checkboxCell}>
                                <Checkbox
                                    checked={selectedIds.has(row.id)}
                                    onChange={() => toggleSelect(row.id)}
                                />
                            </TableCell>
                            {columns.map((col) => (
                                <TableCell key={col.field} align="left">
                                    {row[col.field]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ListTable;
