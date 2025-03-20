import {useDispatch} from "react-redux";
import {setButtons} from "@features/main-header/ButtonSlice.tsx";
import {ButtonConfig} from "@components/list/listConfigType.ts";
import {AppDispatch} from "@app/store.ts";

const useButtons = () => {
    const dispatch = useDispatch<AppDispatch>();

    const updateButtons = (buttons: ButtonConfig[]) => {
        dispatch(setButtons(buttons));
    };

    return { updateButtons };
};

export default useButtons;