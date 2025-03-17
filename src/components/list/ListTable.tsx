import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

interface User {
    id: number;
    username: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    department: string;
    position: string;
}

// 사용자 데이터 생성 함수
function createUser(
    id: number,
    username: string,
    name: string,
    phone: string,
    email: string,
    address: string,
    department: string,
    position: string
): User {
    return { id, username, name, phone, email, address, department, position };
}

// 사용자 데이터 배열
const users = [
    createUser(1, 'user01', '김철수', '010-1234-5678', 'user01@example.com', '서울특별시 강남구', '개발팀', '팀장'),
    createUser(2, 'user02', '이영희', '010-2345-6789', 'user02@example.com', '서울특별시 서초구', '디자인팀', '팀원'),
    createUser(3, 'user03', '박지성', '010-3456-7890', 'user03@example.com', '경기도 성남시', '마케팅팀', '팀장'),
    createUser(4, 'user04', '손흥민', '010-4567-8901', 'user04@example.com', '부산광역시 해운대구', '개발팀', '팀원'),
    createUser(5, 'user05', '정우영', '010-5678-9012', 'user05@example.com', '대구광역시 중구', '영업팀', '매니저'),
];

const ListTable = () => {
    // 개별 체크박스 상태 관리
    const [checkItems, setCheckItems] = useState<{ [id: number]: boolean }>({});

    // 전체 체크 상태 관리
    const isAllChecked = users.length > 0 && users.every(user => checkItems[user.id]);

    // 개별 체크박스 핸들러
    const handleCheckbox = (id: number) => {
        setCheckItems((prev) => ({
            ...prev,
            [id]: !prev[id] // 현재 값 반전
        }));
    };

    // 전체 체크박스 핸들러
    const handleAllCheck = () => {
        if (isAllChecked) {
            // 전체 해제
            setCheckItems({});
        } else {
            // 전체 선택
            const newCheckedItems: { [id: number]: boolean } = {};
            users.forEach(user => {
                newCheckedItems[user.id] = true;
            });
            setCheckItems(newCheckedItems);
        }
    };

    return (
        <TableContainer sx={{ my: "5px" }} component={Paper}>
            <Table sx={{ minWidth: 800 }} aria-label="user table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <FormControlLabel
                                label=""
                                control={
                                    <Checkbox
                                        checked={isAllChecked}
                                        indeterminate={!isAllChecked && Object.values(checkItems).some(Boolean)}
                                        onChange={handleAllCheck}
                                    />
                                }
                            />
                        </TableCell>
                        <TableCell>no</TableCell>
                        <TableCell align="center">아이디</TableCell>
                        <TableCell align="center">이름</TableCell>
                        <TableCell align="center">전화번호</TableCell>
                        <TableCell align="center">이메일</TableCell>
                        <TableCell align="center">주소</TableCell>
                        <TableCell align="center">부서</TableCell>
                        <TableCell align="center">직책</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {/* 개별 체크박스 */}
                                <FormControlLabel
                                    label=""
                                    control={
                                        <Checkbox
                                            checked={Boolean(checkItems[user.id])}
                                            onChange={() => handleCheckbox(user.id)}
                                        />
                                    }
                                />
                            </TableCell>
                            <TableCell align="center">{user.id}</TableCell>
                            <TableCell align="center">{user.username}</TableCell>
                            <TableCell align="center">{user.name}</TableCell>
                            <TableCell align="center">{user.phone}</TableCell>
                            <TableCell align="center">{user.email}</TableCell>
                            <TableCell align="center">{user.address}</TableCell>
                            <TableCell align="center">{user.department}</TableCell>
                            <TableCell align="center">{user.position}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ListTable;
