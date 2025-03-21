import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@app/store.ts";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
    const buttons = useSelector((state: RootState) => state.buttons.buttons);
    const navigate = useNavigate();

    const handleClick = (buttonType: string, url: string) => {
        if (buttonType === 'back') {
            navigate(url);
        } else {
            navigate(url);
        }
    };

    const buttonLabel = (type: string) => {
        switch (type) {
            case 'excel': return '엑셀 다운로드';
            case 'add': return '등록';
            case 'delete': return '삭제';
            case 'edit': return '수정';
            case 'back': return '목록으로';
            default: return type;
        }
    };

    const buttonColor = (type: string) => {
        switch (type) {
            case 'excel': return 'success';
            case 'delete': return 'error';
            case 'back': return 'inherit';
            default: return 'primary';
        }
    };

    return (
        <>
            {buttons.map(button => (
                <Button
                    key={button.type}
                    variant="contained"
                    color={buttonColor(button.type)}
                    onClick={() => handleClick(button.type, button.url)}
                >
                    {buttonLabel(button.type)}
                </Button>
            ))}
        </>
    );
};

export default Buttons;
