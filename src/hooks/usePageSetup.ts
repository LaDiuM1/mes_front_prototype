import { useEffect } from 'react';
import useTitle from '@hooks/main-header/useTitle.ts';
import useButtons from '@hooks/main-header/useBottons.ts';
import { PageHeaderConfig } from 'src/types/configTypes.ts';

interface UsePageSetupProps {
    pageHeader: PageHeaderConfig;
}

export const usePageSetup = ({ pageHeader }: UsePageSetupProps) => {
    const { updateTitle } = useTitle();
    const { updateButtons } = useButtons();

    useEffect(() => {
        updateTitle(pageHeader.title);
        updateButtons(pageHeader.buttons);
    }, [pageHeader.title, pageHeader.buttons]);
};
