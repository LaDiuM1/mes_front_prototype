import {AppBar, Toolbar, Typography} from "@mui/material";

const Header = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              표준 MES 솔루션
            </Typography>
          </Toolbar>
        </AppBar>
    )
}

export default Header;