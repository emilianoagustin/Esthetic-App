import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProvidersAddresses } from '../../../Redux/actions/actions';
import {
  Grid,
  Box,
  Paper,
  Typography,
  Divider,
  Avatar,
  IconButton,
} from '@material-ui/core';
import Image from '../../../img/Barberia.jpg';
// import EditIcon from '@material-ui/icons/Edit';
import FormAdresses from '../../HomeProviders/FormAdresses/FormAdress';

function ProviderProfileData({ provider, classes, data }) {
  // const dispatch = useDispatch();
  // const addresses = useSelector((state) => state.providersAddresses);

  // useEffect(async () => {
  //   dispatch(getAllProvidersAddresses(provider._id));
  // }, [dispatch]);

  return (
    <Grid item className={classes.gridProfile}>
      <Paper className={classes.paper} elevation={3}>
        <Box className={classes.image}>
          <img className={classes.profileImg} src={Image} />
        </Box>
        <Divider className={classes.divider} />
        <Box className={classes.data}>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            direction='column'
          >
            <Grid item>
              <Typography variant='h5'>
                {provider?.firstName + ' ' + provider?.lastName}
              </Typography>
            </Grid>
            <Grid item className={classes.dataItems}>
              <Avatar className={classes.icon}>
                <IconButton>
                  <FormAdresses type='profile' data={provider} />
                </IconButton>
              </Avatar>
            </Grid>

            <Grid item container direction='row' className={classes.dataItems}>
              <Typography variant='body1' className={classes.dataSubtitle}>
                Datos personales{' '}
              </Typography>
            </Grid>

            <Divider variant='inset' />

            <Grid
              item
              container
              justifyContent='space-between'
              direction='column'
            >
              <Grid
                item
                container
                justifyContent='space-between'
                className={classes.dataItems}
              >
                <Typography variant='h7'>email</Typography>
                <Typography variant='h7'>{provider?.email}</Typography>
              </Grid>
              <Grid
                item
                container
                justifyContent='space-between'
                className={classes.dataItems}
              >
                <Typography variant='h7'>teléfono</Typography>
                <Typography variant='h7'>{provider?.phone}</Typography>
              </Grid>

              <Grid
                item
                container
                direction='row'
                className={classes.dataItems}
              >
                <Typography variant='body1' className={classes.dataSubtitle}>
                  Direcciones{' '}
                </Typography>
              </Grid>
              <Grid
                item
                container
                justifyContent='space-between'
                direction='column'
              >
                {data ? (
                  data
                    .filter((address) => address.is_main === true)
                    .map((a) => {
                      return (
                        <>
                          <Grid
                            item
                            container
                            justifyContent='space-between'
                            className={classes.dirItems}
                          >
                            <Typography variant='h7'>Ubicación</Typography>
                            <Typography variant='h7'>{a.name}</Typography>
                          </Grid>
                          <Grid
                            item
                            container
                            justifyContent='space-between'
                            className={classes.dirItems}
                          >
                            <Typography variant='h7'>Dirección</Typography>
                            <Typography variant='h7'>{a.address_1}</Typography>
                          </Grid>
                          <Grid
                            item
                            container
                            justifyContent='space-between'
                            className={classes.dirItems}
                          >
                            <Typography variant='h7'>Piso/Dpto</Typography>
                            {a.address_details ? (
                              <Typography variant='h7'>
                                {a.address_details}
                              </Typography>
                            ) : (
                              <Typography variant='subtitle1'>
                                no definido
                              </Typography>
                            )}
                          </Grid>
                          <Grid
                            item
                            container
                            justifyContent='space-between'
                            className={classes.dirItems}
                          >
                            <Typography variant='h7'>Ciudad</Typography>
                            <Typography variant='h7'>{a.city}</Typography>
                          </Grid>
                        </>
                      );
                    })
                ) : (
                  <h2>loading...</h2>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
}

export default ProviderProfileData;
