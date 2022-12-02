import { useAppDispatch, useAppSelector } from "hooks/redux";
import { removeUser, setUser } from "app/context/user";

const useUser = () => {
    const dispatch = useAppDispatch(),
        user = useAppSelector((state) => state.user) as User | null,
        set = (user: User) => {
            dispatch(setUser(user));
        },
        remove = () => {
            dispatch(removeUser());
        };
    return { setUser: set, user, removeUser: remove };
};
export default useUser;
