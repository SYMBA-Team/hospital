import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Error404({ base = "" }) {
    return (
        <>
            <Box sx={{ mt: 30 }}>
                <Typography component="h2" variant="h5" align="center">
                    This Page doesn't exist
                </Typography>
                <Typography component="h1" variant="h1" align="center" sx={{ fontSize: "10rem" }}>
                    404
                </Typography>
            </Box>
            <Button component={Link} to={"/" + base} variant="contained" size="large" sx={{ mx: "auto" }}>
                Go back home
            </Button>
        </>
    );
}
