import { createSlice } from "@reduxjs/toolkit";
import {
    Settings,
    Category,
    Business,
    ShoppingCart,
    Inventory,
    Factory,
    CheckCircle,
    Build,
    PrecisionManufacturing,
    LocalShipping,
    Insights,
    ElectricBolt,
    BarChart,
    Monitor
} from "@mui/icons-material";
import {JSX} from "react";

// 🔹 타입 정의
interface SubMenuItem {
    text: string;
}

interface MenuItem {
    text: string;
    icon: JSX.Element;
    subList?: SubMenuItem[];
}

interface MenuState {
    menuItems: MenuItem[];
}

// 🔹 초기 상태 정의
const initialState: MenuState = {
    menuItems: [
        {
            text: "시스템 관리",
            icon: <Settings />,
            subList: [
                { text: "사용자 정보 관리" },
                { text: "사용자 권한 관리" },
                { text: "사용자 로그 관리" },
            ],
        },
        { text: "기준 정보 관리", icon: <Category /> },
        { text: "영업 관리", icon: <Business /> },
        { text: "구매 관리", icon: <ShoppingCart /> },
        { text: "재고 관리", icon: <Inventory /> },
        { text: "생산 관리", icon: <Factory /> },
        { text: "품질 관리", icon: <CheckCircle /> },
        { text: "설비 관리", icon: <Build /> },
        { text: "금형 관리", icon: <PrecisionManufacturing /> },
        { text: "외주 관리", icon: <LocalShipping /> },
        { text: "생산 실적 통계", icon: <BarChart /> },
        { text: "에너지 통계", icon: <Insights /> },
        { text: "생산 모니터링", icon: <Monitor /> },
        { text: "에너지 모니터링", icon: <ElectricBolt /> },
    ],
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
});

export default menuSlice.reducer;
