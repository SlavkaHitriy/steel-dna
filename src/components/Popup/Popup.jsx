import { Box, Stack, styled } from '@mui/material';
import { ScrollContent } from '../ScrollContent/index.js';
import { Title } from '../../ui/Title/index.js';
import { DefaultButton } from '../../ui/DefaultButton/index.js';

const StyledPopup = styled(Box)(({ theme: { palette }, center }) => ({
    position: 'absolute',
    right: center ? '50%' : 0,
    top: center ? '50%' : 0,
    transform: center ? 'translate(50%, -50%)' : 'unset',
    maxWidth: '50vw',
    width: '100%',
    height: center ? 'auto' : '100%',
    maxHeight: center ? 'calc(100vh - 100px)' : 'unset',
    border: center ? `1px solid ${palette.grey.light}` : 'none',
    borderLeft: `1px solid ${palette.grey.light}`,
    backgroundColor: palette.common.white,
}));

export const Popup = ({ isOpened, onClose, title, children, center }) => {
    return isOpened ? (
        <StyledPopup center={center}>
            {center ? (
                children
            ) : (
                <ScrollContent>
                    {title && (
                        <Stack p={'35px 50px'} spacing={4}>
                            <Title>{title}</Title>
                            {children}
                        </Stack>
                    )}
                    <Stack
                        p={'35px 50px'}
                        direction={'row'}
                        justifyContent={'space-between'}
                        mt={'auto'}
                    >
                        <DefaultButton onClick={onClose}>Delete</DefaultButton>
                        <Stack direction={'row'} spacing={2}>
                            <DefaultButton
                                sx={{ color: 'secondary.main' }}
                                onClick={onClose}
                            >
                                Cancel
                            </DefaultButton>
                            <DefaultButton
                                variant={'contained'}
                                onClick={onClose}
                            >
                                Update
                            </DefaultButton>
                        </Stack>
                    </Stack>
                </ScrollContent>
            )}
        </StyledPopup>
    ) : null;
};
