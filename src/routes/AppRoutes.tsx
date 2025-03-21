import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "@layouts/Layout.tsx";
import Home from "@pages/Home.tsx";
import UserListPage from "@pages/user/UserListPage.tsx";
import UserRoleListPage from "@pages/user-role/RoleListPage.tsx";
import OrderListPage from "@pages/order/OrderListPage.tsx";
import OrderDetailListPage from "@pages/order/OrderDetailListPage.tsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    {/* 리스트 페이지*/}
                    <Route path="/users" element={<UserListPage />} />
                    <Route path="/roles" element={<UserRoleListPage />} />
                    <Route path="/orders" element={<OrderListPage />} />

                    {/* 상세 조회 페이지*/}
                    <Route path="/orders/:id" element={<OrderDetailListPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;