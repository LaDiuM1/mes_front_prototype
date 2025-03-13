import {Box} from "@mui/material";
import Sidebar from "@layouts/Sidebar.tsx";
import Header from "@layouts/Header.tsx";
import {Outlet} from "react-router-dom";
import {useState} from "react";

const Layout = () => {
    // 사이드바 오픈 여부
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            {/* 메인 레이아웃 */}
            <Box sx={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                {/* 헤더 */}
                <Header/>

                <Box sx={{display: 'flex', flexGrow: 1, mt: 8, height: "847px",}}>
                    {/* 사이드바 */}
                    <Sidebar/>

                    {/* 메인 콘텐츠 */}
                    <Box component="main"
                         sx={{
                             flexGrow: 1,
                             m: 1,
                             border: "1px solid gray"
                    }}>
                        <Outlet/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout;