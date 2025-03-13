import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
    return (
        <AppBar position="fixed"
                elevation={1}
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: '#2196F3',
        }}>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 !important"
                }}
            >
                {/*헤더 왼쪽 영역(솔루션명)*/}
                <Box sx={{display: "flex", alignItems: "center", width: "240px", justifyContent: "space-evenly"}}>
                    <MenuIcon/>
                    <Typography variant="h6" noWrap>
                        표준 MES 솔루션
                    </Typography>
                </Box>

                {/*헤더 오른쪽 영역 (프로필)*/}
                <Box sx={{display: "flex", alignItems: "center", marginRight: "16px"}}>
                    <Button color="inherit">로그아웃</Button>
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export default Header;