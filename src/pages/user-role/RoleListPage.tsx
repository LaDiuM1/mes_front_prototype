import List from "@components/List.tsx";

const roleListConfig = {
    title: '사용자 권한 목록',
    columns: [
        { field: 'id', headerName: 'NO' },
        { field: 'code', headerName: '권한 코드' },
        { field: 'roleName', headerName: '권한명' },
    ],
    buttons: [
        { type: 'add', url: '/roles/add' },
        { type: 'delete', url: '/roles/delete' },
    ],
    searchFields: [
        { name: 'code', label: '권한코드', type: 'text' },
        { name: 'roleName', label: '권한명', type: 'text' },
    ],
    apiUrl: '/roles',
};

const UserListPage = () => {
    // @ts-ignore
    return <List {...roleListConfig} />;
};

export default UserListPage;