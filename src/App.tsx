import { useEffect } from "react";
import { useGetUserDataMutation } from "app/backend/export/auth";
import { useUser } from "hooks";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router";

export default function App() {
    const [GetUserData] = useGetUserDataMutation();
    const { setUser, removeUser } = useUser();

    useEffect(() => {
        GetUserData()
            .unwrap()
            .then((user) => setUser(user))
            .catch((e) => removeUser());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </>
    );
}
