import {Box} from "@mui/material";
import Sidebar from "@layouts/Sidebar.tsx";
import Header from "@layouts/Header.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* 메인 레이아웃 */}
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                {/* 헤더 */}
                <Header />

                <Box sx={{ display: 'flex', flexGrow: 1, my: 8}}>
                    {/* 사이드바 */}
                    <Sidebar />

                    {/* 메인 콘텐츠 */}
                    <Box component="main" sx={{ flexGrow:1, p: 3, mt: 8, ml: '240px' }}>
                        <Outlet />
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Layout;