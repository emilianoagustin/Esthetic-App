import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateProvider, updateProviderAddress } from '../../../Redux/actions/actions';
import { Grid, Paper, Typography, TextField, Divider, Button } from '@material-ui/core';
import { Validate } from '../../../utils/validate';

function ProviderProfileUpdate({ classes, provider }) {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [providerData, setProviderData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const [address, setAddress] = useState({
        name: '',
        address_1: '',
        address_details: '',
        zip_code: '',
        country: '',
        state: '',
        city: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        if(e.target.id === 'address_input') {
            const validate = Validate({
                ...providerData,
                ...address,
                [e.target.name]: e.target.value
            });
            setErrors(validate)
            setAddress({...address, [e.target.name]: e.target.value})
        }
        else {
            const validate = Validate({
                ...address,
                ...providerData,
                [e.target.name]: e.target.value
            });
            setErrors(validate)            
            setProviderData({...providerData, [e.target.name]: e.target.value});
        }
    };

    const formIsValid = () => {
        return address && providerData && Object.values(errors).every( value => value === "")
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(provider.addresses.length === 0){
            console.log('hay que poner el put del address');
            dispatch(updateProvider(id, providerData))
        }else{
            dispatch(updateProviderAddress(provider.addresses[0]._id, address))
            dispatch(updateProvider(id, providerData))
        }
    };
    console.log(errors);
    return (
        <Grid item className={classes.gridForm}>
            <Paper className={classes.paper} elevation={3}>
                <Grid container direction='column' spacing={2}>

                    <Grid item container direction='row'>
                        <Typography variant='h5'>Actualiza tu perfil</Typography>
                    </Grid>

                    <Divider variant="inset"/>

                <form onSubmit={(e) => handleSubmit(e)}>

                    <Grid item container direction='row' spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            value={providerData.firstName}
                            name='firstName'
                            label="Nombre"
                            type="text"
                            autoComplete="current-firstName"
                            variant="outlined"
                            fullWidth
                            size='small'
                            required
                            onChange={(e) => handleChange(e)}
                            error={errors.firstName ? true : false}
                            helperText={errors.firstName}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            value={providerData.lastName}
                            name='lastName'
                            label="Apellido"
                            type="text"
                            autoComplete="current-lastName"
                            variant="outlined"
                            fullWidth
                            size='small'
                            onChange={(e) => handleChange(e)}
                            required
                            error={errors.lastName ? true : false}
                            helperText={errors.lastName}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            value={providerData.email}
                            name='email'
                            label="Email"
                            type="text"
                            autoComplete="current-email"
                            variant="outlined"
                            fullWidth
                            size='small'
                            onChange={(e) => handleChange(e)}
                            required
                            error={errors.email ? true : false}
                            helperText={errors.email}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            value={providerData.phone}
                            name='phone'
                            label="Teléfono"
                            type="number"
                            autoComplete="current-phone"
                            variant="outlined"
                            fullWidth
                            size='small'
                            onChange={(e) => handleChange(e)}
                            required
                            error={errors.phone ? true : false}
                            helperText={errors.phone}
                        />
                        </Grid>
                    </Grid>

                    <Grid item container direction='row'>
                        <Typography variant='h6'>Dirección</Typography>
                    </Grid>

                    <Divider variant="inset"/>

                    <Grid item container direction='row' spacing={2}>
                        <Grid item xs={12} sm={3}>
                        <TextField
                            id='address_input'
                            value={address.name}
                            name='name'
                            label="Lugar"
                            type="text"
                            autoComplete="current-name"
                            variant="outlined"
                            fullWidth
                            size='small'
                            onChange={(e) => handleChange(e)}
                            required
                            error={errors.name ? true : false}
                            helperText={errors.name}
                        />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <TextField
                            value={address.address_1}
                            id="address_input"
                            name='address_1'
                            label="Dirección"
                            type="text"
                            autoComplete="current-address_1"
                            variant="outlined"
                            fullWidth
                            size='small'
                            onChange={(e) => handleChange(e)}
                            required
                            error={errors.address_1 ? true : false}
                            helperText={errors.address_1}
                        />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <TextField
                            value={address.address_details}
                            id="address_input"
                            name='address_details'
                            label="Piso/Dpto"
                            type="text"
                            autoComplete="current-address_details"
                            variant="outlined"
                            fullWidth
                            onChange={(e) => handleChange(e)}
                            size='small'
                        />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                        <TextField
                            value={address.zip_code}
                            id="address_input"
                            name='zip_code'
                            label="Código Postal"
                            type="number"
                            autoComplete="current-zip_code"
                            variant="outlined"
                            fullWidth
                            size='small'
                            onChange={(e) => handleChange(e)}
                            required
                            error={errors.zip_code ? true : false}
                            helperText={errors.zip_code}
                        />
                        </Grid>
                    </Grid>

                    <Grid item container direction='row' spacing={2}>
                        <Grid item xs={12} sm={4}>
                        <TextField
                            value={address.country}
                            id="address_input"
                            name='country'
                            label="País"
                            type="text"
                            autoComplete="current-country"
                            variant="outlined"
                            fullWidth
                            size='small'
                            onChange={(e) => handleChange(e)}
                            required
                            error={errors.country ? true : false}
                            helperText={errors.country}
                        />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <TextField
                            value={address.state}
                            id="address_input"
                            name='state'
                            label="Provincia"
                            type="text"
                            autoComplete="current-state"
                            variant="outlined"
                            fullWidth
                            size='small'
                            onChange={(e) => handleChange(e)}
                            required
                            error={errors.state ? true : false}
                            helperText={errors.state}
                        />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <TextField
                            value={address.city}
                            id="address_input"
                            name='city'
                            label="Ciudad"
                            type="text"
                            autoComplete="current-city"
                            variant="outlined"
                            fullWidth
                            size='small'
                            onChange={(e) => handleChange(e)}
                            required
                            error={errors.city ? true : false}
                            helperText={errors.city}
                        />
                        </Grid>
                    </Grid>

                    <Grid item className={classes.buttonContainer}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={!formIsValid()}
                        >
                            ACTUALIZAR
                        </Button>
                    </Grid>
                </form>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default ProviderProfileUpdate
