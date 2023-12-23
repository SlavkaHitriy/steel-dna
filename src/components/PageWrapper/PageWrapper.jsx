import { Stack } from '@mui/material';

export const PageWrapper = ({ children, row }) => {
    return (
        <Stack
            direction={row && 'row'}
            sx={{
                width: '100%',
                backgroundColor: 'common.white',
                position: 'relative',
            }}
        >
            {children}
        </Stack>
    );
};
