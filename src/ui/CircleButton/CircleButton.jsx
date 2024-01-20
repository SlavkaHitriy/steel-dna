import { DefaultIconButton } from '@/ui/DefaultIconButton';
import { Add } from '@mui/icons-material';

export const CircleButton = ({ sx, icon, ...props }) => {
    return (
        <DefaultIconButton
            sx={{
                bgcolor: 'primary.main',
                color: 'common.white',
                '&:hover': {
                    bgcolor: 'primary.dark',
                },
                ...sx,
            }}
            icon={icon || <Add />}
            {...props}
        />
    );
};
