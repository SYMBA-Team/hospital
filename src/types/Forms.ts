import { SignInType, SignUpType } from "app/backend/export/auth";
import { TextFieldProps } from "@mui/material";

import { SchemaOf } from "yup";
type MyTextFieldProps<T> = TextFieldProps & {
    name: keyof T;
};
export type AuthI<T extends SignUpValues | SignInValues> = {
    useMutation: T extends SignUpValues ? SignUpType : SignInType;
    validationSchema: SchemaOf<T>;
    initialValues: T;
    inputs: MyTextFieldProps<T>[];
    message?: Message;
    children?: React.ReactNode;
    rememberMe?: boolean;
};
