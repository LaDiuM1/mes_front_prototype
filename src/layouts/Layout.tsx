import {Box, Typography} from "@mui/material";
import Sidebar from "@layouts/Sidebar.tsx";
import Header from "@layouts/Header.tsx";
import {Outlet} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@app/store.ts";

const Layout = () => {
    const title = useSelector((state: RootState) => state.title.title);

    return (
        <Box display='flex'>
            {/* 메인 레이아웃 */}
            <Box flexGrow={1} display='flex' flexDirection='column'>
                {/* 헤더 */}
                <Header />

                <Box display='flex' mt={8} minWidth="740px" height="840px">
                    {/* 사이드바 */}
                    <Sidebar />

                    {/* 메인 콘텐츠 */}
                    <Box component="main" flexGrow={1}>
                        <Box display="flex"
                             flexDirection="column"
                             alignItems="center"
                             height="100%">
                            <Box borderBottom="1px solid #e8e8e8"
                                 boxShadow="1px 0px 4px rgba(0 0 0 0.1)"
                                 width="100%"
                                 padding="10px 20px"
                                 alignItems="center"
                                 display="flex"
                                 justifyContent="space-between"
                                 flexGrow={1}>
                                <Box>
                                    <Typography fontSize="20px"
                                                fontWeight="bold">
                                        {title}
                                    </Typography>
                                </Box>
                                <Box display="flex" gap={1}>
                                    {/*<ListButton buttons={buttons} />*/}
                                </Box>
                            </Box>
                            <Box width="100%"
                                 padding="20px"
                                 display="flex"
                                 flexDirection="column"
                                 gap={1}
                                 flexGrow={40}>
                                <Outlet />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout;