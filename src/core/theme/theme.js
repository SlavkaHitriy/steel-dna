import { createTheme } from '@mui/material';
import shadows from '@mui/material/styles/shadows';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#262B40',
        },
        secondary: {
            main: '#0061FF',
            dark: '#0049c0',
        },
        common: {
            black: '#121212',
            white: '#fff',
        },
        grey: {
            main: '#9E9E9E',
            light: '#d5d5d5',
            blue: '#8F98AB',
            [200]: '#F5F7FA',
            [300]: '#f4f4f4',
        },
        red: {
            main: '#f47979',
            light: '#FF3841',
        },
        blue: {
            main: '#0084FF',
            light: '#F6F8FA',
        },
        green: {
            main: '#24D5AA',
            dark: '#14b28c',
        },
        orange: {
            main: '#FEBC2E',
        },
    },
    shadows: {
        ...shadows,
        0: 'none',
        1: '0px 3px 6px rgba(0 0 0 / 16%)',
    },
    typography: {
        allVariants: {
            fontSize: 15,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    background: '#1F243B',
                    color: '#fff',
                    fontWeight: 700,
                },
                outlinedPrimary: {
                    '&:hover': {
                        background: '#353B56',
                    },
                },
                outlinedSuccess: {
                    borderColor: '#24D5AA',
                    background: '#24D5AA',
                    '&:hover': {
                        background: '#18c097',
                        borderColor: '#24D5AA',
                    },
                },
                outlinedError: {
                    borderColor: '#707070',
                    background: '#707070',
                    '&:hover': {
                        background: '#f47979',
                        borderColor: '#f47979',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    padding: 0,
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                        padding: 0,
                    },
                    '& .MuiOutlinedInput-input': {
                        color: '#262B40',
                        '&::placeholder': {
                            color: '#8F98AB',
                            opacity: 1,
                        },
                    },
                },
            },
            defaultProps: {
                variant: 'outlined',
                fullWidth: true,
            },
        },
    },
    textareaAutosize: {},
});
