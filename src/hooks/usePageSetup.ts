import { useEffect } from "react";
import useTitle from "@hooks/main-header/useTitle.ts";
import useButtons from "@hooks/main-header/useBottons.ts";
import {ButtonConfig} from "src/types/configTypes.ts";

interface PageSetupProps {
    title: string;
    buttons: ButtonConfig[];
}

export const usePageSetup = ({ title, buttons }: PageSetupProps) => {
    const { updateTitle } = useTitle();
    const { updateButtons } = useButtons();

    useEffect(() => {
        updateTitle(title);
        updateButtons(buttons);
    }, [title, buttons]);
};
