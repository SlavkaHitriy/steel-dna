import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';

export const DefaultSelect = ({ sx, label }) => {
    return (
        <FormControl variant='standard' sx={{ minWidth: '100%', ...sx }}>
            {label && (
                <Typography
                    sx={{
                        fontWeight: 700,
                        transform: 'unset',
                    }}
                >
                    {label}
                </Typography>
            )}
            <Select
                sx={{
                    mt: label ? 1 : 0,
                    '&::before': {
                        borderColor: 'grey.light',
                    },
                    '.MuiSelect-select': {
                        py: '10px',
                        fontSize: 15,
                        fontWeight: 700,
                    },
                }}
                defaultValue={'active'}
            >
                <MenuItem value={'active'}>Active</MenuItem>
                <MenuItem value={'deactivated'}>Deactivated</MenuItem>
                <MenuItem value={'done'}>Done</MenuItem>
            </Select>
        </FormControl>
    );
};
