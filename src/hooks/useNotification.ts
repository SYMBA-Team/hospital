import { addNotification, removeNotification, initNotification } from "app/context/notifications";
import { useAppDispatch, useAppSelector } from "./redux";

const useNotification = () => {
    const dispatch = useAppDispatch();
    return {
        Notify: (
            title: string,
            description: string,
            { kind = "success", timeOut = 5000 }: { kind: NotificationType; timeOut: number } = {
                kind: "success",
                timeOut: 5000,
            }
        ) => {
            const notification: NotificationI = { id: Date.now() + "", title, description, kind, timeOut };
            dispatch(
                addNotification({
                    key: notification.id,
                    notification,
                })
            );
        },
        notifications: useAppSelector((state) => state.notifications),
        closeNotification: (id: string) => {
            // @ts-ignore
            dispatch(removeNotification(id));
        },
        emptyNotifications: (id: string) => {
            // @ts-ignore
            dispatch(initNotification());
        },
        Errofy: (err: any, timeOut: number = 10000) => {
            err = err.data ? err.data : err;
            console.log({ err });
            const notification: NotificationI = {
                id: Date.now() + "",
                title: err.Name ?? "Unknown Error",
                description: err.message ?? "Please try again",
                kind: "error",
                timeOut,
            };
            dispatch(addNotification({ key: notification.id, notification }));
        },
    };
};
export default useNotification;
