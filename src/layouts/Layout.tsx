import {Box} from "@mui/material";
import Sidebar from "@layouts/Sidebar.tsx";
import Header from "@layouts/Header.tsx";
import {Outlet} from "react-router-dom";
import React from "react";
import PageHeader from "@layouts/PageHeader.tsx";

const styles = {
    root: {
        display: 'flex',
    },
    container: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    contentWrapper: {
        display: 'flex',
        mt: 8,
        minWidth: '740px',
        height: '840px',
    },
    main: {
        component: 'main',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
    },
    mainHeader: {
        borderBottom: '1px solid #e8e8e8',
        boxShadow: '1px 0px 4px rgba(0, 0, 0, 0.1)',
        width: '100%',
        padding: '10px 20px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        height: '60px',
    },
    mainTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    mainButtons: {
        display: 'flex',
        gap: 1.5,
    },
    mainContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 40,
    },
};

const Layout = () => {
    return (
        <Box sx={styles.root}>
            {/* 메인 레이아웃 */}
            <Box sx={styles.container}>
                {/* 헤더 */}
                <Header />

                <Box sx={styles.contentWrapper}>
                    {/* 사이드바 */}
                    <Sidebar />

                    {/* 페이지 영역 */}
                    <Box sx={styles.main}>
                        {/* 페이지 헤더 */}
                        <Box sx={styles.mainHeader}>
                            <PageHeader />
                        </Box>

                        {/* 페이지 콘텐츠 */}
                        <Box sx={styles.mainContent}>
                            <Outlet />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;