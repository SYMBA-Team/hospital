import { styled, alpha } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { Badge, IconButton, InputBase, Toolbar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "5rem",
    backgroundColor: alpha(theme.palette.common.black, 0.02),
    transition: theme.transitions.create("background-color"),

    "&:hover,&:focus-within": {
        backgroundColor: alpha(theme.palette.common.black, 0.1),
    },
    marginLeft: 0,
    marginRight: "auto",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            minWidth: "15ch",
            "&:focus": {
                minWidth: "20ch",
            },
        },
    },
}));

const StyledAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
    // @ts-ignore
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

export default function AppBar() {
    return (
        <StyledAppBar position="absolute" sx={{ backgroundColor: "white" }} elevation={0}>
            <Toolbar
                sx={{
                    pr: "24px", // keep right padding when drawer closed
                }}
            >
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon sx={{ color: "black", fontSize: "1.1rem" }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Global search..."
                        inputProps={{ "aria-label": "search" }}
                        sx={{ borderColor: "black", mr: "auto", fontSize: ".9rem" }}
                    />
                </Search>
                <IconButton color="primary">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </StyledAppBar>
    );
}
