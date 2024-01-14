import { InspectionsIcon } from '@/assets/icons/InspectionsIcon';
import { InventoryIcon } from '@/assets/icons/InventoryIcon';
import { Metrics } from '@/components/Metrics';
import { SearchInput } from '@/components/SearchInput';
import { Details } from '@/modules/InventoryDetails/Details';
import { columns, rows } from './data/joints';
import { tabs } from '@/modules/InventoryDetails/data/tabs';
import { ColorStatus } from '@/ui/ColorStatus';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid';
import { Filters } from '@/ui/Filters';
import { Tabs } from '@/ui/Tabs';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { metrics1, metrics2 } from './data/metrics';

export const InventoryDetails = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);

    return (
        <Stack py={5} px={2.5} width={'100%'}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} mb={3}>
                <Stack direction={'row'} spacing={8}>
                    <Stack spacing={2}>
                        <Typography fontSize={20}>Purchase Order</Typography>
                        <Typography fontSize={25} fontWeight={700}>
                            1200554
                        </Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <Stack direction={'row'} spacing={3} alignItems={'center'}>
                            <Typography fontSize={20}>Status</Typography>
                            <ColorStatus code={1} />
                        </Stack>
                        <Typography fontSize={25}>Ready</Typography>
                    </Stack>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <SearchInput />
                    <Filters />
                </Stack>
            </Stack>
            <Stack direction={'row'} gap={4} rowGap={2} flexWrap={'wrap'} mb={3}>
                <Metrics icon={<InventoryIcon />} data={metrics1} />
                <Metrics icon={<InspectionsIcon />} data={metrics2} />
            </Stack>
            <Tabs data={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            <Stack
                flex={1}
                border={'1px solid'}
                borderColor={'grey.light'}
                borderRadius={'5px'}
                overflow={'hidden'}
                bgcolor={'common.white'}
                position={'relative'}
            >
                <Details />
            </Stack>
        </Stack>
    );
};
