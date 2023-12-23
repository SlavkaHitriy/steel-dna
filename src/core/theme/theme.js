import { createTheme, TextareaAutosize } from '@mui/material';

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
        },
        red: {
            main: '#f47979',
        },
        blue: {
            light: '#F6F8FA',
        },
        green: {
            main: '#23D5AA',
        },
        orange: {
            main: '#FFAA50',
        },
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
                    '&:hover': {
                        background: '#353B56',
                    }
                }
            }
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
                        }
                    },
                }
            },
            defaultProps: {
                variant: 'outlined',
                fullWidth: true,
            },
        },
    },
    textareaAutosize: {},
    
});