import { createTheme, Theme } from "@mui/material/styles";
import "@fontsource/poppins";
export const theme: Theme = createTheme({
    typography: {
        fontFamily: '"Poppins", sans-serif',
    },
    shape: {
        borderRadius: 10,
    },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 4,
            },
        },
    },
});
