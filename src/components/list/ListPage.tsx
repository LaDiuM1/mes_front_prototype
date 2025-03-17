import React from "react";
import {Box, Button, FormControl, MenuItem, Select, SelectChangeEvent, TextField, Typography} from "@mui/material";
import ListTable from "@components/list/ListTable.tsx";

const listBoxStyle = {
    border: "1px solid #e8e8e8",
    width: "100%",
    margin: "4px 0",
    boxShadow: "1px 0px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    padding: "5px 10px",
    alignItems: "center"
}

const listContentStyle = {
    width: "100%",
    alignItems: "center"
}

const listInputStyle = {
    width: "130px"
}

const listButtonStyle = {}

const ListPage = () => {
    const [type, setType] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };

    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center" height="100%">
                <Box flexGrow={1} display="flex" justifyContent="space-between" sx={listBoxStyle}>
                    <Box>
                        <Typography fontSize="20px" fontWeight="bold">사용자 목록</Typography>
                    </Box>
                    <Box display="flex" gap="10px">
                        <Button variant="contained" color="success" sx={listButtonStyle}>엑셀 다운로드</Button>
                        <Button variant="contained" color="primary" sx={listButtonStyle}>등록</Button>
                        <Button variant="contained" color="error" sx={listButtonStyle}>삭제</Button>
                    </Box>
                </Box>

                <Box display="flex" flexDirection="column" gap={1} flexGrow={40}
                     sx={{...listBoxStyle, padding: "10px"}}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" flexGrow={1}
                         sx={listContentStyle}>
                        <Typography fontSize="15px" fontWeight="bold" sx={{ml: "5px"}}>Total : 10건</Typography>
                        <Box display="flex" gap={1}>
                            <FormControl size="small">
                                <Select
                                    labelId="userType"
                                    value={type}
                                    onChange={handleChange}
                                    sx={listInputStyle}
                                    displayEmpty
                                >
                                    <MenuItem value="">
                                        <em>선택 없음</em>
                                    </MenuItem>
                                    <MenuItem value={10}>관리자</MenuItem>
                                    <MenuItem value={20}>사용자</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField size="small"
                                       id="outlined-basic"
                                       label="검색필드1"
                                       variant="outlined"
                                       slotProps={{inputLabel: {shrink: true}}}
                                       sx={listInputStyle}
                            />
                            <TextField size="small"
                                       id="outlined-basic"
                                       label="검색필드2"
                                       variant="outlined"
                                       slotProps={{inputLabel: {shrink: true}}}
                                       sx={listInputStyle}
                            />
                            <Button variant="contained" color="inherit" sx={{mb: "3px"}}>검색</Button>
                        </Box>
                    </Box>

                    <Box flexGrow={35} sx={{...listContentStyle, borderTop: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8", maxHeight: "600px"}}>
                        <ListTable/>
                    </Box>

                    <Box flexGrow={1000} sx={listContentStyle}>페이징 영역</Box>
                </Box>
            </Box>
        </>
    )
}

export default ListPage;