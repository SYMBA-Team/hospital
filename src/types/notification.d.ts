type NotificationType = "error" | "success" | "warning" | "info";

interface NotificationI {
    id: string;
    title: string;
    description: string;
    kind: NotificationType;
    timeOut?: number;
}

type Notifications = {
    [key: string]: NotificationI;
};
