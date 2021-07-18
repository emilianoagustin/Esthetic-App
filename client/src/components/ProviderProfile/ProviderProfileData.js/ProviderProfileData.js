import React from 'react';
import { Grid, Box, Paper, Typography, Divider, Avatar } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import Image from '../../../img/Barberia.jpg';

function ProviderProfileData({ provider, classes }) {

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
                        <Grid item>
                            <Avatar>
                                <ShareIcon />
                            </Avatar>
                        </Grid>

                        <Grid item container direction='row'>
                                <Typography variant='body1'>Datos personales </Typography>
                        </Grid>

                        <Divider variant='inset'/>

                        <Grid item container justifyContent='space-between' direction='column'>
                            <Grid item container justifyContent='space-between'>
                                <Typography variant='h7'>email</Typography>
                                <Typography variant='h7'>{provider.email}</Typography>
                            </Grid>
                            <Grid item container justifyContent='space-between'>
                                <Typography variant='h7'>teléfono</Typography>
                                <Typography variant='h7'>{provider.phone}</Typography>
                            </Grid>
                            <Grid item container justifyContent='space-between'>
                                <Typography variant='h7'>género</Typography>
                                <Typography variant='h7'>{provider.gender}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    )
}

export default ProviderProfileData;
