import {Box} from "@mui/material";
import Sidebar from "@layouts/Sidebar.tsx";
import Header from "@layouts/Header.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <Box sx={{display: 'flex'}}>
            {/* 메인 레이아웃 */}
            <Box sx={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                {/* 헤더 */}
                <Header/>

                <Box sx={{display: 'flex', mt: 8, minWidth: "740px", height: "840px"}}>
                    {/* 사이드바 */}
                    <Sidebar/>

                    {/* 메인 콘텐츠 */}
                    <Box component="main"
                         sx={{flexGrow: 1, mx: 1,}}>
                        <Outlet/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout;