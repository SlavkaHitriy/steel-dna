import { Box, ButtonGroup, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { DefaultButton } from '../../ui/DefaultButton';

const buttons = [
    {
        id: 1,
        value: 'all',
        title: 'All',
        amount: '39',
    },
    {
        id: 2,
        value: 'drillPipe',
        title: 'Drill Pipe',
        amount: '32',
    },
    {
        id: 3,
        value: 'tubing',
        title: 'Tubing',
        amount: '32',
    },
    {
        id: 4,
        value: 'linePipe',
        title: 'Line Pipe',
        amount: '05',
    },
    {
        id: 5,
        value: 'octg',
        title: 'OCTG',
        amount: '32',
    },
    {
        id: 6,
        value: 'others',
        title: 'Others',
        amount: '05',
    },
];

export const StatusFilters = () => {
    const [activeFilter, setActiveFilter] = useState(buttons[0].value);

    return (
        <ButtonGroup
            sx={{
                overflow: 'hidden',
                '.MuiButtonGroup-grouped:not(:last-of-type), .MuiButtonGroup-grouped:not(:first-of-type)':
                    {
                        border: 'none',
                        borderRadius: '5px',
                    },
                boxShadow: '0 3px 6px rgba(0 0 0 / 16%)',
            }}
            variant='contained'
        >
            {buttons.map((button) => (
                <DefaultButton
                    key={button.id}
                    onClick={() => setActiveFilter(button.value)}
                    sx={{
                        backgroundColor:
                            activeFilter === button.value
                                ? 'secondary.main'
                                : '#F5F7FB',
                        '&:hover': {
                            backgroundColor:
                                activeFilter === button.value
                                    ? 'secondary.main'
                                    : 'grey.dark',
                        },
                    }}
                >
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <Typography
                            sx={{
                                color:
                                    activeFilter === button.value
                                        ? 'common.white'
                                        : 'grey.blue',
                                fontWeight: 700,
                                lineHeight: 1,
                                pt: '2px',
                            }}
                        >
                            {button.title}
                        </Typography>
                        <Box
                            sx={{
                                fontSize: 20,
                                fontWeight: 700,
                                px: '12px',
                                backgroundColor:
                                    activeFilter === button.value
                                        ? 'common.white'
                                        : '#E2E5EA',
                                borderRadius: '5px',
                                color: 'primary.main',
                            }}
                        >
                            {button.amount}
                        </Box>
                    </Stack>
                </DefaultButton>
            ))}
        </ButtonGroup>
    );
};
