import { Button, FormControlLabel, Checkbox, Box, TextField } from "@mui/material";

import { useFormik, Form, FormikProvider } from "formik";
import { useNotification, useUser } from "hooks";
import { AuthI } from "types/Forms";

function Auth<T extends SignUpValues | SignInValues>({
    useMutation,
    validationSchema,
    initialValues,
    message,
    children,
    rememberMe = false,
    inputs,
}: AuthI<T>) {
    const [Auth, { isLoading }] = useMutation();
    const { setUser } = useUser();
    const { Notify, Errofy } = useNotification();
    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnChange: true,
        onSubmit: (body) => {
            // @ts-ignore-next line
            Auth({ body })
                .unwrap()
                .then((user) => {
                    setUser(user);
                    if (message) Notify(message.title, message.description);
                })
                .catch((e) => {
                    console.error(e);
                    Errofy(e);
                });
        },
    });
    const { errors, touched, handleSubmit, getFieldProps } = formik;
    return (
        <FormikProvider value={formik}>
            <Box component={Form} onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                {inputs.map(({ name, ...props }, i) => (
                    <TextField
                        key={i}
                        {...getFieldProps(name)}
                        error={touched[name] && Boolean(errors[name] as any)}
                        helperText={touched[name] && errors[name] ? String(errors[name]) : undefined}
                        {...props}
                    />
                ))}
                {rememberMe && (
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                )}
                <Button disabled={isLoading} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign In
                </Button>
                {children}
            </Box>
        </FormikProvider>
    );
}

export default Auth;
