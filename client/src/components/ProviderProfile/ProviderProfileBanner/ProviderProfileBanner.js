import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import Image from '../../../img/banner.jpg';

function ProviderProfileBanner({ classes, provider }) {
    return (
        <Grid item className={classes.gridBanner}>
            <Box className={classes.containerBanner}>
                <img className={classes.bannerImg} src={Image}/>
                <Typography variant='h4' className={classes.bannerText}>¡Hola {provider.firstName}!</Typography>
            </Box>
        </Grid>
    )
};

export default ProviderProfileBanner;
