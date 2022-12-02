import { Link, Typography } from "@mui/material";

export function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {"Made with love ❤️ © "}
            <Link color="inherit" href="https://microclub.net/">
                2EZ4US
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
