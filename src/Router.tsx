import { useUser } from "hooks";
import Error404 from "Pages/Errors/Error404";
import Dashboard from "Pages/Dashboard";
import LogIn from "Pages/LogIn";
import SignUp from "Pages/SignUp";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "Pages/Dashboard/Home";
import Work from "Pages/Dashboard/Work";
import Patients from "Pages/Dashboard/Patients";
import PatientsList from "Pages/Dashboard/Patients/PatientsList";
import NewPatients from "Pages/Dashboard/Patients/NewPatients";
import Patient from "Pages/Dashboard/Patients/Patient";

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
                    children: [
                        {
                            index: true,
                            element: <PatientsList />,
                        },
                        {
                            path: "new",
                            element: <NewPatients />,
                        },
                        {
                            path: ":id",
                            element: <Patient />,
                        },
                    ],
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
