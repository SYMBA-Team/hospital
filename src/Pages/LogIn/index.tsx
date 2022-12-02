import { Container, Avatar, Card, Box, CardContent, Grid, Link as MuiLink, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useSignInMutation } from "app/backend/export/auth";
import Auth from "Components/Auth";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Copyright } from "Components/Copyright";

export default function LogIn() {
    return (
        <>
            <Container
                component="main"
                maxWidth="md"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box>
                    <Card>
                        <CardContent sx={{ p: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Auth<SignInValues>
                                initialValues={{ email: "", password: "" }}
                                useMutation={useSignInMutation}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string()
                                        .email("You have to provide a valid email address")
                                        .required("You have to provide an email address"),
                                    password: Yup.string().required("You have to provide a password"),
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
