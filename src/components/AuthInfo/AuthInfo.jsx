import { Stack, Typography } from '@mui/material';
import authBg from '../../assets/images/auth-bg.png';

export const AuthInfo = () => {
    return (
        <Stack
            height={'100%'}
            p={'180px 60px 40px'}
            justifyContent={'space-between'}
            sx={{
                backgroundColor: 'blue.light',
                boxShadow: '0 3px 6px rgba(0 0 0 / 16%)',
                img: {
                    width: '100%',
                    objectFit: 'contain',
                    mt: 5,
                },
            }}
        >
            <Typography
                fontSize={30}
                sx={{
                    maxWidth: '650px',
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        display: 'block',
                        maxWidth: '300px',
                        width: '100%',
                        height: '1px',
                        backgroundColor: 'grey.light',
                        mt: 5,
                    },
                    span: {
                        fontWeight: 700,
                    },
                }}
            >
                A <span>SMART</span> new platform dedicated to managing pipe and
                tube throughout the oil and gas supply chain.
            </Typography>
            <img src={authBg} alt='auth bg' />
        </Stack>
    );
};
