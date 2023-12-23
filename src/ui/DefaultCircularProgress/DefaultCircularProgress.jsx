import { Box, CircularProgress, LinearProgress, Typography } from '@mui/material';
import React from 'react';

export const DefaultCircularProgress = ({ title, value, bottomText, linear }) => {
    return (
        <Box>
            {!bottomText && (
                <Typography textAlign={'center'} mb={2}>
                    {title}
                </Typography>
            )}
            {linear ? (
                <>
                    <LinearProgress
                        variant='determinate'
                        value={value}
                        sx={{
                            width: 100,
                            height: 10,
                            backgroundColor: 'grey.light',
                            borderRadius: '10px',
                            boxShadow: 'inset 0 3px 6px rgba(0 0 0 / 16%)',
                            '.MuiLinearProgress-bar': {
                                backgroundColor: 'secondary.main',
                                borderRadius: '10px',
                            },
                        }}
                    />
                    <Typography fontSize={20} fontWeight={700} textAlign={'center'} mt={1}>
                        {value}%
                    </Typography>
                </>
            ) : (
                <Box sx={{ position: 'relative', display: 'inline-flex', zIndex: 3 }}>
                    <CircularProgress
                        size={75}
                        variant='determinate'
                        value={value}
                        sx={{
                            '*': {
                                strokeWidth: '2.4px',
                            },
                            svg: {
                                '& > *': {
                                    color: 'green.main',
                                },
                            },
                        }}
                    />
                    <Box
                        sx={{
                            width: '72px',
                            height: '72px',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '3.5px solid black',
                            borderColor: 'red.main',
                            borderRadius: '50%',
                            zIndex: '-1',
                        }}
                    />
                    <Box
                        sx={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography fontSize={20} fontWeight={700} variant='caption' component='div'>
                            {`${Math.round(value)}%`}
                        </Typography>
                    </Box>
                </Box>
            )}
            {bottomText && <Typography textAlign={'center'}>{title}</Typography>}
        </Box>
    );
};
