import React from "react";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import * as Icons from "@mui/icons-material"; // ✅ 모든 MUI 아이콘을 불러옴
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ChevronRight } from "@mui/icons-material";
import { selectSidebar } from "@features/SidebarSlice.tsx";
import theme from "@styles/theme.ts";
import { useNavigate } from "react-router-dom";

const DrawerWidth = 250;

export default function Sidebar() {
    const navigate = useNavigate();
    // menuSlice 컴포넌트 메뉴 리스트
    const menuState = useSelector((state: RootState) => state.menu);
    const isOpen = useSelector(selectSidebar);

    return (
        <Drawer
            variant="persistent"
            open={isOpen}
            sx={{
                width: isOpen ? DrawerWidth : 0,
                flexShrink: 0,
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                "& .MuiDrawer-paper": {
                    width: DrawerWidth,
                    boxSizing: "border-box",
                    boxShadow: "1px 0px 5px rgba(0, 0, 0, 0.1)",
                },
            }}
        >
            <Toolbar />
            {/* 프로필 영역 */}
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
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>

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

            {/* 메뉴 리스트 */}
            <List
                sx={{
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#e1e1e1 #fff",
                }}
            >
                {menuState.menuItems.map(({ text, icon, subList }) => {
                    const IconComponent = Icons[icon as keyof typeof Icons];

                    return (
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
                                        {IconComponent ? <IconComponent /> : null}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </AccordionSummary>
                                {subList?.length && (
                                    <AccordionDetails sx={{ padding: 0 }}>
                                        <List sx={{ padding: 0 }}>
                                            {subList.map((sub) => (
                                                <ListItemButton
                                                    key={sub.text}
                                                    onClick={() => sub.path && navigate(sub.path)}
                                                    sx={{
                                                        margin: 0,
                                                        paddingTop: "5px",
                                                        paddingBottom: "5px",
                                                    }}
                                                >
                                                    <ListItemIcon
                                                        sx={{
                                                            justifyContent: "center",
                                                            paddingRight: 0,
                                                        }}
                                                    >
                                                        <ChevronRight />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={sub.text}
                                                        slotProps={{
                                                            primary: { sx: { fontSize: "13.5px" } },
                                                        }}
                                                    />
                                                </ListItemButton>
                                            ))}
                                        </List>
                                    </AccordionDetails>
                                )}
                            </Accordion>
                        </ListItem>
                    );
                })}
            </List>
        </Drawer>
    );
}
