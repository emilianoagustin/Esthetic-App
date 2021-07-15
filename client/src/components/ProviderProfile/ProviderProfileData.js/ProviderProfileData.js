import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box, Paper, Typography } from '@material-ui/core';
import Image from '../../../img/Barberia.jpg';

function ProviderProfileData({ provider, classes }) {
    const dispatch = useDispatch();
    const service = useSelector(state => state.serviceDetails.data);
    const servicesIDs = provider.services;
    const [obj, setObj] = useState([]);

    // useEffect(() => {
    //     servicesIDs.forEach(s => {
    //         dispatch(getServiceDetails(s))
    //         return setObj(obj => obj.concat(service))
    //     })
    // }, [dispatch]);

    return (
        <Grid item className={classes.gridItem}>
            <Paper className={classes.paper} elevation={3}>
                <Box className={classes.image}>
                    <img className={classes.img} src={Image}/>
                    {/* provider.image.includes('undefined') ? Image : provider.image */}
                </Box>
                <Box className={classes.data}>
                    <Grid container justifyContent='space-around'>
                        <Grid item>
                            <Typography variant='h6'>Nombre :</Typography>
                            <Typography variant='h6'>Telefono :</Typography>
                            <Typography variant='h6'>Mail :</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>{provider.firstName+ ' ' +provider.lastName}</Typography>
                            <Typography variant='h6'>{provider.phone}</Typography>
                            <Typography variant='h6'>{provider.email}</Typography>
                            {obj.map(el => <p>{el.name}</p>)}
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    )
}

export default ProviderProfileData;
