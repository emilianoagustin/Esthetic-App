import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid, Paper, Typography, TextField, Divider, Button } from '@material-ui/core';
const URL = 'http://localhost:3002/providers/';

function ProviderProfileUpdate({ classes }) {
    const { id } = useParams();

    const [provider, setProvider] = useState({
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

    const handleChange = (e) => {
        if(e.target.id === 'address_input') {
            setAddress({...address, [e.target.name]: e.target.value})
        }
        else setProvider({...provider, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updateProvider = await axios.put(URL + id, provider)
        const updateAdress = await axios.post(`${URL}addresses`, address)
    };

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
                            value={provider.firstName}
                            name='firstName'
                            label="Nombre"
                            type="text"
                            autoComplete="current-firstName"
                            variant="outlined"
                            fullWidth
                            size='small'
                            required
                            onChange={(e) => handleChange(e)}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            value={provider.lastName}
                            name='lastName'
                            label="Apellido"
                            type="text"
                            autoComplete="current-lastName"
                            variant="outlined"
                            fullWidth
                            size='small'
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            value={provider.email}
                            name='email'
                            label="Email"
                            type="text"
                            autoComplete="current-email"
                            variant="outlined"
                            fullWidth
                            size='small'
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            value={provider.phone}
                            name='phone'
                            label="Teléfono"
                            type="number"
                            autoComplete="current-phone"
                            variant="outlined"
                            fullWidth
                            size='small'
                            onChange={(e) => handleChange(e)}
                            required
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
