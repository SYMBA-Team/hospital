import { useUser } from "hooks";
import Error404 from "Pages/Errors/Error404";
import Dashboard from "Pages/Dashboard";
import LogIn from "Pages/LogIn";
import SignUp from "Pages/SignUp";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "Pages/Dashboard/Home";
import Work from "Pages/Dashboard/Work";
import Patients from "Pages/Dashboard/Patients";

const Router = () => {
    const { user } = useUser();
    return useRoutes([
        {
            path: "/",
            element: user ? <Navigate to="/dashboard" /> : <LogIn />,
        },
        {
            path: "dashboard",
            element: <Dashboard />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "work",
                    element: <Work />,
                },
                {
                    path: "patients",
                    element: <Patients />,
                },
                {
                    path: "*",
                    element: <Error404 base="dashboard" />,
                },
            ],
        },
        {
            path: "signup",
            element: user ? <Navigate to="/dashboard" /> : <SignUp />,
        },
        {
            path: "*",
            element: <Error404 />,
        },
    ]);
};
export default Router;
