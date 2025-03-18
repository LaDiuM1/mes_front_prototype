import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "@layouts/Layout.tsx";
import Home from "@pages/Home.tsx";
import UserListPage from "@pages/user/UserListPage.tsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/userList" element={<UserListPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;