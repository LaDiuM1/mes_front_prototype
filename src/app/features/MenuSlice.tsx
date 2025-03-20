import { createSlice } from "@reduxjs/toolkit";

interface SubMenuItem {
    text: string;
    path?: string;
}

interface MenuItem {
    text: string;
    icon: string;  // ✅ Redux에는 문자열만 저장 (직렬화 가능)
    subList?: SubMenuItem[];
}

interface MenuState {
    menuItems: MenuItem[];
}

// ✅ Redux에서 JSX 요소를 저장하지 않고, 아이콘 이름을 문자열로 저장
const initialState: MenuState = {
    menuItems: [
        {
            text: "시스템 관리",
            icon: "Settings",  // ✅ 문자열 저장
            subList: [
                { text: "사용자 정보 관리", path: "/users" },
                { text: "사용자 권한 관리", path: "/roles" },
                { text: "사용자 로그 관리" },
            ],
        },
        {
            text: "기준 정보 관리",
            icon: "Category",
            subList: [
                { text: "공통 코드 관리" },
                { text: "코드 생성 관리" },
                { text: "회사 정보 관리" },
                { text: "거래처 관리" },
                { text: "자재 정보 관리" },
                { text: "BOM 정보 관리" },
                { text: "공정 정보 관리" },
                { text: "품질 기준 정보 관리" },
                { text: "설비 정보 관리" },
                { text: "에너지 정보 관리" },
            ],
        },
        {
            text: "제품 / 영업 관리",
            icon: "Business",
            subList: [
                { text: "수주 관리", path: "/orders" },
                { text: "출하 관리" },
                { text: "수주 / 출하 현황 관리" },
                { text: "고객 클레임 관리" },
                { text: "제품 반품 관리" },
            ],
        },
        {
            text: "재고 관리",
            icon: "Inventory",
            subList: [
                { text: "제품 재고 관리" },
                { text: "제품 재고 조정" },
                { text: "자재 재고 관리" },
                { text: "자재 재고 조정" },
                { text: "제품 재고 이력 조회" },
                { text: "자재 재고 이력 조회" },
                { text: "적정 재고 관리" },
                { text: "LOT 추적 관리" },
            ],
        },
        {
            text: "자재 / 구매 관리",
            icon: "ShoppingCart",
            subList: [
                { text: "자재 발주 관리" },
                { text: "자재 입고 관리" },
                { text: "자재 반품 관리" },
            ],
        },
        {
            text: "설비 관리",
            icon: "Build",
            subList: [
                { text: "설비 보전 기준 등록" },
                { text: "설비 보전 관리" },
                { text: "설비 수리 이력 관리" },
            ],
        },
        {
            text: "생산 관리",
            icon: "Factory",
            subList: [
                { text: "생산 계획 관리" },
                { text: "생산 지시 관리" },
                { text: "공정 실적 관리" },
            ],
        },
        {
            text: "외주 관리",
            icon: "LocalShipping",
            subList: [
                { text: "외주 발주 관리" },
                { text: "외주 재고 관리" },
                { text: "외주 입고 등록" },
                { text: "외주 이력 관리" },
                { text: "외주 업체 관리" },
            ],
        },
        {
            text: "품질 관리",
            icon: "CheckCircle",
            subList: [
                { text: "수입 검사 관리" },
                { text: "출하 검사 관리" },
                { text: "불량품 관리" },
            ],
        },
        {
            text: "생산 모니터링",
            icon: "Monitor",
            subList: [
                { text: "설비 가동 현황" },
                { text: "수주-출하 현황" },
                { text: "불량 발생 현황" },
            ],
        },
        {
            text: "에너지 모니터링",
            icon: "ElectricBolt",
            subList: [
                { text: "총 에너지 사용 현황" },
                { text: "설비별 에너지 사용 현황" },
                { text: "종류별 에너지 사용 현황" },
            ],
        },
    ],
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
});

export default menuSlice.reducer;
