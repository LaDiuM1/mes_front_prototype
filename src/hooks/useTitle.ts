import { useDispatch } from "react-redux";
import { setTitle } from "@features/main-header/TitleSlice";
import { AppDispatch } from "../app/store";

const useTitle = () => {
    const dispatch = useDispatch<AppDispatch>();

    const updateTitle = (title: string) => {
        dispatch(setTitle(title));
    };

    return { updateTitle };
};

export default useTitle;