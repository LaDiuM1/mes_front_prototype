import {Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar} from "@mui/material";
import {Link} from 'react-router-dom';

const drawerWidth = 240; // 사이드바 넓이

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                ' .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
        }}
        >
            <Toolbar /> {/* 헤더보다 아래로 컨텐츠 표시 */}
            <List>
                <ListItemButton component={Link} to="/">
                    <ListItemText primary="Home" />
                </ListItemButton>
            </List>
        </Drawer>
    )
}

export default Sidebar;