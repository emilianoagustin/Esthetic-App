import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProvidersAddresses } from '../../../Redux/actions/actions';
import { useParams } from 'react-router-dom';
import { Grid, Box, Paper, Typography, Divider, Avatar } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import Image from '../../../img/Barberia.jpg';

function ProviderProfileData({ provider, classes }) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const addresses = useSelector(state => state.providersAddresses);
    useEffect( async () => {
        dispatch(getAllProvidersAddresses(id))
    }, []);

    return (
        <Grid item className={classes.gridProfile}>
            <Paper className={classes.paper} elevation={3}>
                <Box className={classes.image}>
                    <img className={classes.profileImg} src={Image}/>
                </Box>
                <Divider className={classes.divider}/>
                <Box className={classes.data}>
                    <Grid container justifyContent='center' alignItems='center' direction='column'>
                        <Grid item>
                            <Typography variant='h5'>{provider.firstName+ ' ' +provider.lastName}</Typography>
                        </Grid>
                        <Grid item className={classes.dataItems}>
                            <Avatar>
                                <ShareIcon />
                            </Avatar>
                        </Grid>

                        <Grid item container direction='row' className={classes.dataItems}>
                            <Typography variant='body1' className={classes.dataSubtitle}>Datos personales </Typography>
                        </Grid>

                        <Divider variant='inset'/>

                        <Grid item container justifyContent='space-between' direction='column'>
                            <Grid item container justifyContent='space-between' className={classes.dataItems}>
                                <Typography variant='h7'>email</Typography>
                                <Typography variant='h7'>{provider.email}</Typography>
                            </Grid>
                            <Grid item container justifyContent='space-between' className={classes.dataItems}>
                                <Typography variant='h7'>teléfono</Typography>
                                <Typography variant='h7'>{provider.phone}</Typography>
                            </Grid>

                            <Grid item container direction='row' className={classes.dataItems}>
                                <Typography variant='body1' className={classes.dataSubtitle}>Direcciones </Typography>
                            </Grid>
                            <Grid item container justifyContent='space-between' direction='column'>
                                {
                                    addresses.filter( address => address.is_main === true).map( a => {
                                        return (
                                            <>
                                                <Grid item container justifyContent='space-between' className={classes.dirItems}>
                                                    <Typography variant='h7'>Ubicación</Typography>
                                                    <Typography variant='h7'>{a.name}</Typography>                                                
                                                </Grid>
                                                <Grid item container justifyContent='space-between' className={classes.dirItems}>
                                                    <Typography variant='h7'>Dirección</Typography>
                                                    <Typography variant='h7'>{a.address_1}</Typography>                                                
                                                </Grid>
                                                <Grid item container justifyContent='space-between' className={classes.dirItems}>
                                                    <Typography variant='h7'>Piso/Dpto</Typography>
                                                    <Typography variant='h7'>{a.address_details}</Typography>                                                
                                                </Grid>
                                                <Grid item container justifyContent='space-between' className={classes.dirItems}>
                                                    <Typography variant='h7'>Ciudad</Typography>
                                                    <Typography variant='h7'>{a.city}</Typography>                                                
                                                </Grid>
                                            </>
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    )
}

export default ProviderProfileData;
{/* {addresses.map((address, i) => {
    return (
            <Grid item container>
                <Grid item container justifyContent='space-between' className={classes.dataItems}>
                    <Typography key={i} variant='h7'>Lugar</Typography>
                    <Typography key={i} variant='h7'>{address.name}</Typography>
                </Grid>
                <Grid item container justifyContent='space-between' className={classes.dataItems}>
                    <Typography key={i} variant='h7'>Dirección</Typography>
                    <Typography key={i} variant='h7'>{address.address_1}</Typography>
                </Grid>
                <Grid item container justifyContent='space-between' className={classes.dataItems}>
                    <Typography key={i} variant='h7'>Provincia</Typography>
                    <Typography key={i} variant='h7'>{address.state}</Typography>
                </Grid>
                {/* <Grid item container justifyContent='space-between' className={classes.dataItems}>
                    <Typography key={i} variant='h7'>Ciudad</Typography>
                    <Typography key={i} variant='h7'>{address.city}</Typography>
                </Grid> */}
            //</Grid>
    //)
//})} */}

{/* <Typography variant='h7'>género</Typography>
<Typography variant='h7'>{provider.gender}</Typography> */}