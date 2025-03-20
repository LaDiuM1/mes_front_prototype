import { useEffect } from "react";
import useTitle from "@hooks/main-header/useTitle.ts";
import useButtons from "@hooks/main-header/useBottons.ts";

interface PageSetupProps {
    title: string;
    buttons: any[]; // ButtonConfig 타입 사용 가능
}

export const usePageSetup = ({ title, buttons }: PageSetupProps) => {
    const { updateTitle } = useTitle();
    const { updateButtons } = useButtons();

    useEffect(() => {
        updateTitle(title);
        updateButtons(buttons);
    }, [title, buttons]);
};
