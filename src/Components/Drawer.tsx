import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { Avatar, Box, Divider, List, Typography } from "@mui/material";
import { useState } from "react";
import { mainListItems, secondaryListItems } from "Components/listItems";

const drawerWidth = 240;

const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));
export default function Drawer() {
    const [open, setOpen] = useState<boolean>(true);
    const toggleDrawer = (state: boolean) => {
        setOpen(state);
    };
    return (
        <StyledDrawer
            variant="permanent"
            sx={{ backgroundColor: "background.default", boxShadow: 3, "& .MuiDrawer-paper": { borderWidth: 0 } }}
            open={open}
            elevation={0}
            onMouseEnter={() => {
                toggleDrawer(true);
            }}
            onMouseLeave={() => {
                toggleDrawer(false);
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "4rem",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img src="/images/GitBetter.svg" alt="logo" width="80%" />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    mx: 1,
                    pl: 1,
                    pr: 2,
                    py: 2,
                    mt: 5,
                    borderRadius: 2,
                    alignItems: "center",
                    "&:hover": {
                        bgcolor: (theme) => theme.palette.grey[200],
                    },
                }}
            >
                <Avatar src="images/pic_1.JPG" alt="Youcef Madadi" />
                <Box
                    sx={{
                        ml: 3,
                    }}
                >
                    <Typography variant="subtitle1" fontWeight={700}>
                        Youcef Madadi
                    </Typography>
                    <Typography variant="body2">Cardio-logue Doctor</Typography>
                </Box>
            </Box>
            <List component="nav">
                {mainListItems}
                <Divider sx={{ mt: 10, mb: 2 }} />
                {secondaryListItems}
            </List>
        </StyledDrawer>
    );
}
