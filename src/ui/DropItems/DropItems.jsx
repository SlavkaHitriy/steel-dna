import { Chip, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { memo, useState } from 'react';
import dragImage from '../../assets/images/drag-image.png';

const image = new Image();
image.src = dragImage;

export const DropItems = memo(({ data }) => {
    const { leftTitle, rightTitle } = data;

    const [availableAttrs, setAvailableAttrs] = useState([
        {
            id: 1,
            title: 'Process',
        },
        {
            id: 2,
            title: 'Heat',
        },
        {
            id: 3,
            title: 'Gauge',
        },
        {
            id: 4,
            title: 'Surface',
        },
        {
            id: 5,
            title: 'End Type',
        },
        {
            id: 6,
            title: 'Coating',
        },
    ]);
    const [associatedAttrs, setAssociatedAttrs] = useState([
        {
            id: 7,
            title: 'Range',
        },
        {
            id: 8,
            title: 'Connection OD',
        },
        {
            id: 9,
            title: 'Connection ID',
        },
        {
            id: 10,
            title: 'Pin Tong',
        },
        {
            id: 11,
            title: 'Box Tong',
        },
        {
            id: 12,
            title: 'Hardband',
        },
        {
            id: 13,
            title: 'IPC',
        },
        {
            id: 14,
            title: 'Length',
        },
    ]);
    const [isOverAvailable, setIsOverAvailable] = useState(false);
    const [isDragAvailable, setIsDragAvailable] = useState(false);
    const [isOverAssociated, setIsOverAssociated] = useState(false);
    const [isDragAssociated, setIsDragAssociated] = useState(false);

    const handleAddAttr = (attr) => {
        setAvailableAttrs(
            availableAttrs.filter((item) => item.title !== attr.title)
        );
        setAssociatedAttrs((prevState) => {
            const newArr = [...prevState];
            newArr.push(attr);

            return newArr;
        });
    };

    const handleRemoveAttr = (attr) => {
        setAssociatedAttrs(
            associatedAttrs.filter((item) => item.title !== attr.title)
        );
        setAvailableAttrs((prevState) => {
            const newArr = [...prevState];
            newArr.push(attr);

            return newArr;
        });
    };

    const handleDrag = (e, attr) => {
        e.dataTransfer.setDragImage(image, 5, 20);
        e.dataTransfer.setData('attr', JSON.stringify(attr));
    };

    const handleDrop = (e, isAdding) => {
        const data = JSON.parse(e.dataTransfer.getData('attr'));

        if (isAdding) {
            handleAddAttr(data);
        } else {
            handleRemoveAttr(data);
        }

        handleGlobalDrop();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleGlobalDrop = () => {
        setIsOverAssociated(false);
        setIsOverAvailable(false);
        setIsDragAvailable(false);
        setIsDragAssociated(false);
    };

    return (
        <>
            <Stack spacing={2} width={'50%'}>
                <Typography>{leftTitle}</Typography>
                <Stack
                    spacing={1}
                    sx={{
                        borderRadius: '5px',
                        border: '1px solid black',
                        borderColor: 'grey.light',
                        p: 3,
                        pointerEvents: isDragAvailable ? 'none' : 'auto',
                        backgroundColor: isOverAvailable
                            ? 'grey.light'
                            : 'unset',
                        '*': {
                            pointerEvents: isDragAssociated ? 'none' : 'auto',
                        },
                    }}
                    height={'100%'}
                    onDrop={(e) => isDragAssociated && handleDrop(e, false)}
                    onDragOver={(e) => {
                        if (isDragAssociated) {
                            setIsOverAvailable(true);
                        }
                        handleDragOver(e);
                    }}
                    onDragLeave={() => {
                        if (isDragAssociated) {
                            setIsOverAvailable(false);
                        }
                    }}
                >
                    {availableAttrs.map((attr) => (
                        <Chip
                            draggable
                            onDragStart={(e) => {
                                setIsDragAvailable(true);
                                handleDrag(e, attr);
                            }}
                            onDragEnd={handleGlobalDrop}
                            key={attr.id}
                            label={attr.title}
                            variant={'outlined'}
                            onClick={() => handleAddAttr(attr)}
                            onDelete={() => {}}
                            deleteIcon={<AddIcon />}
                            sx={{
                                maxWidth: '200px',
                                backgroundColor: '#C0DCF8',
                                justifyContent: 'space-between',
                                fontSize: 15,
                                height: 35,
                                border: '1px solid black',
                                borderColor: 'secondary.main',
                                '.MuiChip-deleteIcon': {
                                    color: 'common.black',
                                },
                                '&:nth-of-type(even)': {
                                    backgroundColor: '#CBE9D2',
                                    borderColor: 'green.main',
                                },
                            }}
                        />
                    ))}
                </Stack>
            </Stack>
            <Stack spacing={2} width={'50%'}>
                <Typography>{rightTitle}</Typography>
                <Stack
                    spacing={1}
                    sx={{
                        borderRadius: '5px',
                        border: '1px solid black',
                        borderColor: 'grey.light',
                        p: 3,
                        pointerEvents: isDragAssociated ? 'none' : 'auto',
                        backgroundColor: isOverAssociated
                            ? 'grey.light'
                            : 'unset',
                        '*': {
                            pointerEvents: isDragAvailable ? 'none' : 'auto',
                        },
                    }}
                    height={'100%'}
                    onDrop={(e) => isDragAvailable && handleDrop(e, true)}
                    onDragOver={(e) => {
                        if (isDragAvailable) {
                            setIsOverAssociated(true);
                        }
                        handleDragOver(e);
                    }}
                    onDragLeave={() => {
                        if (isDragAvailable) {
                            setIsOverAssociated(false);
                        }
                    }}
                >
                    {associatedAttrs.map((attr) => (
                        <Chip
                            key={attr.id}
                            label={attr.title}
                            variant={'outlined'}
                            draggable
                            onDragEnd={handleGlobalDrop}
                            onDragStart={(e) => {
                                setIsDragAssociated(true);
                                handleDrag(e, attr);
                            }}
                            onClick={() => handleRemoveAttr(attr)}
                            onDelete={() => {}}
                            deleteIcon={<ClearIcon />}
                            sx={{
                                maxWidth: '200px',
                                backgroundColor: '#C0DCF8',
                                justifyContent: 'space-between',
                                fontSize: 15,
                                height: 35,
                                border: '1px solid black',
                                borderColor: 'secondary.main',
                                '.MuiChip-deleteIcon': {
                                    color: 'common.black',
                                },
                                '&:nth-of-type(even)': {
                                    backgroundColor: '#CBE9D2',
                                    borderColor: 'green.main',
                                },
                            }}
                        />
                    ))}
                </Stack>
            </Stack>
        </>
    );
});
