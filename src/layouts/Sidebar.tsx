import React from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    Typography,
    Toolbar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ChevronRight } from "@mui/icons-material";

const DrawerWidth = 250;

export default function Sidebar() {
    // 🔹 Redux에서 menuState 가져오기
    const menuState = useSelector((state: RootState) => state.menu);

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: DrawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: DrawerWidth,
                    boxSizing: "border-box",
                    boxShadow: "1px 0px 5px rgba(0, 0, 0, 0.1)",
                },
            }}
        >
            <Toolbar />
            {/* 🔹 프로필 영역 */}
            <ListItem disablePadding sx={{ position: "sticky" }}>
                <ListItemButton
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        px: 2,
                        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.04)",
                    }}
                >
                    {/* 아이콘 */}
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>

                    {/* 텍스트 */}
                    <ListItemText
                        primary={
                            <Typography variant="subtitle1" fontWeight="bold">
                                관리자
                            </Typography>
                        }
                        secondary={
                            <Typography variant="body2" color="textSecondary">
                                유재석님
                            </Typography>
                        }
                    />
                </ListItemButton>
            </ListItem>
            <Divider />

            {/* 🔹 메뉴 리스트 */}
            <List
                sx={{
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#e1e1e1 #fff",
                }}
            >
                {menuState.menuItems.map(({ text, icon, subList }) => (
                    <ListItem disablePadding key={text}>
                        <Accordion
                            sx={{
                                margin: 0,
                                padding: 0,
                                width: `${DrawerWidth}px`,
                                boxShadow: "none",
                            }}
                        >
                            <AccordionSummary
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{ height: "50px" }}
                            >
                                <ListItemIcon sx={{ alignItems: "center" }}>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </AccordionSummary>
                            {subList?.length && (
                                <AccordionDetails sx={{ padding: 0 }}>
                                    <List sx={{ padding: 0 }}>
                                        {subList.map((sub) => (
                                            <ListItemButton key={sub.text}>
                                                <ListItemIcon
                                                    sx={{
                                                        justifyContent: "center",
                                                        paddingRight: 0,
                                                    }}
                                                >
                                                    <ChevronRight />
                                                </ListItemIcon>
                                                <ListItemText primary={sub.text} />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </AccordionDetails>
                            )}
                        </Accordion>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
