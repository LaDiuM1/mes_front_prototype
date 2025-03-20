import {Button} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@app/store.ts";

const Buttons = () => {
    const buttons = useSelector((state: RootState) => state.buttons.buttons);

    return (<>
        {
            buttons.map(button => (
                <Button
                    key={button.type}
                    variant="contained"
                    href={button.url}
                    color={button.type === 'excel' ? 'success' : button.type === 'delete' ? 'error' : 'primary'}
                >
                    {button.type === 'excel' ? '엑셀 다운로드' :
                        button.type === 'add' ? '등록' :
                            button.type === 'delete' ? '삭제' : button.type}
                </Button>
            ))}
    </>);
}

export default Buttons;