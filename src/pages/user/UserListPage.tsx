import List from "@components/List.tsx";

const userListConfig = {
    title: '사용자 목록',
    columns: [
        { field: 'id', headerName: 'NO' },
        { field: 'userId', headerName: '아이디' },
        { field: 'username', headerName: '이름' },
        { field: 'phoneNumber', headerName: '전화번호' },
        { field: 'email', headerName: '이메일' },
        { field: 'address', headerName: '주소' },
        { field: 'department', headerName: '부서' },
        { field: 'position', headerName: '직책' },
    ],
    buttons: [
        { type: 'excel', url: '/api/users/excel' },
        { type: 'add', url: '/users/add' },
        { type: 'delete', url: '/users/delete' },
    ],
    searchFields: [
        { name: 'userType', label: '유저타입', type: 'select', options: ['관리자', '사용자'] },
        { name: 'id', label: '아이디', type: 'text' },
        { name: 'name', label: '이름', type: 'text' },
    ],
    apiUrl: '/users',
};

const UserListPage = () => {
    // @ts-ignore
    return <List {...userListConfig} />;
};

export default UserListPage;