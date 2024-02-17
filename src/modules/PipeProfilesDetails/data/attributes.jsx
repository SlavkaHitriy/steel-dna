import { Stack, ToggleButton, Typography } from '@mui/material';

export const columns = [
    {
        field: 'attributes1',
        headerName: 'Attributes',
        width: 250,
        renderCell: ({ value }) => (
            <Stack direction={'row'} alignItems={'center'}>
                <ToggleButton />
                <Typography>{value}</Typography>
            </Stack>
        ),
    },
    {
        field: 'attributes2',
        headerName: 'Attributes',
        width: 250,
    },
    {
        field: 'attributes3',
        headerName: 'Attributes',
        width: 250,
    },
];

export const rows = [
    {
        id: 1,
        attributes1: 'Tally ID',
        attributes2: 'Status',
        attributes3: 'Location',
    },
];
