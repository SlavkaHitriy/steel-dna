import { InspectionsIcon } from '@/assets/icons/InspectionsIcon';
import { InventoryIcon } from '@/assets/icons/InventoryIcon';
import { MapViewIcon } from '@/assets/icons/MapViewIcon';
import { PipeProfilesIcon } from '@/assets/icons/PipeProfilesIcon';
import { PipeTallyIcon } from '@/assets/icons/PipeTallyIcon';
import { SettingsIcon } from '@/assets/icons/SettingsIcon';

export const mainMenu = [
    {
        title: 'Inventory',
        link: '/inventory',
        icon: <InventoryIcon />,
    },
    {
        title: 'Pipe Tally',
        link: '/pipe-tally',
        icon: <PipeTallyIcon />,
    },
    {
        title: 'Inspections',
        link: '/inspections',
        icon: <InspectionsIcon />,
    },
    {
        title: 'Map View',
        link: '/map-view',
        icon: <MapViewIcon />,
    },
    {
        title: 'Pipe Profiles',
        link: '/pipe-profiles',
        icon: <PipeProfilesIcon />,
    },
];

export const systemMenu = [
    {
        title: 'Settings',
        link: '/settings',
        icon: <SettingsIcon />,
        items: [
            {
                title: 'Users',
                link: '/users',
            },
            {
                title: 'Company',
                link: '/company',
            },
            {
                title: 'Sites',
                link: '/sites',
            },
            {
                title: 'Configuration',
                link: '/configuration',
            },
        ],
    },
];
