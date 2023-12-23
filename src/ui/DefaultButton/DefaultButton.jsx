import React, { useRef } from 'react';

import { Button } from '@mui/material';

export const DefaultButton = ({
    type,
    sx,
    children,
    variant = 'text',
    ...otherProps
}) => {
    const isUpload = useRef(type === 'file');

    return (
        <Button
            type={type || 'button'}
            variant={variant}
            component={isUpload.current ? 'label' : 'button'}
            sx={{
                textTransform: 'unset',
                fontWeight: variant === 'contained' ? 700 : 400,
                p: '10px 26px',
                lineHeight: 1.3,
                backgroundColor: '#F6F8FA',
                '&.MuiButton-contained': {
                    backgroundColor: 'secondary.main',
                },
                '&:hover': {
                    backgroundColor:
                        variant === 'text' ? 'grey.light' : 'secondary.dark',
                    '.MuiIconButton-root': {
                        backgroundColor: 'secondary.main',
                    },
                },
                ...sx,
            }}
            {...otherProps}
        >
            {children}
            {isUpload.current && (
                <input hidden accept='image/*' multiple type='file' />
            )}
        </Button>
    );
};
