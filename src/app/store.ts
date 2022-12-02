import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import Api from "./backend";
import user from "./context/user";
import notifications from "./context/notifications";
export const store = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer,
        user,
        notifications,
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(Api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
