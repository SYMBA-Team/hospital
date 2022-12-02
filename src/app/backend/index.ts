import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//import { ParseQuery } from "functions";
import webconfig from "webconfig.json";
import { auth } from "./endpoints";

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NODE_ENV === "production" ? webconfig.back_url : webconfig.back_dev_url,
        credentials: "include",
    }),
    endpoints: (builder) => ({
        ...auth(builder),
    }),
});

export default api;
