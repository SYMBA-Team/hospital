interface SignInValues {
    email: string;
    password: string;
}
interface EditableUser {
    firstName: string;
    lastName: string;
}
interface UserBase extends EditableUser {
    email: string;
}

type SignUpValues = UserBase & SignInValues;

interface User extends UserBase, TimeStamp {
    admin: boolean;
}
