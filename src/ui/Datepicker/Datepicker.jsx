import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Box, Typography } from '@mui/material';

export const Datepicker = ({ label }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box>
                {label && (
                    <Typography
                        sx={{
                            fontSize: 15,
                            fontWeight: 700,
                            color: 'primary.main',
                            lineHeight: '1.5',
                            mb: 1,
                        }}
                    >
                        {label}
                    </Typography>
                )}
                <DateTimePicker
                    sx={{
                        boxShadow: '0 3px 6px rgba(0 0 0 / 16%)',
                        borderRadius: '5px',
                        backgroundColor: '#F5F7FB',
                        '.MuiOutlinedInput-input': {
                            p: '0 20px',
                            height: '45px',
                            order: 2,
                        },
                        '.MuiInputBase-root': {
                            pr: 0,
                        },
                        '.MuiInputAdornment-root': {
                            ml: 0,
                        },
                        '.MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                            p: '0',
                        },
                        '.MuiIconButton-root': {
                            width: '65px',
                            mr: '0',
                            borderRadius: '5px',
                            height: '45px',
                            '&::after': {
                                content: "''",
                                position: 'absolute',
                                height: 25,
                                width: '1px',
                                backgroundColor: 'grey.light',
                                right: 0,
                            },
                        },
                    }}
                    defaultValue={dayjs('2022-04-17')}
                />
            </Box>
        </LocalizationProvider>
    );
};
