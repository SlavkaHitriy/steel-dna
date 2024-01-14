import { DefaultIconButton } from '@/ui/DefaultIconButton';
import { Add } from '@mui/icons-material';

export const AddBtn = ({ sx, ...props }) => {
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
            icon={<Add />}
            {...props}
        />
    );
};
