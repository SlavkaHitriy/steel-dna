import React from 'react';
import cn from 'classnames';

import styles from './index.module.scss';
import { Box, Stack, Typography } from '@mui/material';

export const Progress = ({ data, column, onClick }) => {
    return (
        <Stack
            direction={column ? 'column' : 'row'}
            sx={{
                display: 'inline-flex',
            }}
            className={cn(styles.progressContent, {
                [styles.progressContentColumn]: column,
            })}
            width={'100%'}
            justifyContent={'space-between'}
            maxWidth={'600px'}
        >
            {data.map((item, idx) => (
                <Stack
                    key={item.id}
                    className={cn(styles.progressItem, {
                        [styles.progressItemColumn]: column,
                    })}
                    direction={column ? 'row' : 'column'}
                    spacing={column ? 2 : 1}
                    onClick={() => onClick && onClick(idx)}
                    sx={{
                        cursor: onClick ? 'pointer' : 'auto',
                    }}
                >
                    <Box
                        className={cn(styles.progressStatus, 'mr-2', {
                            [styles.progressStatusColumn]: column,
                            [styles.progressStatusCurrent]: item.status === 1,
                            [styles.progressStatusComplete]: item.status === 2,
                        })}
                    />
                    <Box
                        mt={2}
                        sx={{
                            textAlign: idx === 0 ? 'left' : idx === data.length - 1 ? 'right' : 'center',
                        }}
                    >
                        <Typography fontWeight={item.status === 1 && 700} color={item.status === 1 && column && 'secondary.main'}>
                            {item.title}
                        </Typography>
                        {item.text && <Typography>{item.text}</Typography>}
                    </Box>
                </Stack>
            ))}
        </Stack>
    );
};
