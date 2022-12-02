import { createSlice } from "@reduxjs/toolkit";

const initial_state: Notifications = {};
const notifications = createSlice({
    name: "notifications",
    initialState: initial_state,
    reducers: {
        // @ts-ignore
        addNotification: (
            state,
            { payload: { key, notification } }: { payload: { key: string; notification: NotificationI } }
        ) => {
            state[key] = notification;
            return state;
        },
        removeNotification: (state, { payload: key }: { payload: string }) => {
            delete state[key];
            return state;
        },
        initNotification: (state) => {
            state = initial_state;
            return state;
        },
    },
});

export const { addNotification, removeNotification, initNotification } = notifications.actions;

export default notifications.reducer;
