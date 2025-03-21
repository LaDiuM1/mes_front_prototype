import DetailList from "@components/DetailList.tsx";

const orderDetailListConfig = {
    title: '수주 상세보기',
    detailColumns: [
        {
            headerWidth: '150px',
            header: '수주 정보',
            columns: [
                {field: 'orderNumber', headerName: '수주 번호', width: '150px'},
                {field: 'orderDate', headerName: '수주일', width: '150px'},
                {field: 'deliveryRequestDate', headerName: '배송 요청일', width: '200px'},
                {field: 'status', headerName: '상태', width: '', nextRow: true},
                {field: 'manager', headerName: '담당자', width: ''},
                {field: 'description', headerName: '비고', width: '', colSpan:3},
            ],
        },
        {
            headerWidth: '150px',
            header: '거래처 정보',
            columns: [
                {field: 'customerName', headerName: '거래처명', width: '150px'},
                {field: 'contact', headerName: '연락처', width: '150px'},
                {field: 'email', headerName: '이메일', width: '200px'},
                {field: 'address', headerName: '주소', width: '',},
            ],
        },
    ],
    buttons: [
        {type: 'edit', url: '/orders/edit'},
        {type: 'back', url: '/orders'},
    ],
    apiUrl: '/orders',
};

const OrderDetailListPage = () => {
  return <DetailList {...orderDetailListConfig} />
}

export default OrderDetailListPage;