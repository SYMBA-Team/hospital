interface TimeStamp {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

interface Message {
    title: string;
    description: string;
}
interface ErrorI {
    name: string;
    message: string;
}
interface useAudioI {
    url: string;
}
