import DetailList from "@components/DetailList.tsx";

const orderDetailListConfig = {
    pageHeader:{
        title: '수주 상세정보',
        buttons: [
            {type: 'edit', url: '/orders/edit'},
            {type: 'back', url: '/orders'},
        ],
    },
    headerDetails: [
        {
            headerWidth: '150px',
            header: '수주 정보',
            detailColumns: [
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
            detailColumns: [
                {field: 'customerName', headerName: '거래처명', width: '150px'},
                {field: 'contact', headerName: '연락처', width: '150px'},
                {field: 'email', headerName: '이메일', width: '200px'},
                {field: 'address', headerName: '주소', width: '',},
            ],
        },
    ],
    table: {
        existCheckbox: false,
        columns: [
            { field: 'id', headerName: 'NO' },
            { field: 'code', headerName: '수주 상세 코드' },
            { field: 'itemCode', headerName: '품목 코드' },
            { field: 'itemName', headerName: '품목명' },
            { field: 'itemType', headerName: '품목 유형' },
            { field: 'unit', headerName: '단위' },
            { field: 'orderQty', headerName: '주문 수량' },
        ],
    },
    apiUrl: '/orders/detail',
};

const OrderDetailListPage = () => {
  return <DetailList {...orderDetailListConfig} />
}

export default OrderDetailListPage;