import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import AppBar from "Components/AppBar";
import Drawer from "../../Components/Drawer";
import { Copyright } from "Components/Copyright";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <Box sx={{ display: "flex" }}>
            <Drawer />

            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[900],
                    flexGrow: 1,
                    height: "100vh",
                    position: "relative",
                    overflow: "hidden   ",
                }}
            >
                <AppBar />
                <Toolbar />

                <Box
                    sx={{
                        pt: 4,
                        width: "100%",
                        px: 5,
                        height: "calc(100% - 4rem)",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "auto",
                    }}
                >
                    <Outlet />

                    <Copyright sx={{ mt: "auto" }} />
                </Box>
            </Box>
        </Box>
    );
}
