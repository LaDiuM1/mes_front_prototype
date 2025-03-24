import React from "react";
import {Button, FormControl, MenuItem, Select, TextField} from "@mui/material";
import {ListControlsProps} from "src/types/commonPageTypes.ts";

const listInputStyle = {
    width: "130px"
}

const ListControls = ({searchFields}: ListControlsProps) => {
    const [searchValues, setSearchValues] = React.useState<{ [key: string]: string }>({});

    const handleChange = (name: string, value: string) => {
        setSearchValues(prev => ({...prev, [name]: value}));
    };

    const handleSearch = () => {
        console.log('검색 값:', searchValues);
    };

    return (<>
            {searchFields.map((field) =>
                field.type === 'select' ? (
                    <FormControl size="small" key={field.name}>
                        <Select
                            displayEmpty
                            value={searchValues[field.name] || ''}
                            onChange={(e) => handleChange(field.name, e.target.value as string)}
                            sx={listInputStyle}
                        >
                            <MenuItem value=""><em>선택 없음</em></MenuItem>
                            {field.options?.map((opt) => (
                                <MenuItem key={opt} value={opt}>
                                    {opt}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                ) : (
                    <TextField size="small" key={field.name}
                               label={field.label}
                               variant="outlined"
                               slotProps={{inputLabel: {shrink: true}}}
                               value={searchValues[field.name] || ''}
                               onChange={(e) => handleChange(field.name, e.target.value)}
                               sx={listInputStyle}
                    />
                )
            )}

            <Button variant="contained" color="inherit" sx={{mb: "2px"}}>검색</Button>
        </>)
};

export default ListControls;