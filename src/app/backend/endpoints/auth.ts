import { BuilderI } from "types/redux";

export default function auth(builder: BuilderI) {
    return {
        /* Sign In */
        signIn: builder.mutation<User, { body: SignInValues }>({
            query: ({ body }) => ({
                url: "/signin",
                method: "POST",
                body,
            }),
        }),
        /* Sign Up / Register */
        signUp: builder.mutation<User, { body: SignUpValues }>({
            query: ({ body }) => ({
                url: "/signup",
                method: "POST",
                body,
            }),
        }),
        /* Log out */
        logOut: builder.mutation<Message, void>({
            query: () => ({
                url: "/logout",
                method: "POST",
            }),
        }),
        /* Get User Data */
        getUserData: builder.mutation<User, void>({
            query: () => ({ url: "/", method: "GET" }),
        }),
        /* Edit User Data */
        editUser: builder.mutation<User, EditableUser>({
            query: (body) => ({ url: "/user", method: "PUT", body }),
        }),
        checkEmail: builder.mutation<Message, string>({
            query: (email) => ({
                url: "/email",
                method: "POST",
                body: { email },
            }),
        }),
        checkPhone: builder.mutation<Message, string>({
            query: (phone) => ({
                url: "/phone",
                method: "POST",
                body: { phone },
            }),
        }),

        resetPassword: builder.mutation<Message, { id: string; body: any }>({
            query: ({ id, body }) => ({
                url: "/recover/" + id,
                method: "POST",
                body,
            }),
        }),
        createReset: builder.mutation<Message, any>({
            query: (body) => ({
                url: "/recover/",
                method: "POST",
                body,
            }),
        }),
    };
}
