import ListPage from "@components/list/ListPage.tsx";

const userListConfig = {
    title: '수주 목록',
    columns: [
        { field: 'id', headerName: 'NO' },
        { field: 'code', headerName: '수주 코드' },
        { field: 'receivedDate', headerName: '수주 접수일' },
        { field: 'deliveryRequestDate', headerName: '납품 요청일' },
        { field: 'orderStatus', headerName: '수주 상태' },
    ],
    buttons: [
        { type: 'excel', url: '/api/users/excel' },
        { type: 'add', url: '/users/add' },
        { type: 'delete', url: '/users/delete' },
    ],
    searchFields: [
        { name: 'orderType', label: '수주상태', type: 'select', options: ['생산 지시 대기', '생산중', '생산완료'] },
        { name: 'code', label: '수주 코드', type: 'text' },
        { name: 'account', label: '거래처', type: 'text' },
    ],
    apiUrl: '/orders',
};

const UserListPage = () => {
    // @ts-ignore
    return <ListPage {...userListConfig} />;
};

export default UserListPage;