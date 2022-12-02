import * as React from "react";
import ListItemButtonC from "@mui/material/ListItemButton";
import ListItemIconP from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/DashboardOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Link } from "react-router-dom";
function ListItemIcon({ children }: { children: React.ReactNode }) {
    return <ListItemIconP sx={{ minWidth: "unset", margin: "0 2rem 0 0.5rem" }}>{children}</ListItemIconP>;
}

function ListItemButton({ children, to, ...props }: any) {
    return (
        <ListItemButtonC
            component={Link}
            to={to}
            sx={{
                "&:hover": {
                    bgcolor: (theme) =>
                        theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[900],
                },
            }}
            {...props}
        >
            {children}
        </ListItemButtonC>
    );
}
export const mainListItems = (
    <>
        <ListItemButton to="/dashboard/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton to="/dashboard/work">
            <ListItemIcon>
                <AssignmentOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Work" />
        </ListItemButton>
        <ListItemButton to="/dashboard/patients">
            <ListItemIcon>
                <PeopleAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Patients" />
        </ListItemButton>
        <ListItemButton to="/dashboard/chat">
            <ListItemIcon>
                <ChatOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
        </ListItemButton>
    </>
);

export const secondaryListItems = (
    <>
        <ListItemButton>
            <ListItemIcon>
                <MoreHorizOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItemButton>
    </>
);
