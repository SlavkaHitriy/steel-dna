import { columns, rows } from '@/modules/InventoryDetails/data/joints';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid';
import { Filters } from '@/ui/Filters';
import { Box, Grid, Stack, Typography } from '@mui/material';

export const Details = () => {
    return (
        <>
            <Stack direction={'row'} spacing={4} p={2} alignItems={'flex-end'}>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>End User</Typography>
                                <Typography fontWeight={700}>ACME Tubular Services</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Pipe Category</Typography>
                                <Typography fontWeight={700}>OCTG/Casing</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Pipe Type</Typography>
                                <Typography fontWeight={700}>API 5.00”</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Purchase Order</Typography>
                                <Typography fontWeight={700}>4587001</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Site Location</Typography>
                                <Typography fontWeight={700}>Houston Yard</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
                <Box bgcolor={'grey.light'} width={'1px'} height={160} flexShrink={0} />
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Pipe Name</Typography>
                                <Typography fontWeight={700}>2.875” x 0.276”w 7.90 Lb/ft, P-110 SMLS R2 Tubing.</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Grade</Typography>
                                <Typography fontWeight={700}>S-135</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Connection</Typography>
                                <Typography fontWeight={700}>FLEX TSS</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>O.D.</Typography>
                                <Typography fontWeight={700}>5&quot; 7/8</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Weight (lb/ft)</Typography>
                                <Typography fontWeight={700}>00.00</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Wall Thick.</Typography>
                                <Typography fontWeight={700}>00.00</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Range</Typography>
                                <Typography fontWeight={700}>2</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
                <Box bgcolor={'grey.light'} width={'1px'} height={160} flexShrink={0} />
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Stack maxWidth={100} ml={'auto'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                                <Filters fixValue={'Edit'} />
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>O.D.</Typography>
                                <Typography fontWeight={700}>00.00</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>I.D.</Typography>
                                <Typography fontWeight={700}>00.00</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Pin Tong</Typography>
                                <Typography fontWeight={700}>00.00</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Box Tong</Typography>
                                <Typography fontWeight={700}>00.00</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Hardband</Typography>
                                <Typography fontWeight={700}>DURABAND</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>IPC</Typography>
                                <Typography fontWeight={700}>YES</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
            <Box flex={1}>
                <DefaultDataGrid columns={columns} rows={rows} onRowClick={() => {}} />
            </Box>
        </>
    );
};
