import { Avatar, Card, Box, CardContent, Grid, Link as MuiLink, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useSignUpMutation } from "app/backend/export/auth";
import Auth from "Components/Auth";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { Copyright } from "Components/Copyright";

export default function SignUp() {
    return (
        <>
            <Container
                component="main"
                maxWidth="md"
                sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
            >
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Card>
                        <CardContent sx={{ p: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Auth<SignUpValues>
                                initialValues={{ email: "", password: "", firstName: "", lastName: "" }}
                                useMutation={useSignUpMutation}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string()
                                        .email("You have to provide a valid email address")
                                        .required("You have to provide an email address"),
                                    password: Yup.string()
                                        .min(8, "Your password must have at least 8 charcters")
                                        .required("You have to provide a password"),
                                    firstName: Yup.string().required("You have to provide a firstName"),
                                    lastName: Yup.string().required("You have to provide a lastName"),
                                })}
                                inputs={[
                                    {
                                        margin: "normal",
                                        required: true,
                                        fullWidth: true,
                                        id: "email",
                                        label: "Email Address",
                                        name: "email",
                                        autoComplete: "email",
                                        autoFocus: true,
                                    },
                                    {
                                        margin: "normal",
                                        required: true,
                                        name: "firstName",
                                        label: "First Name",
                                        type: "text",
                                        id: "firstName",
                                        autoComplete: "firstName",
                                        sx: { minWidth: "49%", marginRight: "2%" },
                                    },
                                    {
                                        margin: "normal",
                                        required: true,
                                        name: "lastName",
                                        label: "Last Name",
                                        type: "text",
                                        id: "lastName",
                                        autoComplete: "lastName",
                                        sx: { minWidth: "49%" },
                                    },
                                    {
                                        margin: "normal",
                                        required: true,
                                        fullWidth: true,
                                        name: "password",
                                        label: "Password",
                                        type: "password",
                                        id: "password",
                                        autoComplete: "current-password",
                                    },
                                ]}
                            >
                                <Grid container>
                                    <Grid item xs>
                                        <MuiLink component={Link} to="/recover" variant="body2">
                                            Forgot password?
                                        </MuiLink>
                                    </Grid>
                                    <Grid item>
                                        <MuiLink component={Link} to="/signup" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </MuiLink>
                                    </Grid>
                                </Grid>
                            </Auth>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
            <Copyright sx={{ mt: "auto", mb: 4 }} />
        </>
    );
}
